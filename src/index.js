let inicio = Date.now()
const express = require("express"),
    app = express(),
    fs = require("fs");


fs.readdirSync("./routes").filter(c => c.endsWith(".js")).map(file => {
    const archivo = require(`./routes/${file}`)
    app.use(archivo)
})


app.listen(3000, () => {
    let fin = Date.now();
    console.log(`Servidor en el puerto 3000 \nCargado en: ${fin - inicio} ms`);
    require("./consola")
})
