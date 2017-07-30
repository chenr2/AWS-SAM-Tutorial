# AWS SAM Tutorial

This tutorial uses AWS SAM to create a hello-world Serverless app with API Gateway, Lambda, and DynamoDB.

Start with the first commit. Then `Checkout` the next commit when you're ready to move onto the next step.

## Deploy your first Lambda to AWS

There are three files you need to scaffold even the simplest Serverless app.

### template.yaml

This is a CloudFormation template that sets up your entire app infrastructure.

One important distinction is this line:

```
Transform: AWS::Serverless-2016-10-31
```

AWS SAM is really just CloudFormation, but with some fancy Transforms for Serverless resources like API Gateway, Lambda, and DynamoDB.

At the moment, it just defines your Lambda:

```
  HelloLambda:
    Type: AWS::Serverless::Function
```

And points to the location of your code:

```
      CodeUri: src 
```

### src/index.py

This is a Python script that returns a simple response.

### deploy.sh

This bash script takes care of package and deployment. 

* Creates an S3 bucket to store your Lambda code
* Package command uploads your code to S3
* Package command creates `output.yaml`, which is like `template.yaml` but the `CodeUri` points to S3 instead.
* Cleans up build artifacts

Check out the keynote slides to see conceptually how the package and deploy commands work. 

**Important**: You have to change the suffix on the bucket name `-90210-rob` to something unique. Otherwise your bucket name will conflict with mine.

### Build and Run

Run this command:

```
./deploy.sh
```

If all goes well, you'll see something like this:

```
make_bucket: SAM-tutorial-90210-rob
Uploading to 8ad9edba55b4c9bef9e1b1acd8ba1cd4  233 / 233.0  (100.00%)
Successfully packaged artifacts and wrote output template to file build/output.yaml.
Execute the following command to deploy the packaged template
aws cloudformation deploy --template-file ~/Documents/SAM-Tutorial/build/output.yaml --stack-name <YOUR STACK NAME>
Waiting for changeset to be created..
Waiting for stack create/update to complete
Successfully created/updated stack - SAM-tutorial
```

## Next step

`Checkout` the next commit when you're ready to move onto the next step.