import React from 'react'
import styles from './CardActivity.module.css'

export function CardActivity({ name, difficulty, duration, season, image, countries }) {
  return (
    <div className={styles.card}>
      {/* <p>{image}</p> */}
      <img className={styles.imgCard} src={image} alt="activities" />
      <br />
      <h2 >{name}</h2>
      <br />
      <p>Dificulty: {difficulty}</p>
      <br />
      <p>Duration: {duration}</p>
      <br />
      <p>Season: {season}</p>
      <br />
      <div>
        <h4>available countries:</h4>
        <p>{countries ? countries : "no se"}</p>
      </div>
    </div>
  )
}