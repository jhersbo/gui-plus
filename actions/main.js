module.exports = {
    getConfigFile: getConfigFile,
    updateConfigFile: updateConfigFile
}


function getConfigFile(pathString){
    const data = require(pathString);
    return data;
}

function updateConfigFile(pathString, payload){
    const fs = require('fs');
    const path = require('path');
    const oldConfig = getConfigFile(pathString);

    if(Object.entries(payload).length != 0){
        recParseObject(oldConfig, payload);
    }

    fs.writeFileSync(path.join(__dirname, pathString), JSON.stringify(oldConfig));
}

//HELPERS
function recParseObject(oldConfig, payload){
    let oldEntries = Object.entries(oldConfig);

    for(let [ k, v ] of oldEntries){

        let payloadHasProperty = Object.getOwnPropertyNames(payload).includes(k);

        if(typeof v == "object" && payloadHasProperty){
            recParseObject(v, payload[`${k}`]);
        } else if (typeof v != "object" && payloadHasProperty){
            if(v != payload[`${k}`]){
                oldEntries[`${k}`] = payload[`${k}`];
            }
        }
    }
}