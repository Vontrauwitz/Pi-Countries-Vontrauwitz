const axios = require("axios");
const { Country } = require("../../db.js");

const countriesDbLoader = async () => {
  let resApi = await axios.get("https://restcountries.com/v3/all");
  const arrData = await resApi.data.map((el) => {
    return {
      id: el.cca3,
      name: el.name.common,

      image: el.flags[1],
      images: el.flags[0],
      continent: el.region,
      capital: el.capital ? el.capital[0] : 'Unknow',
      subregion: el.subregion ? el.subregion : 'Unknow',
      area: el.area,
      population: el.population,
      maps: el.maps.googleMaps,
      map: el.maps.openStreetMaps,
      timezones: el.timezones[0],
      languages: el.languajes

    };

  });

  const saver = () => {
    arrData.map((el) => {
      Country.findOrCreate({
        where: {
          name: el.name,
          id: el.id,
        },
        defaults: {
          image: el.image,
          images: el.images,
          continent: el.continent,
          capital: el.capital,
          subregion: el.subregion,
          area: el.area,
          population: el.population,
          maps: el.maps,
          map: el.map,
          timezones: el.timezones,
          languages: el.languages,

        },
      }).catch((err) => {
        console.log(err);
      });
    });
  };

  console.log("Db Created");
  return saver();
};

module.exports = {
  countriesDbLoader,
};
