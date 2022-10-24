const { Router } = require('express');
const axios = require('axios')
const { Country, Activity } = require('../db')
const { Op } = require('sequelize')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

async function findCountries() {
  let newCountries;
  let toSavedCountries;
  try {
    await axios.get('https://restcountries.com/v3/all')
      .then(resp => newCountries = [...resp.data]);
    toSavedCountries = newCountries.map(country => {
      return ({
        id: country.cca3,
        name: country.name.common,
        image: country.flags[1],
        images: country.flags[0],
        continent: country.region,
        capital: country.capital ? country.capital[0] : 'Unknow',
        subregion: country.subregion ? country.subregion : 'Unknow',
        area: country.area,
        population: country.population,
        maps: country.maps.googleMaps, //TODO EL OTRO MAPA
        map: country.maps.openStreetMaps,
        timezones: country.timezones[0],
        languages: country.languages.map(el => el.country.languajes)
        //borders

      })
    });


    // let cositas = await mapearcosa(toSavedCountries)
    await createCountries(toSavedCountries);
    console.log('successfuly filling the DB');
  } catch (error) {
    console.log(error);
  }


  async function createCountries(countries = []) {
    try {
      await Country.bulkCreate(countries)
    } catch (error) {
      //console.log(error);
    }
  }

  const name = req.query.name;

  try {
    if (name) {

      let countriesName = await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } }
      })
      console.log(countriesName);
      countriesName.length ? res.status(200).send(countriesName) : res.status(400).json({ message: 'No country name was found' });
    } else {
      await findCountries();
      let countriesTotal = await Country.findAll({
        include: {
          model: Activity,
          attributes: ["name"],
          through: { attributes: [] }
        }
      })
      res.status(200).send(countriesTotal);
    }
  } catch (error) {
    console.log(error, "error") //TODO
  }
}

module.EXPORTS = {
  findCountries,
}