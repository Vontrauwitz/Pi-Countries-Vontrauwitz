import React from 'react'
import styles from './CardActivity.module.css'

export function CardActivity({ name, difficulty, duration, season, image, countries }) {
  return (

    <div className={styles.container}>

      <img className={styles.imgCard} src={image} alt="activities" />

      <div className={styles.name}>{name}</div>

      <div className={styles.info}>
        <div className={styles.title}>Dificulty: </div>
        <p>{difficulty}</p>
        <br />
        <div className={styles.title}>Duration: </div>
        <p>{duration}</p>
        <br />
        <div className={styles.title}>Season: </div>
        <p>{season}</p>
      </div>

      <div className={styles.countries}>

        <div>available countries:</div>
        <br />
        <div className={styles.intCountries} >{countries ? countries : "Unknown"}</div>
      </div>
    </div>






  )
}