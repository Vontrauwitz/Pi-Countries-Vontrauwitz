import React from 'react'
import styles from './Paginated.module.css'



export default function Paginated({ countriesPerPage, allCountries, paginated, currentPage, beforePage, nextPage }) {

  const pageNumbers = [];
  for (let n = 1; n <= Math.ceil(allCountries === 250 ? (allCountries / countriesPerPage) + 1 : allCountries / countriesPerPage); n++)

    pageNumbers.push(n)




  return (  // aqui renderizamos los numeros
    <nav className={styles.navP}>
      <ul>
        <button className={styles.button} onClick={beforePage} disabled={currentPage <= 1}>{"<<"}</button>
        {pageNumbers && pageNumbers.map(number => (

          <li key={number}>


            <button className={styles.button} onClick={() => paginated(number)} disabled={currentPage === number} >{number}</button>


          </li>


        ))}
        <button className={styles.button} onClick={nextPage} disabled={currentPage >= pageNumbers.length}> {">>"}</button>
      </ul>
    </nav>
  )
}
