import React from 'react';
import styles from './PruebaCss.module.css'



const PruebaCss = () => {
  return (

    <div className={styles.container} >
      <div className={styles.navBar}>navBar</div>
      <div className={styles.image}>image</div>
      <div className={styles.details}>details</div>
      <div className={styles.activities}>activities</div>
      <div className={styles.footer}>footer</div>
    </div>
  );
}

export default PruebaCss;
