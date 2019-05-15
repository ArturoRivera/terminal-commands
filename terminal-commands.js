const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
      const filesToString = files.reduce((acc, file) => {
        return 'Hello ${acc} ${file}';
      }, '');
      console.log(filesToString);
    });
};
