const fetch = require("node-fetch")
module.exports = {
    name: "fetch",
    run: async (args) => {
        let res = await fetch(args.slice(0,1).join(""))
        console.log(res)
        switch (args[1]) {
            case "-t":
                console.log(await res.text())
                
                break;
            case "-j":
                console.log(await res.json())
                
                break;
            default:
                console.log("no hay opcion seleccionada")
                break;
        }
    }
}