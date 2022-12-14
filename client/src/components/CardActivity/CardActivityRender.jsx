import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getActivity, } from '../../actions/index.js'; //? me importo las ACTIONS
import { CardActivity } from './CardActivity.jsx';
import { Link } from 'react-router-dom';
import styles from './CardActivityRender.module.css'
import helloWorld from '../../assets/img/helloworld.gif'

export default function CardActivityRender() {

  const dispatch = useDispatch()

  const activityState = useSelector((state) => state.activities)
  useEffect(() => {
    dispatch(getActivity())
  }, [dispatch]);
  console.log(activityState);

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <img className={styles.logo} src={helloWorld} alt='holaMundo' />
        <Link to='/home'>
          <button className={styles.buttonTitulo}>Home</button>
        </Link>
        <Link to='/Activity'>
          <button className={styles.buttonTitulo}>Create Activities</button>
        </Link>
        <h1>Your Activities</h1>
      </div>


      <div className={styles.main}>
        {activityState?.map(e => {
          return (
            <div >
              <CardActivity
                image={e.image}
                name={e.name}
                difficulty={e.difficulty}
                duration={e.duration}
                season={e.season}
                countries={e.countries.map((el) => (
                  <div>
                    <h3 key={el.id}>{el.name}</h3>
                  </div>
                )

                )}
              />
            </div>)
        })}
      </div>

      <div className={styles.footer}>PI-Countries SoyHenry Vontrauwitz 2022</div>

    </div>
  )
} 