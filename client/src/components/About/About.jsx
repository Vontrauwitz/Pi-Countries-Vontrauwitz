import React from 'react'
import styles from './About.module.css'
import { Link } from 'react-router-dom'
import bob from '../../assets/img/1BOk.gif'
import helloWorld from '../../assets/img/helloworld.gif'
import git from '../../assets/img/github90.png'
import linkedin from '../../assets/img/linkedin90.png'
import hans from '../../assets/img/yosinfondo.png'

export default function About() {
  return (

    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.navBar}>

          <img className={styles.logo} src={helloWorld} alt="holamundo" />
          <Link to='/Home'>
            <button className={styles.btn}>Home</button>
          </Link>

        </div>
        <div className={styles.titleText}>    <h1>Hello World:</h1></div>

      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <img className={styles.bob} src={hans} alt='yo' />
          <img className={styles.bob} src={bob} alt="sponge" />
        </div>
        <div className={styles.text}>

          <h2>This is my solo project in I'm Henry</h2>
          <br></br>

          <p>In which I was asked to create a SPA (single page application), using the following technologies:</p>
          <br />
          <p className={styles.list}>react</p><br />
          <p className={styles.list}>Redux</p><br />
          <p className={styles.list}>Express</p><br />
          <p className={styles.list}>Sequelize</p><br />
          <p className={styles.list}>Postgres</p><br />
          <p className={styles.list}>API-RestCountries</p><br />
          <p />
          <br />
          <p>The general idea of ​​the project is called "countries" but although we search for countries from the database, it is actually the tourist activities that we create in the form.</p><br />

          <ul> <p> Challenges in this project:</p>
            <br />
            <li><p className={styles.list}>
              Paginated: </p> Since it requests that there be 9 countries on the first page and from there, 10 for the rest.
            </li><br />
            <li><p className={styles.list}>Backend:</p> Since in this project it is requested to upload not only the activities that we created from scratch, but also the countries brought from the API.</li><br />
            <li><p className={styles.list}>Filtered:</p> In this case we have two filters that one works on the continents and the other on the activities that we create, in this case I opted for the filters to work based on a button that executes the dispatch and the select only collects the value but do not trigger the dispatch so that the different activities could be seen and the filters could work independently.</li><br />

            <li><p className={styles.list}>Activity component:</p> In this case I didn't want only the activities to be rendered in the country detail, so I chose to create a component where the activity cards would be rendered independently. </li>

          </ul>
          <br />





          <p> for more details, information and other projects,</p>
          <br />
          <p>please </p>
          <br />
          <p>visit my GitHUB or my Linkedin:</p>
          <br />

          <a href='https://github.com/Vontrauwitz' target="_blank" rel="noreferrer"><img src={git} alt='githans' /></a>



          <a href=' https://www.linkedin.com/in/vontrauwitzdev/' target="_blank" rel="noreferrer"><img src={linkedin} alt='githans' /></a>
          <br />
          Thanks for viewing my project
          <br />
          <br />

          Hans Trawitz <br />
          <br />
          <p className={styles.list} > VonTrauwitzDev</p>



        </div>

      </div>
    </div >










  )
}
