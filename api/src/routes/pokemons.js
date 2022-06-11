const { Router } = require("express");
const express = require("express");
const router = Router();
router.use(express.json());
const axios = require("axios");
const { Pokemon, Type } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemon", async (req, res) => {
  const { name } = req.query;
  //  console.log(name, "este es el name");
  try {
    if (!name) {
      let infoApi = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=10`
      );
      let data = infoApi.data.results;
      const totalUrls = data.map((obj) => axios.get(obj.url));
      const promiseUrl = await axios.all(totalUrls);
      let detailsData = promiseUrl.map((p) => {
        return {
          id: p.data.id,
          name: p.data.name,
          type: p.data.types.map((t) => t.type.name),
          hp: p.data.stats[0].base_stat,
          attack: p.data.stats[1].base_stat,
          defense: p.data.stats[2].base_stat,
          speed: p.data.stats[5].base_stat,
          height: p.data.height,
          weight: p.data.weight,
          sprite: p.data.sprites.other.dream_world.front_default,
        };
      });
      let infoDb = await Pokemon.findAll({
        include: {
          model: Type,
          attributes: ["name"],
        },
      });
      let allPokemons = detailsData.concat(infoDb);
      res.status(202).send(allPokemons);
    }

    if (name) {
      const infoDb = await Pokemon.findOne({
        where: { name },
        include: Type,
      });

      if (infoDb) {
        let infoPokemonDb = {
          id: infoDb.id,
          name: infoDb.name,
          hp: infoDb.hp,
          attack: infoDb.attack,
          defense: infoDb.defense,
          speed: infoDb.speed,
          height: infoDb.height,
          weight: infoDb.weight,
          sprite: infoDb.sprite,
          // types:
          //   infoDb.types.length < 2
          //     ? [infoDb.types[0]]
          //     : [infoDb.types[0], infoDb.types[1]],
        };
        return res.status(202).send(infoPokemonDb);
      } else {
        const api = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const infoPokemon = {
          id: api.data.id,
          name: api.data.name,
          hp: api.data.stats[0].base_stat,
          attack: api.data.stats[1].base_stat,
          defense: api.data.stats[2].base_stat,
          speed: api.data.stats[5].base_stat,
          height: api.data.height,
          weight: api.data.weight,
          type: api.data.types.map((t) => t.type.name),
        };
        //   console.log(infoPokemon);
        return res.status(202).send(infoPokemon);
      }
    }
  } catch (error) {
    res.send("NO HAY POKEMON");
    console.log(error);
  }
});

router.get("/pokemon/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (id.includes("-")) {
      const infoDb = await Pokemon.findOne({ where: { id }, include: Type });
      //console.log(infoDb);
      let detalisDb = {
        id: infoDb.id,
        name: infoDb.name,
        hp: infoDb.life,
        attack: infoDb.attack,
        defense: infoDb.defense,
        speed: infoDb.speed,
        height: infoDb.height,
        weight: infoDb.weight,
        //   type: infoDb.data.types.map((t) => t.type.name),
      };
      // console.log(detalisDb);
      return res.status(202).send(detalisDb);
    } else if (id) {
      const infoApi = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      //  console.log(infoApi.data);
      let detailsApi = {
        id: infoApi.data.id,
        name: infoApi.data.name,
        type: infoApi.data.types.map((t) => t.type.name),
        hp: infoApi.data.stats[0].base_stat,
        attack: infoApi.data.stats[1].base_stat,
        defense: infoApi.data.stats[2].base_stat,
        speed: infoApi.data.stats[5].base_stat,
        height: infoApi.data.height,
        weight: infoApi.data.weight,
        sprite: infoApi.data.sprites.other.dream_world.front_default,
      };

      //  console.log(detailsApi);
      return res.status(202).send(detailsApi);
    }
  } catch (error) {
    console.log(error);
    return res.status(404).send("NO EXISTE POKEMON");
  }
});

router.post("/pokemons", async (req, res) => {
  try {
    const { name, hp, attack, defense, speed, height, weight, types } =
      req.body;
    const myPoke = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      types,
    });
    //const pokeTypedb = await Type.findAll();
    //let createdMyPoke = await myPoke.addType(pokeTypedb);

    console.log(myPoke);
    return res.send(myPoke);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
