const readFileHelper = require("./APIsHelpers/fileOps").readFileHelper;
const getParishForThePostcode = require("./APIsHelpers/postcodeOps")
  .getParishForThePostcode;

readFileHelper("./inputPostcodes.txt")
  .map(item => {
    getParishForThePostcode(item).then(res => console.log(res));
  });
