const axios = require("axios");
const qs = require("qs");

exports.handler = function(event, context, callback) {
  // apply our function to the queryStringParameters and assign it to a variable
  const API_PARAMS = qs.stringify(event.queryStringParameters);
  // Get env var values defined in our Netlify site UI
  const { REACT_APP_YELP_API_KEY, REACT_APP_YELP_CLIENT_ID } = process.env;
  // In this example, the API Key needs to be passed in the params with a key of key.
  // We're assuming that the ApiParams var will contain the initial ?
  const ApiKey = `${REACT_APP_YELP_API_KEY}`;
  const ClientId = `${REACT_APP_YELP_CLIENT_ID}`

  // Here's a function we'll use to define how our response will look like when we call callback
  const pass = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    });
  };

  // Perform the API call.
  const get = () => {
    axios
      .get(URL)
      .then(response => {
        console.log(response.data);
        pass(response.data);
      })
      .catch(err => pass(err));
  };
  if (event.httpMethod == "GET") {
    get();
  }
};