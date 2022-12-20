const express = require("express");
const conectarDB = require("./config/db");
const usuarioRouters = require("./routers/usuarioRouters");
const authRouters = require("./routers/authRouter");
const categoriaRouters = require("./routers/categoriaRouters");
const productoRouters = require("./routers/productoRouters");
const cors = require("cors");

//Conectar a la base de datos
conectarDB();

const app = express();

//Habilitar los cors
app.use(cors());

//Habilitar express.json
app.use(express.json({extended: true}));

app.use("/api/usuarios",usuarioRouters);
app.use("/api/auth",authRouters);
app.use("/api/categoria",categoriaRouters);
app.use("/api/producto", productoRouters );


app.listen(4000, () =>{
    console.log("Servidor corriendo en el puerto 4000");
});






// Sirve para hacer los verbos del CRUD en el puerto correspondiente
//RUTAS O ROUTES
/*app.use("/", ( req, res ) =>{
    res.json({msg:"Hola Mundo"});
});*/ 