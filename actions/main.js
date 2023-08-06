(function(){
    module.exports = {
        getConfigFile: getConfigFile,
        updateConfigFile: updateConfigFile,
        router: {
            update: update,
            back: back,
            forward: forward
        }
    }

    initializeCache();

    function initializeCache(){
        this.cache = {
            location: {
                previous: "",
                current: "index.html"
            }
        }
    }
    
    /**
     * 
     * @param {string} pathString 
     * @returns {any | null}
     * 
     * Retrieves requested file
     */
    function getConfigFile(pathString){
        const data = require(pathString);
        return data;
    }
    

    /**
     * 
     * @param {string} pathString
     * @param {JSON} payload 
     * 
     * Updates config file
     */
    function updateConfigFile(pathString, payload){
        const fs = require('fs');
        const path = require('path');
        const existingConfig = getConfigFile(pathString);
    
        fs.writeFileSync(
            path.join(__dirname, pathString), 
            JSON.stringify(Object.entries(payload).length != 0 ? payload : existingConfig)
        );
    }
    
    function update(path){
        let _this = this,
            locCache = this.cache.location;
        let prevLoc = locCache.current;

        locCache.current = path;
        locCache.previous = prevLoc;

        const pathMod = require("path");

        buildWindow().loadFile(pathMod.join(__dirname, path));
    }
    
    function back(){}
    function forward(){}

    //** HELPERS **//

    function buildWindow(){
        const { BrowserWindow } = require("electron");
        const config = require("../config/main.json");
        const pathMod = require("path");

        return new BrowserWindow({
            width: config.appConfig.width,
            height: config.appConfig.height,
            webPreferences:{
                preload: pathMod.join(__dirname, config.appConfig.preloadScripts)
            }
        })
    }

})();