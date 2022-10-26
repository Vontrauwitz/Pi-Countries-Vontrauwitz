import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCountriesName } from '../../actions'
import styles from './SearchBar.module.css'


export default function SearchBar({ setCurrentPage }) {

  const dispatch = useDispatch()

  const [name, setName] = useState("")

  //logica


  function handleInputChange(n) {
    n.preventDefault()
    setName(n.target.value)
    setCurrentPage(1)
    // dispatch(getCountriesName(name))


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

  // function handleSubmit(n) {

  // } if (name.length === 0) {
  //   alert('No countries foundd')
  // } else {
  //   dispatch(getCountriesName(name))
  //   setCurrentPage(1)
  //   setName("")
  // }


  return (
    //agregamos la logica del renderizado
    <div>
      <input
        className={styles.input}
        type='text'


        onChange={(n) => handleInputChange(n)}
      />

      <button className={styles.buttonSearch} type='submit' onClick={(n) => handleSubmit(n)}>Go!</button>
    </div>
  )
}