const initialState = {

  countries: [],
  allCountries: [],
  filtered: [],
  activities: [],
  name: [],
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
        allCountries: action.payload, //estado secundario, misma info del primero
        filtered: action.payload,
      };
    //? Aqui tengo la logica de traer los countries de ACTIONS al REDUCER, ahora vamos a HOME

    //!===========================================================================

    case 'GET_ACTIVITY':
      return {
        ...state,
        activities: action.payload,

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


    case 'ORDER_CONTINENTS':
      const allContinents = state.countries
      const filterCon = action.payload === 'All'
        ? allContinents : allContinents.filter(el => el.continent === action.payload)
      return {
        ...state,
        countries: filterCon
      }
    //!===========================================================================
    //? ORDENAMIENTOS
    case "ORDER_BY":
      if (action.payload === "asc") {
        return {
          ...state,
          countries: [...state.countries].sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
            return 0
          })
        }
      }

      if (action.payload === "desc") {
        return {
          ...state,
          countries: [...state.countries].sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
            if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
            return 0
          })
        }
      }
      if (action.payload === "ascP") {
        return {
          ...state,
          countries: [...state.countries].sort(function (a, b) {
            if (a.population > b.population) return 1;
            if (b.population > a.population) return -1;
            return 0
          })
        }
      }

      if (action.payload === "descP") {
        return {
          ...state,
          countries: [...state.countries].sort(function (a, b) {
            if (a.population > b.population) return -1;
            if (b.population > a.population) return 1;
            return 0
          })
        }
      }
      else {
        return {
          ...state,
          countries: state.filtered,
        }
      };
    // A,B,C 10,20,5 ORDENAMIENTOS EXCLUYENTES

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





    default:
      return state;
  };
};
export default rootReducer;