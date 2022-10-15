import React from 'react'
import styles from './Paginated.module.css'


export default function Paginated({ countriesPerPage, allCountries, paginated, currentPage }) {

  const pageNumbers = [];
  for (let n = 1; n <= Math.ceil(allCountries === 250 ? (allCountries / countriesPerPage) + 1 : allCountries / countriesPerPage); n++)

    pageNumbers.push(n)

  return (  // aqui renderizamos los numeros
    <nav className={styles.navP}>
      <ul>
        {pageNumbers && pageNumbers.map(number => (
          <li key={number}>
            <button className={styles.button} onClick={() => paginated(number)} disabled={currentPage === number} >{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
