import { CfnOutput, SecretValue, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as codebuild from "aws-cdk-lib/aws-codebuild";
import {
  App,
  GitHubSourceCodeProvider,
  RedirectStatus,
} from "@aws-cdk/aws-amplify-alpha";
import { CfnApp } from "aws-cdk-lib/aws-amplify";

interface HostingStackProps extends StackProps {
  readonly owner: string;
  readonly repository: string;
  readonly githubOauthTokenName: string;
  readonly environmentVariables?: { [name: string]: string };
}

export class AmplifyHostingStack extends Stack {
  constructor(scope: Construct, id: string, props: HostingStackProps) {
    super(scope, id, props);

    const amplifyApp = new App(this, "amplifyNextApp", {
      appName: "NextJS",
      sourceCodeProvider: new GitHubSourceCodeProvider({
        owner: "cpalmer-ostmodern",
        repository: "npm-mono",
        oauthToken: SecretValue.unsafePlainText(
          "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"
        ) as any,
      }),
      autoBranchCreation: {
        // Automatically connect branches that match a pattern set
        patterns: ["review/*", "test/*"],
      },
      autoBranchDeletion: false,
      customRules: [
        {
          source: "/<*>",
          target: "	/index.html",
          status: RedirectStatus.NOT_FOUND_REWRITE,
        },
      ],
      environmentVariables: props.environmentVariables,
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: 1,
        frontend: {
          phases: {
            preBuild: {
              commands: ["npm i"],
            },
            build: {
              commands: ["npm run build -w @apps/hia/website"],
            },
          },
          artifacts: {
            baseDirectory: ".next",
            files: ["**/*"],
          },
          cache: {
            paths: ["node_modules/**/*"],
          },
        },
      }),
    });

    amplifyApp.addBranch("main", {
      stage: "PRODUCTION",
    });

    //Drop down to L1 to allow new NextJS architecture
    const cfnAmplifyApp = amplifyApp.node.defaultChild as CfnApp;
    cfnAmplifyApp.platform = "WEB_COMPUTE";

    new CfnOutput(this, "appId", {
      value: amplifyApp.appId,
    });
  }
}
