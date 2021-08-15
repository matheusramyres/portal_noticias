const express = require("express");
const routes = require("./src/routes/routes");


const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.static('./src/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(routes);



app.listen(3000, ()=>{
    console.log("Servidor rodando no link: http://localhost:3000");
});