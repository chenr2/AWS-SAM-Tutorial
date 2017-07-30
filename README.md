# AWS SAM Tutorial

This tutorial uses AWS SAM to create a hello-world Serverless app with API Gateway, Lambda, and DynamoDB.

Start with the first commit. Then `Checkout` the next commit when you're ready to move onto the next step.

## Create a Table

This commit adds a `SimpleTable`:

```
Resources:
  ...
  HelloTable:
    Type: AWS::Serverless::SimpleTable
    Properties:
      PrimaryKey:
        Name: name
        Type: String
      ProvisionedThroughput:
        ReadCapacityUnits: 1
        WriteCapacityUnits: 1
```

This is just a **DynamoDB** table, with a Primary Key of `name`.

## Build and run

```
./deploy.sh
```

Within the AWS console, go to DynamoDB > Tables. You should see a table named `SAM-tutorial-HelloTable-123blah`.

Click on the Table, and select the **Items** tab. Then click **Create Item** and add an entry or two.

![](images/create-table.png)

## Next step

`Checkout` the next commit when you're ready to move onto the next step.