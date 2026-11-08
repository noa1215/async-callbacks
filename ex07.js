// Exercise 7: Create a New Folder
// Goal: create a folder named backup if it does not already exist.
// Required:
//   fs.access(path, fs.constants.F_OK, callback) - check if backup exists
//   fs.mkdir(path, callback)                     - create the folder if it does not exist
//   path.join(basePath, 'backup')                - build the folder path (basePath = __dirname)
//
// Expected output:
//   Folder created successfully.      (if the folder was created)
//   Folder already exists.            (if it already exists)
//
// Run: node ex07.js   (run it twice)

const fs = require("fs");
const path = require("path");

const backupPath = path.join(__dirname, "backup");

fs.access(backupPath, fs.constants.F_OK, (accessError) => {
  if (!accessError) {
    console.log("Folder already exists.");
    return;
  }

  if (accessError.code !== "ENOENT") {
    console.error(accessError.message);
    return;
  }

  fs.mkdir(backupPath, (mkdirError) => {
    if (mkdirError) {
      console.error(mkdirError.message);
      return;
    }

    console.log("Folder created successfully.");
  });
});
