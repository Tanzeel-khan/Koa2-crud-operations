// create a file bio.txt and write data into it
// add more data into the file at the end of existing data
// read the data without getting buffer data at first
// rename the file name to mybio.txt
// now delete the file
const fs = require('fs');
// fs.writeFileSync('mybio.txt','first crud operation in Node.js');
// fs.appendFileSync('mybio.txt','\n Hello world!');
fs.readFile('mybio.txt','utf-8',function(err,data){
    if(err){
       console.log(err);
    }
    else{
    console.log(data);
    }
})
// fs.renameSync('bio.txt','mybio.txt');