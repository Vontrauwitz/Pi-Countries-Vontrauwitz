import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, clean } from '../../actions';
import { useEffect } from 'react';
import styles from './Detail.module.css'
import logo1 from '../../assets/img/icons8-dirección-32.png'
import logo2 from '../../assets/img/icons8-país-32.png'
import helloWorld from '../../assets/img/helloworld.gif'

export default function Detail(props) {
  console.log(props);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    return () => dispatch(clean())
  }, [dispatch, props.match.params.id])

  const myActivity = useSelector((state) => state.detail)



  // < div className = { styles.activities } >
  //   <div className={styles.cartas}>
  //     {myActivity.activities.map(n =>
  //       <div className={styles.carta}>
  //         <br />
  //         <h2 >{n.name}</h2>
  //         <br />
  //         <p>Dificulty: {n.difficulty}</p>
  //         <br />
  //         <p>Duration: {n.duration}</p>
  //         <br />
  //         <p>Season: {n.season}</p>
  //         <br />

  //       </div>
  //     )}
  //   </div>
  //         </ >










  return (

    <div className={styles.container}>    {/* //! */}

      <div className={styles.navBar}>
        <img className={styles.logo} src={helloWorld} alt='holaMundo' />

        <Link to='/home'>
          <button className={styles.buttonBack}>Go Back</button>
        </Link>

      </div>

      <div className={styles.image}>
        <img className={styles.image} src={myActivity.images} alt='countries' /> {/* //? cambio a imagen secundaria, revisar */}
        <br />
      </div>



      {
        myActivity.length !== 0 ?
          <div >
            <div className={styles.details}>
              <h1>{myActivity.name}</h1>
              <br />
              <br />
              <p>CCA3 Code: {myActivity.id}</p>
              <br />
              <p>Capital: {myActivity.capital}</p>
              <br />
              <p>Sub-Region: {myActivity.subregion}</p>
              <br />
              <p>km2: {myActivity.area.toLocaleString('en-US')} </p>
              <br />
              <p> Population: {myActivity.population.toLocaleString('en-US')} </p>
              <br />
              <p>
                <img src={logo1} alt='icon1' />
                <a href={'' + myActivity.maps} target="_blank" rel='noreferrer'>GoogleMaps </a>
              </p>
              <br />
              <p>
                <img src={logo2} alt='icon2' />
                <a href={'' + myActivity.map} target="_blank" rel='noreferrer'> OpenStreetMaps</a>
              </p>
              <br />
            </div>
            {/* //!===================================================== */}
            {/* //? ACTIVITY */}
            <div className={styles.activities}>
              <div className={styles.cartas}>
                {myActivity.activities.map(n =>
                  <div className={styles.carta}>
                    <br />
                    <h2 >{n.name}</h2>
                    <br />
                    <p>Dificulty: {n.difficulty}</p>
                    <br />
                    <p>Duration: {n.duration}</p>
                    <br />
                    <p>Season: {n.season}</p>
                    <br />

                  </div>
                )}
              </div>
            </div>

            {/* //!================================================== */}

          </div> : <p>Loading......</p>
      }
      <div className={styles.footer}>Aqui va un footer!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>


    </div>

  )


}