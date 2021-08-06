const express = require("express");
const noticiaController = require("../controllers/noticias");

const route = express.Router();


route.get("/", (req, res)=>{
    res.render("home/index");

 });

route.get("/noticias", noticiaController.index);

route.get("/formulario_inclusao_noticia", (req, res)=>{
    res.render("admin/form_add_noticia");
});

route.post("/noticia/create", noticiaController.create);

route.get("/noticia", (req, res)=>{

    // con.query("SELECT * FROM noticias", async (err, result)=>{
    //     res.render("noticias/noticia",{noticia: await result.rows});
    // });
});


module.exports = route;