const con = require("../database/connection/connection");
const {validationResult} = require("express-validator");

const principal = "index/index";

module.exports = {

    async noticiasHome(req, res) {
        await con.query("SELECT * FROM noticia LIMIT 6", (err, result) => {

            return res.render(principal, {
                page: "../home/home", 
                noticias: result.rows, 
                format:formatDate
            });
        });
    },

    async indexNoticias(req, res) {
        await con.query("SELECT * FROM noticia", (err, result) => {
            return res.render(principal, {
                page: "../noticias/noticias", 
                noticias: result.rows,
                format : formatDate
             });
        });
    },

    async create(req, res) {

        const erros = validationResult(req).array();
        const campos = req.body;

        if(erros.length > 0){

            return res.render(principal,{
                page:"../admin/form_add_noticia", 
                validacao:erros, 
                campos:campos});
        }

        const { 
            titulo, 
            noticia, 
            resumo, 
            autor, 
            dataNoticia 
        } = req.body;

        console.log("Agora vamos salvar os dados!");
        
        let queryText = "INSERT INTO noticia (titulo, noticia, resumo, autor,"+ 
            "data_noticia) VALUES($1, $2, $3, $4, $5)";

        await con.query(queryText, [titulo, noticia, resumo, autor, dataNoticia], (err, result) => {
            return res.redirect("/formulario_inclusao_noticia");
        })
    },

    async noticia(req, res) {
        const {id} = req.params;
        const query = "SELECT titulo, autor, data_noticia, noticia from noticia WHERE id = $1";
        
        await con.query(query, [id], (err, result) => {
              return res.render(principal, {
                  page:"../noticias/noticia", 
                  noticia : result.rows,
                  format: formatDate
                })
        });
    },

    formNoticia(req, res) {
        res.render(principal ,{
            page:"../admin/form_add_noticia", 
            validacao : {}, 
            campos:{},
        });
    }


}

//Formatar data
const formatDate = data=>{
    ndata = new Date(data),
        dia  = ndata.getDate().toString().padStart(2, '0'),
        mes  = (ndata.getMonth()+1).toString().padStart(2, '0'),
        ano  = ndata.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

    