/* eslint-disable no-undef */
import React from 'react'
import styles from './PruebaCss2.module.css'
import { Link, useHistory } from 'react-router-dom';

const pruebaCss2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>

        <Link to='/home'>
          <button>Go Back</button>
        </Link>
        <h1>Create your activities</h1>

      </div>
      <div className={styles.footer}>footer</div>
      <div className={styles.activities}>
        <div className={styles.contenedorCon}>
          {input.country.map(con =>
            <div className={styles.country}>
              <p>{con}</p>
              <button className={styles.X} onClick={() => handleDelete(con)}>
                X
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={styles.titleImage}>image</div>
      <div className={styles.form}> <form onSubmit={handleSubmit}>


        <div>
          <label>Activity name:</label>
          <br />
          <br />
          <input
            className={styles.box}
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
          {errors.name && (
            <p className={styles.error}>{errors.name}</p>
          )}
        </div>
        <br />

        <div>
          <label>Difficulty level:</label>
          <br />
          <br />
          <input
            type="number"
            value={input.difficulty}
            name="difficulty"
            onChange={handleChange}
          />
          {errors.difficulty && (
            <p className={styles.error}>{errors.difficulty}</p>
          )}
        </div>
        <br />

        <div>
          <label>Duration level:</label>
          <br />
          <br />

          <input
            type="number"
            value={input.duration}
            name="duration"
            onChange={handleChange}
          />
          {errors.duration && (
            <p className={styles.error}>{errors.duration}</p>
          )}
        </div>
        <br />

        {/* <div>
            <label>Activity season:</label>
            <br />
            <input
              type="text"
              value={input.season}
              name="season"
              onChange={handleChange}
            />
          </div> */}


        <div className={styles.box}>
          <label>Season:</label>
          <br />

          <select defaultValue={"DEFAULT"} onChange={e => handleSeason(e)}>
            <option value="DEFAULT" disabled>Season</option>
            <option name='Spring' value='Spring'>Spring</option>
            <option name='Summer' value='Summer'>Summer</option>
            <option name='Fall' value='Fall'>Fall</option>
            <option name='Winter' value='Winter'>Winter</option>

          </select>


        </div>
        <br />


        <div>
          <label>Activity image:</label>
          <br />
          <input
            type="text"
            value={input.image}
            name="image"
            onChange={handleChange}
          />
        </div>
        <br />



        <div className={styles.box}>
          <label>Country name:</label>
          <br />
          <select defaultValue={"DEFAULT"} onChange={(n) => handleSelect(n)}>
            <option value="DEFAULT" disabled >Add countries</option>
            {countries.map((con) => (

              <option value={con.name}>{con.name}</option>

            ))}

          </select>

        </div>

        <button type='submit' >Create</button>


      </form></div>
    </div>

  )
}

export default pruebaCss2
