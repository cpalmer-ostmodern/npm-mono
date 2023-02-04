import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Lambda } from "./lambda";
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import * as path from "path";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // example resource
    // const queue = new sqs.Queue(this, 'CdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const lambdaA = new Lambda(this, "lambda-a");

    const lambdaB = new Lambda(this, "lambda-b");

    const api = new RestApi(this, "example-api", {
      defaultCorsPreflightOptions: {
        allowOrigins: ["*"],
      },
    });
 
    api.root
      .addResource("lambda-a")
      .addMethod("GET", new LambdaIntegration(lambdaA.ref));
    api.root
      .addResource("lambda-b")
      .addMethod("GET", new LambdaIntegration(lambdaB.ref));    
  }

}

