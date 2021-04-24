const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=8bef2d752753a8ff0527696ef477d8ef&query=Dhaka";

request({ url: url, json: true }, (error, res) => {
  console.log(res.body.current);
});
