module.exports = {
    name: "help",
    run: (args, consola) => {
        let comandos = []
        consola.forEach((value, key, map)=>{
            comandos.push(key)
        })
        console.table(comandos)
    }
}