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
        continent: country.region,
        capital: country.capital ? country.capital[0] : 'Unknow',
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      })
    });
    await createCountries(toSavedCountries);
    console.log('exito al llenar DB');
  } catch (error) {
    //console.log(error);
  }
}

async function createCountries(countries = []) {
  try {
    await Country.bulkCreate(countries)
  } catch (error) {
    //console.log(error);
  }
}


router.get('/countries', async (req, res) => {
  const name = req.query.name;

  try {
    if (name) {

      let countriesName = await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } }
      })
      console.log(countriesName);
      countriesName.length ? res.status(200).json(countriesName) : res.status(404).send('No countries found');
    } else {
      await findCountries();
      let countriesTotal = await Country.findAll({
        include: {
          model: Activity,
          attributes: ["name"],
          through: { attributes: [] }
        }
      })
      res.status(200).json(countriesTotal);
    }
  } catch (error) {
    console.log(error, "error") //TODO
  }
});




//!=====================================================================
router.get('/countries/:id', async (req, res) => {
  const { id } = req.params
  try {
    if (id) {
      let countryId = await Country.findByPk(id, {
        include: {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
          through: { attributes: [] }
        }
      })
      console.log(countryId)
      res.status(200).json(countryId)
    } else {
      res.status(404).send('There are no countries with that id');
    }
  } catch (error) {
    console.log(error);
  }

})
// countryId.length ?
//   res.status(200).json(countryId) :
//   res.status(404).send('There are no countries with that id');

//!=======================================================

router.get('/activity', async (req, res) => {

  try {
    const data = await Activity.findAll({
      include: {
        model: Country,
      }
    })
    // if (data.length < 1) throw new Error("No activities registered");
    // else return 

    res.status(200).json(data)
  } catch (error) {
    console.log(error)  //TODO
  }
})

//!=======================================================

router.post('/activity', async (req, res) => {
  const { name, difficulty, duration, season, country, image } = req.body;
  let nameCheck = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  console.log(nameCheck)
  try {
    if (name && difficulty && duration && country) {
      const [activity, created] = await Activity.findOrCreate({
        where: {
          name: nameCheck,
        },
        defaults: {
          image,
          difficulty,
          duration,
          season,
        },
      });

      country.forEach(async (el) => {
        const country = await Country.findOne({
          where: {
            name: el,
          },
        });

        await country?.addActivity(activity);
      });

      return res.status(200).send(activity);
    } else {
      res.status(400).send("You must complete all fields");
    }
  } catch (error) {
    res.status(404).send("Created")
  }

});




router.delete('/activity', async (req, res) => {

  let { name } = req.query
  try {
    await Activity.destroy({
      where: {
        name: name,
      }
    })
    res.status(200).json('Activity deleted');
  } catch (error) {
    console.log(error)
  }
})


// router.delete('/activity', async (req, res) => {
//   let { name } = req.query

//   try {
//     await Activity.destroy({
//       where: {
//         name: name,
//       }
//     })
//     res.status(200).json("Delete Activity")
//   } catch (error) {
//     console.log(error);
//   }
// })

router.delete('/activity', async (req, res) => {

  try {
    const { id } = req.params
    await Activity.destroy({
      where: {
        id: id,
      }
    })
    res.status(200).json("Delete Activity")
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message })
  }
})



module.exports = router;