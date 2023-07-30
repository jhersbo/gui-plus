(function(){
    const elements = {
        information: document.getElementById("version-info")
    }

    elements.information.innerText = `Chromium v${versions.chrome()}, Node.js v${versions.node()}, Electron v${versions.electron()}`;
})();

// const information = document.getElementById('info')
// information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

// function testTalk(){
//     window.bridges.talk().then((val) => {
//         console.log(val);
//         let p = document.createElement("p");
//         let app = document.getElementsByClassName("app");
//         if(app.length == 1) {
//             app = app[0]
//         }
//         app.appendChild(p);
//         p.innerText = val;
//     });
// }

// testTalk();