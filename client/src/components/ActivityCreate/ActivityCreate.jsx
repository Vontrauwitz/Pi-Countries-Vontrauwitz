import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { postActivity, getCountries, getActivity } from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ActivityCreate.module.css'
import londonBus from '../../assets/img/londonbus.png'
import helloWorld from '../../assets/img/helloworld.gif'





export function ActivityCreate() {
  const dispatch = useDispatch()

  const history = useHistory();

  const countries = useSelector((state) => state.countries)
  const activities = useSelector((state) => state.activities)


  // const activitiesSeason = useSelector((state) => state.activities)



  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: '',
    difficulty: '0',
    duration: '0',
    season: '',
    image: '',
    country: []
  })

  //*=========================================================================
  //*                   validations

  function validate(input) {
    let errors = {};
    if (activities.find(el => el.name === input.name)) {
      errors.name = alert('The country already exists!')
    } else if (!input.name) {
      errors.name = "The ACTIVITY name is required";
    } else if (!input.name.match(/^[a-zA-Z\s]*$/)) {
      errors.name = "The ACTIVITY name must not have symbols"
    }
    if (!input.difficulty) {
      errors.duration = "difficulty is required"
    }

    else if (input.difficulty < 1 || input.difficulty > 5) {
      errors.difficulty = " The ACTIVITY difficulty must be between 1  and 5 scale"
    }
    if (!input.duration) {
      errors.duration = "Duration is required"
    }

    else if (input.duration < 1 || input.duration > 24) {
      errors.duration = " The ACTIVITY time must be between 1 hours and 24 hours"
    }
    if (input.season === !"Spring" || input.season === !"Summer" || input.season === !"Fall" || input.season === !"Winter") {
      errors.season = "the ACTIVITY season must be selected"
    }



    if (!input.countries || input.countries.length === 0) {
      errors.countries = "At least one country must be selected"
    }
    return errors;
  }


  function handleChange(n) {
    setInput({
      ...input,
      [n.target.name]: n.target.value
    })
    console.log(input);
    setErrors(validate({
      ...input,
      [n.target.name]: n.target.value
    }))
  }




  function handleSelect(n) {
    if (!input.country.includes(n.target.value)) {
      setInput({
        ...input,
        country: [...input.country, n.target.value]

      })
    } else {
      alert("the country has already been selected")
    }
  }

  function handleSeason(n) {
    setInput({
      ...input,
      season: n.target.value
    })
  }

  function handleSubmit(n) {
    n.preventDefault();
    console.log(input);
    dispatch(postActivity(input))
    setInput({
      name: '',
      difficulty: '',
      duration: '',
      season: "",
      image: '',
      country: []
    })
    history.push('/home')
  }

  function handleDelete(n) {
    setInput({
      ...input,
      country: input.country.filter(con => con !== n)
    })
  }



  useEffect(() => {
    dispatch(getActivity())
    dispatch(getCountries());
  }, [dispatch]);


  return (

    <div className={styles.container}>
      {/* //?===================================================================== */}
      {/* //? navbar */}

      <div className={styles.navBar}>
        <img className={styles.logo} src={helloWorld} alt='holaMundo' />
        <Link to='/home'>
          <button className={styles.buttonSubmit} >Go Back</button>
        </Link>
        <h1>Create your activities</h1>
      </div>

      {/* //?===================================================================== */}
      {/* //? footer */}

      <div className={styles.footer}>Aqui va un footer!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>

      {/* //?===================================================================== */}
      {/* //? countries */}

      <div className={styles.countries}>
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
      {/*//? ===============================================================  */}
      {/* //? image */}

      <img className={styles.titleImage} src={londonBus} alt='tittleimg1' />
      {/*//? ===============================================================  */}
      {/* //? form  (general) */}

      <div className={styles.form}>
        <form onSubmit={handleSubmit}>


          <div className={styles.containerForm}>

            {/*//? ===============================================================  */}
            {/* //? form  (left) */}

            <div className={styles.leftForm}>
              <div className={styles.name}>
                <label>Activity name:</label>

                <input
                  className={styles.select2}
                  type="text"
                  value={input.name}
                  name="name"
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className={styles.error}>{errors.name}</p>
                )}
              </div>


              <div className={styles.difficulty}>
                <label>Difficulty level:</label>

                <input
                  className={styles.select2}
                  type="number"
                  value={input.difficulty}
                  name="difficulty"
                  onChange={handleChange}
                />
                {errors.difficulty && (
                  <p className={styles.error}>{errors.difficulty}</p>
                )}
              </div>


              <div className={styles.duration}>
                <label>Duration level:</label>

                <input
                  className={styles.select2}
                  type="number"
                  value={input.duration}
                  name="duration"
                  onChange={handleChange}
                />
                {errors.duration && (
                  <p className={styles.error}>{errors.duration}</p>
                )}
              </div>
            </div>

            {/*//? ===============================================================  */}
            {/* //? form  (right) */}

            <div className={styles.rightForm}>
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


              <div className={styles.season}>
                <label>Season: </label>
                <select className={styles.select2} defaultValue={"DEFAULT"} onChange={e => handleSeason(e)}>
                  <option value="DEFAULT" disabled> Select a Season:</option>
                  <option name='Spring' value='Spring'>Spring</option>
                  <option name='Summer' value='Summer'>Summer</option>
                  <option name='Fall' value='Fall'>Fall</option>
                  <option name='Winter' value='Winter'>Winter</option>
                </select>
              </div>



              <div className={styles.actImage}>
                <label>Activity image:     </label>
                <input
                  className={styles.select2}
                  type="text"
                  value={input.image}
                  name="image"
                  onChange={handleChange}
                />
              </div>


              <div className={styles.countrySelect}>
                <label>Country name:</label>
                <br />
                <select className={styles.select} defaultValue={"DEFAULT"} onChange={(n) => handleSelect(n)}>
                  <option value="DEFAULT" disabled >Add countries</option>
                  {countries.map((con) => (

                    <option value={con.name}>{con.name}</option>

                  ))}

                </select>

              </div>
            </div>
          </div>


          <div className={styles.submit}>
            <button className={styles.buttonSubmit}  >Create</button>
          </div>

        </form>
      </div>
    </div>

  )

}