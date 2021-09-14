const dotenv = require("dotenv").config();
const express = require("express");
const routes = require("./src/routes/routes");
const cors = require("cors");

const app = express();


app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.static('./src/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(routes);
app.use(cors());



app.listen(process.env.PORT || 3003, ()=>{
    console.log("Servidor rodando no link: http://localhost:3000");
});