(function(){

    buildApp();

    function buildApp(){
        const app = {
            page: {
                define: define
            }
        };

        Promise.all([
            loadConfig
        ])
        .finally(() => {
            this.app = app;
        })

        //load config
        loadConfig();

        function loadConfig(){
            bridges.fetchConfig("../config/main.json")
            .then((data) => {
                app.config = data;
            })
            .catch((error) => {
                console.error(error);
                app.config = new Object();
            })
        }

        function define(definition, name){
            //fn to invoke page build
        }
    }
})();