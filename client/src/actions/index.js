import axios from "axios";
//ojo el redux-tunk sirve apra trabajar con las acciones asincronas de actions

//!=====================================================================
//? all countries  * 1 *
//Aca sucede toda la conexión con el back.
export function getCountries() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/countries");

      return dispatch({
        type: "GET_COUNTRIES",
        payload: json.data        //archcivos de constantes investigar?
      });
    } catch (error) {
      console.log(error);
    }
  };
}
//? Aqui tengo la logica de traerdel back los counries,ahora vamos a REDUCER.
//!=====================================================================
//? all Activities  * 2 *
export function getActivity(payload) {
  return async function (dispatch) {
    try {
      var info = await axios.get("http://localhost:3001/activities")
      console.log(info);
      return dispatch({
        type: "GET_ACTIVITY",
        payload: info.data,
      })
    } catch (error) {
      console.log(error);

    }
  }
}

//!=====================================================================
//? countries by NAME *  *

export function getCountriesName(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`http://localhost:3001/countries?name=${name}`);
      console.log(json.data);
      return dispatch({
        type: "GET_COUNTRIES_NAME",
        payload: json.data
      });
    } catch (error) {
      alert("No countries found");
    }
  };
}

//!=====================================================================
export function postActivity(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/activities", payload
      );
      return dispatch({
        type: "POST_ACTIVITY",
        payload: response.data,
      })

    } catch (error) {
      console.log(error);
      alert(error)
    }
  };
}
//!=====================================================================
//? filter Activities  * 2? *
export function filterCountryByActivity(value) {
  return {
    type: "FILTER_COUNTRY_BY_ACTIVITY",
    payload: value,
  }
}
//!=====================================================================

export function orderBy(payload) {
  console.log(payload);
  return {
    type: 'ORDER_BY',
    payload
  }
}

//!=====================================================================

export function filterCountryByContinents(payload) {

  return {
    type: 'FILTER_COUNTRY_BY_CONTINENTS',
    payload
  }
}

//!=====================================================================


export function orderContinents(payload) {
  return {
    type: 'ORDER_CONTINENTS',
    payload
  }
}

//!=====================================================================

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/countries/${id}`)
      return dispatch({
        type: 'GET_DETAIL',
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

//!=====================================================================

export function clean() {
  return {
    type: 'CLEAN'

  }
}

//!=====================================================================

export function deleteActivityName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.delete(`http://localhost:3001/countries?name=${name}`);

      return dispatch({
        type: "DELETE_ACTIVITY_NAME",
        payload: json.data
      });
    } catch (error) {
      console.log(error);
    }
  };
}


//!=====================================================================

export function orderByNumbers(payload) {
  return {
    type: 'ORDER_BY_NUMBERS',
    payload
  }
}