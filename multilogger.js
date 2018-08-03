const fs = require('fs');
const {Console} = require('console');

const stdOut = fs.createWriteStream('logs/stdOut.log');
const stdErr = fs.createWriteStream('logs/stdErr.log');

var cnsle = new Console(stdOut, stdErr);

exports.multiLog = function(msg, isError=false, logToStdOutPut=true)
{
    if(msg == null || msg.trim() == "")
    {
        cnsle.error("");
        console.log();
    }
    else
    {
        if(isError)
        {
            cnsle.error(msg);
        }
        else
        {
            cnsle.log(msg);
        }

        if(logToStdOutPut)
        {
            console.log(msg);
        }
        
    }
};