import React from 'react'
import styles from './Card.module.css'

//? all countries  * 1 * de aqui se va a renderizar el componente card a home

export default function Card({ name, image, continent }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img className={styles.imgCard} src={image} alt="countries Card" />
      </div>
      <div className={styles.cardDescription}>
        <h1 className={styles.textTitle}> {name} </h1>
        <div>
          <h3 className={styles.textBody}>  Continent: </h3>

          <h2>
            <p className={styles.types}>
              {continent}
            </p>
          </h2>
        </div>
      </div>

      {/* <label className={styles.container}>
        <input clasName={styles.checked} type='checkbox' />
        <div className={styles.checkmark}></div>
      </label> */}

    </div>
  );
}
