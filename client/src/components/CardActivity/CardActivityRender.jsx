import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getActivity, } from '../../actions/index.js'; //? me importo las ACTIONS
import { CardActivity } from './CardActivity.jsx';
import { Link } from 'react-router-dom';
import styles from './CardActivityRender.module.css'

export default function CardActivityRender() {

  const dispatch = useDispatch()

  const activityState = useSelector((state) => state.activities)
  useEffect(() => {
    dispatch(getActivity())
  }, [dispatch]);
  console.log(activityState);

  return (
    <div className={styles.fondo}>
      <div>
        <Link to='/home'>
          <button>Go Back</button>
        </Link>
        <h1>Your Activities</h1>
      </div>
      <div className={styles.cardContainer}>
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
    </div>
  )
} 