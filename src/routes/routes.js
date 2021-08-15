const express = require("express");
const { noticiaValidation } = require("../schemas/validation");
const noticiaController = require("../controllers/noticiasController");

const route = express.Router();

route.get("/", noticiaController.noticiasHome);

route.get("/formulario_inclusao_noticia", noticiaController.formNoticia);

route.get("/noticias", noticiaController.indexNoticias);

route.post("/noticia/create", noticiaValidation, noticiaController.create);

route.get("/noticia/:id", noticiaController.noticia);


module.exports = route;