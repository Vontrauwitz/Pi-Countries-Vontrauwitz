/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, getActivity, filterCountryByActivity, orderByName, orderByPop, orderContinents } from '../../actions/index.js';  //? me importo las ACTIONS
import { Link } from 'react-router-dom';
import Card from './../Card/Card';
import styles from './Home.module.css'
import Paginated from '../Paginated/Paginated.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';



export default function Home() {

  const dispatch = useDispatch() //para hooks es para utilizar la contatnte y despachar mis acciones.


  const allCountries = useSelector((state) => state.countries)
  console.log("aqui");
  console.log(allCountries);
  console.log("final");
  const activitiesSelector = useSelector((state) => state.activities)
  console.log(activitiesSelector);


  //!=============================================================================
  //? all countries * 1 * me traigo los paises con el useEffect

  useEffect(() => {
    dispatch(getCountries()) //ojo es autoinvocado, esto es lo mismo que el mapDispatchToProps 
    dispatch(getActivity())
  }, [dispatch]) // lo que se incluye en el arrecglo [] es de lo que depende este componente didMount, yo dependo del dispatch en este caso. ej: necesito usar un useEffect de los getCountries siempre y cuando tenga otro estado con otras cosas antes, mientras este el estado de [activity] hacerme un useEffect y montarme todo esto, si no esta, no lo hagas. y si va vacio, no depende de nada y se monta solo. En este caso depende del DISPATCH.
  //!=============================================================================
  //? boton recarga de paises   * 1.1 *
  function handleClick(n) {

    dispatch(getCountries())// autoinvocado para que se ejecute
    setCurrentPage(1)
  }

  //!=============================================================================
  //!paginado
  // nos definimos varios estados locales
  let numerito = 10
  let [currentPage, setCurrentPage] = useState(1)
  let [countriesPerPage, setCountriesPerPage] = useState(numerito)
  let indexOfLastCountries = (currentPage * countriesPerPage) - 1  //0 * 9 = 9  || 2 * 10= 20  
  let indexOfFirstCountries = indexOfLastCountries - countriesPerPage

  //9 -9 = 0 || 20 - 10 =10 slices para sacarlo

  let allNow;
  if (currentPage === 1) {
    allNow = allCountries.slice(0, 9)
  } else {
    allNow = allCountries.slice(indexOfFirstCountries, indexOfLastCountries)
  }

  //1     1-10 -1 = 9 
  //2     10-20  = 10


  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  //!=============================================================================

  // eslint-disable-next-line no-unused-vars
  const [orden, setOrden] = useState('')

  // eslint-disable-next-line no-unused-vars
  const [ordenPop, setOrdenPop] = useState('')

  //!=============================================================================

  function handleActivity(n) {
    dispatch(filterCountryByActivity(n.target.value));
  }

  //!=============================================================================
  function handleSort(n) {
    n.preventDefault();
    dispatch(orderByName(n.target.value))
    setCurrentPage(1);
    setOrden(`Ordered ${n.target.value}`)
  };
  //*=============================================================================
  function handleSortPop(e) {
    e.preventDefault();
    dispatch(orderByPop(e.target.value))
    setCurrentPage(1);
    setOrdenPop(`Ordered ${e.target.value}`)
  };
  //!============================================================================
  function handleFilter(n) {
    n.preventDefault();
    dispatch(orderContinents(n.target.value))
    setCurrentPage(1)
  }

  //!============================================================================




  return (

    <div className={styles.divPrincipal} >

      <div className={styles.divTitulo}>
        <SearchBar />
        <button className={styles.buttonTitulo}>
          <Link to='/Activity'>Create recreational activities</Link>
        </button>
        <button className={styles.buttonTitulo}>
          <Link to='/CardActivityRender'> View recreational activities</Link>
        </button>
        <button onClick={handleClick} className={styles.buttonTitulo}>Reaload countries</button> {/* //?  * 1.1 *  */}

        {/* <button >{population}</button> */}
      </div>


      <div className={styles.box}>  {/* //?  div de filtros/ordenamiento*/}
        {

          <select onChange={n => handleFilter(n)}>
            <option selected="selected">Filter by Continent</option>
            <option value='All'>🗺️ All Continents</option>
            <option value='Africa'>🌍 Africa</option>
            <option value='Americas'>🌎 Americas</option>
            <option value='Antarctic'>🐧 Antarctic</option>
            <option value='Asia'>🌏 Asia</option>
            <option value='Europe'>🌍 Europe</option>
            <option value='Oceania'>🌏 Oceania</option>
          </select>
        }


        {
          activitiesSelector.length > 0 ?
            <select className={styles.bar} onChange={(e) => handleActivity(e)}>
              <option value="DEFAULT" >Filter by Activities</option>
              <option value='All'>All</option>
              {activitiesSelector.map((el) =>
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              )}
            </select>
            :
            <select defaultValue={'DEFAULT'} className={styles.bar}><option value="DEFAULT" disabled>No activities found</option></select>
        }
        {/* {
          activitiesSelector.length > 0 ?
            <select defaultValue={'DEFAULT'} className={styles.bar} onChange={(e) => handleActivity(e)}>
              <option value="DEFAULT" disabled>Filter by Activities</option>
              <option value='All'>All</option>
              {activitiesSelector.map((el) =>
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              )}
            </select>
            :
            <select defaultValue={'DEFAULT'} className={styles.bar}><option value="DEFAULT" disabled>No activities found</option></select>
        } */}



        <select onChange={n => handleSort(n)}>
          <option>Order by Name</option>
          <option value='asc'>A ▶️ Z</option>
          <option value='desc'>Z ▶️ A </option>
        </select>
        <select onChange={e => handleSortPop(e)}>
          <option>Order by Population</option>
          <option value='ascP'>🧍‍♂️- 👨🏽‍👩🏽‍👧🏽‍👦🏽</option>
          <option value='descP'> 👨🏽‍👩🏽‍👧🏽‍👦🏽 - 🧍‍♂️</option>
        </select>
      </div>


      <div className={styles.cardContainer}>
        {
          allNow?.map((n) => (
            <Link to={`/home/${n.id}`}>
              <Card
                name={n.name}
                image={n.image}
                continent={n.continent}
              />
            </Link>
          )
          )
        }


      </div>

      <div className={styles.paginated} >
        <Paginated
          currentPage={currentPage}
          countriesPerPage={numerito}
          allCountries={allCountries.length}
          paginated={paginated}
        />
      </div>


    </div>
  )
}


