/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, getActivity, filterCountryByActivity, orderBy, orderContinents, orderByNumbers, handleBillion } from '../../actions/index.js';  //? me importo las ACTIONS
import { Link } from 'react-router-dom';
import Card from './../Card/Card';
import styles from './Home.module.css'
import Paginated from '../Paginated/Paginated.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import helloWorld from '../../assets/img/helloworld.gif'




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
  function handleClick() {
    window.location.reload()
    dispatch(getCountries())// autoinvocado para que se ejecute

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

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumber, setMaxPageNumber] = useState(5)
  const [minPageNumerLimit, setMinPageNumerLimit] = useState(1)

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const beforePage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

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


  const [orden, setOrden] = useState('')
  const [filtros, setFiltros] = useState({});

  //!=============================================================================

  function handleActivity(n) {
    setFiltros({ ...filtros, activity: n.target.value }) //   {{}}
    //[activity: skii]
    n.target.value = 'default'
  }
  //!=============================================================================

  function handleFilter(e) {
    setFiltros({ ...filtros, continent: e.target.value })
    /*[activity: skii
       continment: america    
    ] */
    e.target.value = 'default'

  }

  //!===========================================================================
  async function handleFilters(e) {
    e.preventDefault()
    await dispatch(getCountries())


    dispatch(filterCountryByActivity(filtros.activity));

    dispatch(orderContinents(filtros.continent))
    setCurrentPage(1)
    e.target.value = 'default'





  }


  //!============================================================================
  function handleSort(n) {
    n.preventDefault();
    dispatch(orderBy(n.target.value))
    setCurrentPage(1);
    setOrden(`Ordered ${n.target.value}`)
    n.target.value = 'default'
  };
  //*=============================================================================


  // selected = "selected"

  return (

    <div className={styles.container} >

      <div className={styles.navBar}>
        <img className={styles.logo} src={helloWorld} alt='holaMundo' />

        <SearchBar setCurrentPage={setCurrentPage} />

        <button className={styles.buttonTitulo}>
          <Link to='/Activity'>Create activities</Link>
        </button>
        <button className={styles.buttonTitulo}>
          <Link to='/CardActivityRender'> View activities</Link>
        </button>
        <button onClick={handleClick} className={styles.buttonTitulo}>Reaload all</button> {/* //?  * 1.1 *  */}


      </div>

      {/* //?  div de filtros/ordenamiento*/}

      <div className={styles.filters}>
        {
          <form>
            <select onChange={n => handleFilter(n)}>
              <option value='default'>Filter by Continent</option>
              <option value='All'>??????? All Continents</option>
              <option value='Africa'>???? Africa</option>
              <option value='Americas'>???? Americas</option>
              <option value='Antarctic'>???? Antarctic</option>
              <option value='Asia'>???? Asia</option>
              <option value='Europe'>???? Europe</option>
              <option value='Oceania'>???? Oceania</option>

            </select>

          </form>
        }

        {
          activitiesSelector.length > 0 ?
            <select className={styles.bar} onChange={(e) => handleActivity(e)}>
              <option value="default">Filter by Activities</option>
              <option value='All'>All</option>
              {activitiesSelector.map((el) =>
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              )}
            </select>
            :
            <select defaultValue={'default'} className={styles.bar}><option value="default" disabled>No activities found</option></select>
        }

        <button className={styles.buttonTitulo} onClick={handleFilters}>send filters</button>





        <select className={styles.select} onChange={n => handleSort(n)}>

          <optgroup label='alphabetically'>
            <option value="default">Order by Name</option>
            <option value='asc'>A ?????? Z</option>
            <option value='desc'>Z ?????? A </option>
          </optgroup>
          <optgroup label='population'>
            <option>Order by Population</option>
            <option value='ascP'>?????????????- ?????????????????????????????????????????</option>
            <option value='descP'> ????????????????????????????????????????? - ?????????????</option>
          </optgroup>
        </select>



      </div>


      {/* //?  cards */}

      <div className={styles.main}>
        {allCountries[0] !== 'No countries found2' || !allCountries ?
          allNow?.map((n) => (
            <Link to={`/home/${n.id}`}>
              <Card
                name={n.name}
                image={n.image}
                continent={n.continent}
                capital={n.capital}
              />
            </Link>
          )
          ) : <p>{allCountries[0] ? allCountries[0] : <p>there are no countries </p>} </p>
        }
      </div>

      {/* //?  paginated */}


      <div className={styles.paginated} >

        <Paginated

          countriesPerPage={numerito}
          allCountries={allCountries.length}
          paginated={paginated}
          currentPage={currentPage}
          beforePage={beforePage}
          nextPage={nextPage}
        />
      </div>

      {/* //?  footer */}

      <div className={styles.footer}>PI-Countries SoyHenry Vontrauwitz 2022</div>

    </div>
  )
}


