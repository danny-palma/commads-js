const fs = require("fs")
module.exports = {
    name: "reload",
    run: (args, consola) => {
        if(!args.length) return console.log("Debes poner el comando a recargar")
        args.map(comando => {
            if (!consola.has(comando)) return console.log(`el comando ${comando} no existe`);
            fs.readdirSync("./console").filter(c => c.endsWith(".js")).map(file => {
                delete require.cache[require.resolve(`./${file}`)]
                const comandoFile = require(`./${file}`);
                if(comandoFile.name != comando) return;
                consola.delete(comando);
                consola.set(comandoFile.name, comandoFile)
                console.log(`El comando ${comando} ha sido recargado correctamente`)
            })
        })
    }
}