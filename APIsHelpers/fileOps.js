const fs = require("fs");

function addLogData(path, data) {
  const newLine = "\n";
  let dataToBeWritten = { ...data };
  dataToBeWritten.timestamp = Date.now();
  let dataToWrite = `${JSON.stringify(dataToBeWritten)}${newLine}`;
  try {
    fs.appendFile(path, dataToWrite, err => {
      if (err) throw err;
    });
  } catch (err) {
    console.log(err);
  }
}

function readFileHelper(path) {
  return fs
    .readFileSync(path, "utf8")
    .toString()
    .split("\n");
}

module.exports = { addLogData, readFileHelper };
