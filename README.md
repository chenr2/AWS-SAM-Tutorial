# AWS SAM Tutorial

This tutorial uses AWS SAM to create a hello-world Serverless app with API Gateway, Lambda, and DynamoDB.

Start with the first commit. Then `Checkout` the next commit when you're ready to move onto the next step.

## Point the website to your API

To test your API, point your ReactJS website to the API Gateway endpoint:

```
const endpoint = 'https://y64wwpgva0.execute-api.us-east-1.amazonaws.com/dev/test'

class App extends Component {

  componentDidMount() {
    fetch(endpoint)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("data: " + JSON.stringify(responseJson));
      });
  }

  render() {
    ...
``` 

There are a few things going on:

* **endpoint**: Replace this with your API Gateway endpoint.
* **componentDidMount**: This gets called when your page loads.
* **fetch**: This is a network call built into ReactJS.

## Build and Run

Refresh the page http://localhost:3000/.

Open the console in Chrome (Command-Option-i), and go to the `Console` tab.

You should see the following in red:

```
Fetch API cannot load https://y64wwpgva0.execute-api.us-east-1.amazonaws.com/dev/test. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

## Next step

`Checkout` the next commit when you're ready to move onto the next step.