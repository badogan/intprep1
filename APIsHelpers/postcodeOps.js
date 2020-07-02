const fetch = require("node-fetch");
const addLogData = require("./fileOps").addLogData;

const defaultURL = "https://api.postcodes.io/postcodes/";
const logDataURL = "./logData.txt";

function getParishForThePostcode(
  postcode,
  getPostcodeDetails_URL = `${defaultURL}${postcode}`
) {
  return fetch(getPostcodeDetails_URL)
    .then(res => res.json())
    .then(dataReceived => {
      if (dataReceived.status === 200) {
        let completeResult = {
          postcode,
          result: "success",
          data: dataReceived.result.parish
        };
        addLogData(logDataURL, completeResult);
        return completeResult;
      } else if (dataReceived.status === 404) {
        let completeResult = {
          postcode,
          result: "fail",
          data: "invalid postcode"
        };
        addLogData(logDataURL, completeResult);
        return completeResult;
      } else {
        let completeResult = {
          postcode,
          result: "fail",
          data: null
        };
        addLogData(logDataURL, completeResult);
        return completeResult;
      }
    })
    .catch(err => {
      let completeResult = {
        postcode,
        result: "fail",
        data: err.toString().split('\n')[0]
      };
      addLogData(logDataURL, completeResult);
      return completeResult;
    });
}

function funnyFunction(num) {
  return num === 10;
}

const findType = input => typeof input;

module.exports = { getParishForThePostcode, funnyFunction, findType };

// setTimeout(() => console.log(testCases), 2000);
