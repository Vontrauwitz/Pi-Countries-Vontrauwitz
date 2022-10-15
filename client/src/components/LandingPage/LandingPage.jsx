/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './LandigPage.module.css'
import cancun from '../../assets/img/cancun.png'
import china from '../../assets/img/china.png'
import coliseo from '../../assets/img/coliseo.png'
import cristo from '../../assets/img/cristo.png'
import machu from '../../assets/img/machu.png'
import petra from '../../assets/img/petra.png'
import taj from '../../assets/img/taj.png'


export const LandingPage = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.slider}>
        <ul>
          <li>
            <img src={cancun} alt='pkm 1' id="slideImage" className={styles.slideImg} />
          </li>
          <li>
            <img src={china} alt='pkm 2' id="slideImage" className={styles.slideImg} />
          </li>
          <li>
            <img src={coliseo} alt='pkm 3' id="slideImage" className={styles.slideImg} />
          </li>
          <li>
            <img src={cristo} alt='pkm 4' id="slideImage" className={styles.slideImg} />
          </li>
          <li>
            <img src={machu} alt='pkm 2' id="slideImage" className={styles.slideImg} />
          </li>
          <li>
            <img src={petra} alt='pkm 3' id="slideImage" className={styles.slideImg} />
          </li>
          <li>
            <img src={taj} alt='pkm 4' id="slideImage" className={styles.slideImg} />
          </li>
        </ul>
      </div>
      <div className={styles.overlay}>
        <div className={styles.botones}>
          <h1>Welcome to the world app</h1>
          <h3>Press the Button</h3>

          <Link to='/home'>
            <button className={styles.btn}>ENTER</button>
          </Link>
        </div>
      </div>
    </div>



  )
}