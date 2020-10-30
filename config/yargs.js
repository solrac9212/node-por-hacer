const descripcion = {
    demand: true,
    alias: "d"
};

const completado = {
    default: true,
    alias: "c",
    desc: 'Marco como completado o pendiente la tarea'

};
const argv = require('yargs')
    .command('crear', "crea una tarea", {
        descripcion
    })
    .command("actualizar", "actualiza el estado de una tarea", {
        descripcion,
        completado
    })
    .command('borrar', "borrar una tarea", {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}