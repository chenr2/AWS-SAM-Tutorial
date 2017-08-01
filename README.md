# AWS SAM Tutorial

This tutorial uses AWS SAM to create a hello-world Serverless app with API Gateway, Lambda, and DynamoDB.

Start with the first commit. Then `Checkout` the next commit when you're ready to move onto the next step.

## Render the table data in the website

This commit renders the list of names returned from DynamoDB.

```
class App extends Component {
  // 1
  constructor() {
      super();
      this.state = {items: []};
  }

  componentDidMount() {
    fetch(endpoint)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("data: " + JSON.stringify(responseJson));
        // 2
        this.setState({items: responseJson.Items}); 
      });
  }

  render() {
    // 3
    const rows = this.state.items.map((item, index) => <tr><td>{item.name}</td></tr>);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <table>
            <tbody>
              // 4
              {rows}
            </tbody>
        </table>
      </div>
    );
  }
}
```

Here are the changes:

1. The `state` is initially set to an object with an `items` property (which starts off with an empty array.)
1. When the data comes back from the API call, the `Items` payload is extracted.
1. Each name from the list is wrapped with a table row.
1. The table rows of names goes into the table body.

The lifecycle kind of goes like this:

1. `constructor()` gets called at the beginning.
1. `componentDidMount()` is called next. This kicks off the API call.
1. `render()` gets called when the page is initially loaded (which at this point has an empty array of names). It gets called again in the API callback, via `setState()` -- but this time, it has real data. 

## Build and Run

To deploy your ReactJS website to S3:

```
npm run deploy
```

Now go to the `Outputs` tab of the CloudFormation stack, and click on the URL:

```
http://sam-tutorial-dev-s3bucket-s64qw5dvivdx.s3-website-us-east-1.amazonaws.com
```

Open the console, and verify that data is logged to the console.

If there is no table data, go into DynamoDB and create a few names, and reload the page.

## Next step

`Checkout` the next commit when you're ready to move onto the next step.