const { body } = require("express-validator");

const noticiaValidation =  [
    body("titulo", "Preencha o campo titulo!").notEmpty(),
    body("resumo", "O resumo deve conter está vazio").notEmpty(),
    body("resumo", "O resumo deve conter no mínimo 30 carcteres!").isLength({min:30}),
    body("resumo", "O resumo deve conter no máximo 240 carcteres!").isLength({max:240}),
    body("dataNoticia", "Data não deve estar vazia").notEmpty(),
    body("dataNoticia", "Data com formato incorreto!").isDate({format:"YYYY-MM-DD"}),
    body("dataNoticia", "A data está não está no formato ISO").isISO8601(),
    body("noticia", "A notícia não deve estar vazia!").notEmpty(),
    body("noticia", " A notícia deve conter no mínimo 100 carcteres!").isLength({min:100}),

];
module.exports = { noticiaValidation };

