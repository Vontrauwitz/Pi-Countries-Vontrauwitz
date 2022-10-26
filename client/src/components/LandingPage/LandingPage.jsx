import React from 'react'
import { Link } from 'react-router-dom'
import styles from './LandingPage.module.css'
import helloWorld from '../../assets/img/Hello.gif'

export default function LandingPage() {
  return (

    <div className={styles.container}>

      <div className={styles.navBar}>
        <Link to='/home'>
          <button className={styles.btn}>Home</button>
        </Link>
        <Link to='/About'>
          <button className={styles.btn}>About</button>
        </Link>
      </div>


      <div className={styles.image}>
        <div>
          <img className={styles.image1} src={helloWorld} alt='holamundo' />
        </div>
        <div className={styles.animatecharcter}>
          PI- COUNTRIES

          WELCOME
        </div>

      </div>





    </div>
  )
}
