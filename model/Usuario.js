const conexao = require('../config/database');
var {Schema, model} = require("mongoose")
var UsuarioSchema = conexao.Schema({
    nome: {type: 'string'},
    email: {type: 'string'},
    foto: {type: 'string'},
    senha: {type: 'string'}
});

module.exports = conexao.model("Usuario", UsuarioSchema)
