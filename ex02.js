// Exercise 2: Directory Files Only
// Goal: list only the files (not the folders) in the folder my-folder.
// Required: fs.readdir(directoryPath, callback), fs.lstat(filePath, callback), path.join(dir, item).
// Check every entry with fs.lstat and print only those where stats.isFile() is true.
//
// Expected output (the order may change):
//   File: index.js
//   File: notes.txt
//   File: app.js
//
// Run: node ex02.js

const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "my-folder");

// write your code here

fs.readdir(directoryPath, (error, items) => {
  if (error) {
    console.error("Error reading directory:", error);
    return;
  }

  items.forEach((item) => {
    const filePath = path.join(directoryPath, item);
    fs.lstat(filePath, (statError, stats) => {
      if (statError) {
        console.error("Error getting stats for", item, statError);
        return;
      }

      if (stats.isFile()) {
        console.log(`File: ${item}`);
      }
    });
  });
});