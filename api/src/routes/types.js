const { Router } = require("express");
const express = require("express");
const router = Router();
router.use(express.json());
const axios = require("axios");
const { Type } = require("../db");

router.get(`/types`, async (req, res) => {
  try {
    const response = await axios.get(` https://pokeapi.co/api/v2/type`);
    const types = response.data.results;
    types.forEach(async (g) => {
      await Type.findOrCreate({
        where: {
          name: g.name,
        },
      });
    });
    const alltypes = types.map((game) => {
      return {
        id: game.id,
        name: game.name,
      };
    });
    return res.status(202).send(alltypes);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
});
module.exports = router;
