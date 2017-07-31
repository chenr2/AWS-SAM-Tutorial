# AWS SAM Tutorial

This tutorial uses AWS SAM to create a hello-world Serverless app with API Gateway, Lambda, and DynamoDB.

Start with the first commit. Then `Checkout` the next commit when you're ready to move onto the next step.

## Add CORS

To get around the CORS error, go back to your Lambda code in `index.py`.

Add the following line into the `response`:

```
    response = {
        "statusCode": 200,
        "headers": { "Access-Control-Allow-Origin": "*" },
        "body": json.dumps(table_results)
    }
```

## Build and Run

Redeploy:

```
./deploy.sh
```

Refresh the page http://localhost:3000/.

Open the console in Chrome (Command-Option-i), and go to the `Console` tab.

Instead of the error, you should now see the API response.

```
data: {"Count":0,"Items":[],"ScannedCount":0,"ResponseMetadata":{"RetryAttempts":0,"HTTPStatusCode":200,"RequestId":"NU2GVTVFFUMPGBK4HKVTNJ4MKRVV4KQNSO5AEMVJF66Q9ASUAAJG","HTTPHeaders":{"x-amzn-requestid":"NU2GVTVFFUMPGBK4HKVTNJ4MKRVV4KQNSO5AEMVJF66Q9ASUAAJG","content-length":"39","server":"Server","connection":"keep-alive","x-amz-crc32":"3413411624","date":"Mon, 31 Jul 2017 01:17:13 GMT","content-type":"application/x-amz-json-1.0"}}}
```

**Note**: CORS is a little more complicated than adding a header in the Lambda response. API Gateway has gives you an `Enable CORS` option in the `Actions` menu, which you might have to do for a proper CORS setup. 

See https://github.com/awslabs/serverless-application-model/issues/23. 

## Next step

`Checkout` the next commit when you're ready to move onto the next step.