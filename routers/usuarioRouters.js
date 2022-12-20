const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuariosController");


router.post( "/", usuarioController.crearUsuario);

module.exports = router;









/*router.get("/", (req, res) => {
    res.json({msg: "Desde router GET"})
})

router.post("/", (req, res) => {
    res.json({msg: "Desde router POST es crear"})
})

router.put("/", (req, res) => {
    res.json({msg: "Desde router PUT es actualizar"})
})

router.delete("/", (req, res) => {
    res.json({msg: "Desde router Delete es borrar"})
})*/
