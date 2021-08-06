const con = require("../database/connection/connection");

module.exports = {

    index(req , res){
        con.query("SELECT * FROM noticias", async (err, result)=>{
            res.render("noticias/noticias",{noticias: await result.rows});
        });
    },

    create(req, res){
        
        const {titulo, noticia} = req.body;
        let queryText ="INSERT INTO noticias (titulo, noticia) VALUES($1, $2)";
        
        con.query(queryText, [titulo, noticia], async (err, result)=>{
            res.render("admin/form_add_noticia", {message:"Noticia Adicionada!"});
        })
    }
}