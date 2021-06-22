var argv = require('yargs').argv;
var fs = require('fs');

console.log(argv);
// Input file name with yargs concept
var inputFileName = argv.fileName ? argv.fileName : argv.f;
console.log(inputFileName);
var dummyTextToWrite = "You are awesome";

//load JSON file list
var data = fs.readFileSync("data.json");
if (data.toString() != "") {    
    var myObject = JSON.parse(data);
    console.log('my object file data',myObject);
    myObject.forEach(element => {
        //console.log('Data form json file ',data.toString());
        if(element.fileName == inputFileName){
            console.log('File already exists enter new file name to proceed');
            process.exit(1);
        }
    });
    // Defining new data to be added
    let newData = {
        fileName: inputFileName,
    };

    // Adding the new data to our object
    myObject.push(newData);
    console.log('new data', newData);
    // Writing to our JSON file
    var newData2 = JSON.stringify(myObject);
    console.log('new data 2', newData2)
    fs.writeFile("data.json", newData2, (err) => {
        // Error checking
        if (err) throw err;
        console.log("New data added");
        fs.writeFile(inputFileName, dummyTextToWrite, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('File written successfully',inputFileName);
            }
        });
    });
} else {
    var myObjectSingle = [];
    let newDataSingle = {

        fileName: inputFileName,
    };
    myObjectSingle.push(newDataSingle);
    var newDataSingle1 = JSON.stringify(myObjectSingle);
    console.log('new data 2', newDataSingle1)
    fs.writeFile("data.json", newDataSingle1, (err) => {
        // Error checking
        if (err){
            throw err;
        } else{
        console.log("New data added in file");
        fs.writeFile(inputFileName, dummyTextToWrite, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Text written in the File successfully',inputFileName);
            }
        });
    }
    });
}



