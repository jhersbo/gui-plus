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
    const defaultProps = {
        appConfig: {
            width: 800,
            height: 600
        },
        userConfig: {
            profile: "default",
            user: "default"
        },
        cosmeticConfig: {
            colors: {
                app: "#6ea0f0"
            }
        }
    }

    let newJSON = new Object();

    if(Object.entries(payload) == 0){
        newJSON = defaultProps;
    } else {
        //create new config object
        newJSON = recParseObject();

    }

    fs.writeFileSync(path.join(__dirname, pathString), JSON.stringify(newJSON));
}

//HELPERS
function recParseObject(){

}