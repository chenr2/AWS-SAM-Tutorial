# AWS SAM Tutorial

This tutorial uses AWS SAM to create a hello-world Serverless app with API Gateway, Lambda, and DynamoDB.

Start with the first commit. Then `Checkout` the next commit when you're ready to move onto the next step.

## Deploy your website to S3

There's no use having your website sitting on your local Mac. You want to deploy it to S3 for others to see.

This commit adds a bunch of syntax to the template:

```
  S3Bucket:
    Type: AWS::S3::Bucket
    Properties:
      AccessControl: PublicRead
      WebsiteConfiguration:
        IndexDocument: index.html
        ErrorDocument: error.html
  BucketPolicy:
    Type: AWS::S3::BucketPolicy
    Properties:
      PolicyDocument:
        Statement:
          - Sid: PublicReadForGetBucketObjects
            Effect: Allow
            Principal: '*'
            Action: s3:GetObject
            Resource: !Join
              - ''
              - - 'arn:aws:s3:::'
                - !Ref S3Bucket
                - /*
      Bucket: !Ref S3Bucket
Outputs:
  WebsiteURL:
    Value: !GetAtt S3Bucket.WebsiteURL
    Description: URL for website hosted on S3
```

It's a lot of text. But it's basically doing a few things:

* **S3Bucket**: Creates an S3 bucket website
* **BucketPolicy**: Makes the S3 bucket, and everything in it publicly accessible
* **Outputs**: Tells you the S3 website URL

## Build and Run

```
./deploy.sh
```

Under CloudFormation Resources, get the S3 bucket name.

Then replace the last two lines of `test-website/package.json`:

```
  "scripts": {
    ...
    "predeploy": "npm run build",
    "deploy": "aws s3 sync build/ s3://sam-tutorial-dev-s3bucket-s64qw5dvivdx"
  }
```

To deploy your ReactJS website to S3:

```
npm run deploy
```

Now go to the `Outputs` tab of the CloudFormation stack, and click on the URL:

```
http://sam-tutorial-dev-s3bucket-s64qw5dvivdx.s3-website-us-east-1.amazonaws.com
```

Open the console, and verify that data is logged to the console.

## Next step

`Checkout` the next commit when you're ready to move onto the next step.