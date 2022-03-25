//imports
var express = require("express");
var app = express();
var Usuario = require("./model/Usuario");
var path = require("path");
//imports

//configs
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
//configs

//rota para listar dados
app.get("/", function (req, res) {
  Usuario.find({}).then(function (docs) {
    res.render("list.ejs", { Usuarios: docs });
  });
});

app.post("/", function (req, res) {
  if (req.body.tipo == "nome") {
    Usuario.find({ Terror: new RegExp(req.body.pesquisa, "i") }).then(function (
      docs
    ) {
      res.render("list.ejs", { Usuarios: docs });
    });
  } else {
    Usuario.find({ email: new RegExp(req.body.pesquisa, "i") }).then(function (
      docs
    ) {
      res.render("list.ejs", { Usuarios: docs });
    });
  }
});

//rota de abrir tela do add
app.get("/add", function (req, res) {
  res.render("index.ejs", {});
});
//fim abrir tela de add

//adicionar dados no banco
app.post("/add", function (req, res) {
  var usuario = new Usuario({
    nome: req.body.nome,
    ano: req.body.ano,
    diretor: req.body.diretor,
    sinopse: req.body.sinopse,
    foto: req.body.foto,
  });

  usuario.save(function (err, docs) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      res.redirect("/");
    }
  });
});
//fim adicionar dados no banco

app.get("/edt/:id", function (req, res) {
  Usuario.findById(req.params.id).then(function (docs) {
    console.log(docs);
    res.render("edit.ejs", { Usuario: docs });
  });
});

app.post("/edt/:id", function (req, res) {
  Usuario.findByIdAndUpdate(
    req.params.id,
    {
      nome: req.body.nome,
      ano: req.body.ano,
      diretor: req.body.diretor,
      sinopse: req.body.sinopse,
      foto: req.body.foto,
    },
    function (err, docs) {
      if (err) {
        res.send("Aconteceu um erro:" + err);
      } else {
        res.redirect("/");
      }
    }
  );
});

app.get("/del/:id", function (req, res) {
  Usuario.findByIdAndDelete(req.params.id, function (err, doc) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      res.redirect("/");
    }
  });
});

app.listen("3000", function () {
  console.log("O servidor foi iniciado na porta 3000");
});
