const initialState = {

  countries: [],
  allCountries: [],
  activities: [],
  detail: [],
  delete: "",

};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    //!===========================================================================
    //? all countries  * 1 *
    case 'GET_COUNTRIES':
      return {
        ...state,  // primero el estado
        countries: action.payload,//segundo el payload de actions, primero es un arreglo vacio y depsues mandame todo de actions
        allCountries: action.payload //estado secundario, misma info del primero
      };
    //? Aqui tengo la logica de traer los countries de ACTIONS al REDUCER, ahora vamos a HOME

    //!===========================================================================

    case 'GET_ACTIVITY':
      return {
        ...state,
        activities: action.payload
      };

    //!===========================================================================

    case 'FILTER_COUNTRY_BY_ACTIVITY':
      let filterAct;
      if (action.payload === "All") {
        filterAct = state.countries;
      } else {
        filterAct = state.countries.filter(e => e.activities.length && e.activities.map(c => c.name).includes(action.payload))
      }
      return {
        ...state,
        countries: filterAct
      }
    //!===========================================================================

    case 'ORDER_CONTINENTS':  //TODO
      const allContinents = state.countries
      const filterCon = action.payload === 'All'
        ? allContinents : allContinents.filter(el => el.continent === action.payload)
      return {
        ...state,
        countries: filterCon
      }

    //!===========================================================================

    //!===========================================================================
    //? ORDENAMIENTOS
    case "ORDER_BY_NAME":
      let sortedArr =
        action.payload === "asc"
          ? state.countries.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
              return -1;
            }
            return 0;
          })
          : state.countries.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
              return 1;
            }
            return 0;
          });
      return {
        ...state,
        countries: sortedArr,
      };

    //*===========================================================================

    case "ORDER_BY_POP": //TODO JUNTAR A HUEVO  A,B,C 10,20,5 ORDENAMIENTOS EXCLUYENTES
      let sortedArrPop =
        action.payload === "ascP"
          ? state.countries.sort(function (a, b) {
            if (a.population > b.population) {
              return 1;
            }
            if (b.population > a.population) {
              return -1;
            }
            return 0;
          })
          : state.countries.sort(function (a, b) {
            if (a.population > b.population) {
              return -1;
            }
            if (b.population > a.population) {
              return 1;
            }
            return 0;
          });
      return {
        ...state,
        countries: sortedArrPop,
      };
    //!===========================================================================
    case 'GET_COUNTRIES_NAME':
      return {
        ...state,
        countries: action.payload
      }
    //!===========================================================================
    case 'POST_ACTIVITY':
      return {
        ...state,
      }
    //!===========================================================================
    case 'GET_DETAIL':
      return {
        ...state,
        detail: action.payload
      }
    //!===========================================================================
    case 'CLEAN':
      return {
        ...state,
        detail: []
      }
    //!===========================================================================
    case "DELETE_ACTIVITY_NAME":
      return {
        ...state,
        activities: action.payload
      };


    case "ORDER_BY_NUMBERS":
      const filterBillion = (action.payload <= 1000000000)
      filterBillion.filter(el => el.population === action.payload)
      return {
        ...state,
        countries: filterBillion
      }


    //1,000,000,000  ++


    default:
      return state;
  };
};
export default rootReducer;