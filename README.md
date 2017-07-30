# AWS SAM Tutorial

This tutorial uses AWS SAM to create a hello-world Serverless app with API Gateway, Lambda, and DynamoDB.

Start with the first commit. Then `Checkout` the next commit when you're ready to move onto the next step.

## Before you begin

### Install the AWS CLI

The AWS CLI is used to deploy your app to AWS.

These instructions are for the Mac. 

Install **Homebrew**

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Use **Homebrew** to install Python

```
brew install python
```

Now you can install the **AWS CLI**, which is a Python package.

```
sudo pip install awscli --ignore-installed six
```

### Configure your AWS local profile

You need to save your AWS access key into a local profile. These credentials determine which AWS account you deploy to, while authorizing your access.

```
aws configure

AWS Access Key ID [None]: ABCEDFGHIJKLMNOPQRST
AWS Secret Access Key [None]: 1122334455aaBBccDDeeFFggHHiiJJkk//LLmmOO
Default region name [None]: us-east-1
Default output format [None]: json
```

## Next step

`Checkout` the next commit when you're ready to move onto the next step.