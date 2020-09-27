const fs = require("fs")

let consola = new Map();

fs.readdirSync("./console/").filter(c => c.endsWith(".js")).map(file => {
    const archivo = require(`./console/${file}`);
    if(!archivo.name || !typeof (archivo.name) == String) return console.warn(`${file} el nombre debe ser un string o no tiene name`)
    if(!archivo.run || !typeof (archivo.run) == Function) return console.warn(`${file} las acciones cuando se ejecutan debe ser una funcion o no tiene`)
    consola.set(archivo.name, archivo);
})


write()
const listen = process.openStdin();
listen.on("data", async d => {
    let data = d.toString().trim();
    if (!data) return write()
    let args = data.split(" ").slice(1);
    let comando = consola.get(data.split(" ")[0]);
    if (!comando) return console.log("Ese comando no existe"), write();
    try {
        process.stdin.pause()
        await comando.run(args, consola);
        process.stdin.resume()
    } catch (err) {
        console.error(err);
        process.stdin.isPaused() ? process.stdin.resume() : null;
    }
    write()
})


function write() {
    process.stdout.write("->")
}