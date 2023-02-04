



## NPM Workspaces
You may use this workspace root folder in order to run an arbitrary command from a package's "scripts" object in the context of the specified workspaces. If no "command" is provided, it will list the available scripts for each of these configured workspaces.

Given a project with configured workspaces, e.g:

 
.
+-- package.json
`-- packages
   +-- a
   |   `-- package.json
   +-- b
   |   `-- package.json
   `-- c
       `-- package.json

Assuming the workspace configuration is properly set up at the root level package.json file. e.g:

 
{
    "workspaces": [ "./packages/*" ]
}
And that each of the configured workspaces has a configured test script, we can run tests in all of them using the workspaces config:

 
npm test --workspaces
Filtering workspaces
It's also possible to run a script in a single workspace using the workspace config along with a name or directory path:

 
npm test --workspace=a
The workspace config can also be specified multiple times in order to run a specific script in the context of multiple workspaces. When defining values for the workspace config in the command line, it also possible to use -w as a shorthand, e.g:

 
npm test -w a -w b
This last command will run test in both ./packages/a and ./packages/b packages.

https://docs.npmjs.com/cli/v9/commands/npm-run-script



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
identity-based policy allows the ssm:PutParameter action (Service: AmazonSSM; Status Code: 400; Error Code: AccessDeniedException; Request ID: *******-****-****-****-************; Proxy: null)```

Then you may need to re-check your permissions allocated to include ssm:PutParameter 

to deploy run from the root: 

```terminal
npm run deploy -w @local/cdk
```


