const { Router } = require("express");
const router = Router();
const routesPokemon = require("./pokemons");
const routeType = require("./types");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", routesPokemon);
router.use("/", routeType);
module.exports = router;
