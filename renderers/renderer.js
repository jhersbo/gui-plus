(function(){
    const elements = {
        information: document.getElementById("version-info"),
        submitBtn: document.getElementById("submit-btn")
    }
    
    elements.information.innerText = `Chromium v${versions.chrome()}, Node.js v${versions.node()}, Electron v${versions.electron()}`;

    elements.submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        appActions.routerUpdate("/files");
    })

})();