import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, clean } from '../../actions';
import { useEffect } from 'react';
import styles from './Detail.module.css'

export default function Detail(props) {
  console.log(props);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    return () => dispatch(clean())
  }, [dispatch, props.match.params.id])

  const myActivity = useSelector((state) => state.detail)

  return (
    <div className={styles.principal}>
      <Link to='/home'>
        <button>Go Back</button>
      </Link>
      <br />
      <div >
        {
          myActivity.length !== 0 ?
            <div>
              <h1>{myActivity.name}</h1>
              <br />
              <img src={myActivity.image} alt='countries' />
              <br />
              <p>{myActivity.id}</p>
              <br />
              <p>{myActivity.capital}</p>
              <br />
              <p>{myActivity.subregion}</p>
              <br />
              <p>km2: {myActivity.area.toLocaleString('en-US')} </p>
              <br />
              <p> Population: {myActivity.population.toLocaleString('en-US')} </p>
              <br />
              <div className={styles.cartas}>
                {myActivity.activities.map(n =>
                  <div className={styles.carta}>


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
            </div> : <p>Loading......</p>
        }


      </div>
    </div>
  )


}