import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { postActivity, getCountries, getActivity } from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ActivityCreate.module.css'





export function ActivityCreate() {
  const dispatch = useDispatch()

  const history = useHistory();

  const countries = useSelector((state) => state.countries)


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
    if (!input.name) {
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
    <div className={styles.caja}>
      <div>
        <Link to='/home'>
          <button>Go Back</button>
        </Link>
        <h1>Create your activities</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>


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


        </form>
        <br />
        <br />


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
    </div>
  )

}