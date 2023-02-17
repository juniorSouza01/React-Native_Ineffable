let request = require('request');
let options = {
  'method': 'GET',
  'url': 'https://api.adviceslip.com/advice',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});