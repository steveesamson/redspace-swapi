const express = require("express");
const router = express.Router();
const db = require("../db");
const { logAndReturn, getIdFromParams, getIdFromQuery } = require("../utils");
const { fetch, fetchBatch } = require("../api");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  //db key
  const dbKey = `${id}`;

  // check if we have it
  const hit = db.get(dbKey);
  if (hit) {
    // we have it, send response with it.
    return res.status(200).json({ data: hit });
  }
  // We don't have it, get it
  const { error: personError, data: personData } = await fetch(`/people/${id}`);
  if (personError) {
    return logAndReturn(personError, res);
  }
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    birth_year,
    gender,
    homeworld,
    species: _species,
    films: _films,
  } = personData;

  // get homeworld data
  const { error: homeError, data: homeData } = await fetch(homeworld);
  if (homeError) {
    return logAndReturn(homeError, res);
  }

  const { name: title, terrain, population } = homeData;
  //get species data
  const { error: speciesError, data: speciesData } = await fetchBatch(_species);

  const species = speciesData.map(
    ({ name, average_lifespan, classification, language }) => ({
      name,
      average_lifespan,
      classification,
      language,
    })
  );

  // get films data
  const { error: filmsError, data: filmsData } = await fetchBatch(_films);

  const films = filmsData.map(
    ({ title, director, producer, release_date }) => ({
      title,
      director,
      producer,
      release_date,
    })
  );

  // populate
  const data = {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    birth_year,
    gender,
    home_planet: {
      name: title,
      terrain,
      population,
    },
    species,
    films,
  };

  // save auto save is enabled
  db.set(dbKey, data);

  // send response
  res.status(200).json({ data });
});
router.get("/next/:id", async (req, res) => {
  const { id } = req.params;
  const { error, data: list } = await fetch(`/people/?page=${id}`);
  if (list) {
    const { next, previous, count, results } = list;
    const data = results.map(({ name, url }) => ({
      name,
      id: getIdFromParams(url),
    }));
    res.status(200).json({
      count,
      next: next && getIdFromQuery(next),
      previous: previous && getIdFromQuery(previous),
      data,
    });
  }
  // send response
  res.status(200).end();
});

module.exports = router;
