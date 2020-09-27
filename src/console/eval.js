module.exports = {
    name: "eval",
    run: async (args, consola) => {
        try {
            let evaluado = eval(args.join(" "))
            console.log(evaluado)
        } catch (err) {
            console.log(err)
        }
    }
}