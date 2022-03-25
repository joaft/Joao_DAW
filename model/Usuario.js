var conexao = require("../config/database");

var UsuarioSchema = conexao.Schema({
  nome: { type: "String" },
  ano: { type: "String" },
  diretor: { type: "String" },
  sinopse: { type: "String" },
});

module.exports = conexao.model("Usuario", UsuarioSchema);
