import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCountriesName } from '../../actions'
import styles from './SearchBar.module.css'


export default function SearchBar() {

  const dispatch = useDispatch()

  const [name, setName] = useState("")

  //logica

  function handleInputChange(n) {
    n.preventDefault()

    setName(n.target.value)

    console.log(name);
  }

  function handleSubmit(n) {
    n.preventDefault()
    if (name.length === 0) {
      setName("")
      alert('Not a valid COUNTRY name')
    } else {

      dispatch(getCountriesName(name))
      setName("")
    }
  }


  return (
    //agregamos la logica del renderizado
    <div>
      <input
        className={styles.input}
        type='text'

        placeholder='Search Countries...'

        onChange={(n) => handleInputChange(n)}
      />

      <button className={styles.buttonSearch} type='submit' onClick={(n) => handleSubmit(n)}>Go!</button>
    </div>
  )
}