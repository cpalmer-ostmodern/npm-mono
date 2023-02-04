## AWS CDK

To setup your aws cdk, first install the aws-cli globally on your machine:

npm i -g aws-cli

Then configure the cli with the correct credentials for the aws account you want to work with.

cd into yout ~/.aws folder and add your account to the credentials file
If one doesn't exist then just simply create one

then add your information under a new profile

```terminal
[example]
aws_access_key_id=************
aws_secret_access_key=***********************************

(You may need to setup an IAM role in the management console first and then using the access key and secret access key append your credentials file)

You can test your cli is working with the following command: 

```terminal
aws sts get-caller-identity
```

you should see something like this: 

```json
{
    "UserId": "************",
    "Account": "***********",
    "Arn": "arn:aws:iam::*************:user/your.name@ostmodern.co.uk"
}
```
## Bootstrap

To Bootstrap your cdk with your aws account run from the terminal the following command with your accnt number and region using the aws_accnt and aws_region flags

 - check your IAM permissions are set to include cloudformation

you can fetch your default region using this command: 

```terminal
aws configure get region
```

```terminal
npm run bootstrap -w @local/cdk --aws_accnt=************ --aws_region=**-****-*
```

 If you get this warning: 

 ```terminal
 User: arn:aws:iam::**************:user/example is not authorized to perform: ssm:PutParameter on resource: arn:aws:ssm:eu-west-1:**********:parameter/cdk-bootstrap/hnb659fds/version because no
identity-based policy allows the ssm:PutParameter action (Service: AmazonSSM; Status Code: 400; Error Code: AccessDeniedException; Request ID: *******-****-****-****-************; Proxy: null)
```

Then you may need to re-check your permissions allocated to include ssm:PutParameter 

## Deploy

to deploy run from the root: 

```terminal
npm run deploy -w @local/cdk
```

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Other (possibly) Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
