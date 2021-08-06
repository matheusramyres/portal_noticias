const express = require("express");
const expressValidator = require("express-validator");
const routes = require("./src/routes/routes");
const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(express.urlencoded({extended:true}));
app.use(expressValidator());
app.use(routes);

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
});