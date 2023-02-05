import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import * as path from "path";
 
export class Lambda extends Construct {
  ref: Function;
 
  constructor(scope: Construct, id: string) {
    super(scope, id);
 
    this.ref = new Function(this, id, {
      runtime: Runtime.NODEJS_14_X,
      handler: "index.handler",
      code: Code.fromAsset(
        path.resolve(__dirname, `../../lambdas/dist/${id}/`)
      ),
    });
  }
}