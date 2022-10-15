import React from 'react';
import styles from './PruebaCss.module.css'
import mmun1 from '../../assets/img/mmun1.jpg'


const PruebaCss = () => {
  return (
    <div className={styles.container}>
      <div className={styles.uno}>
        left
      </div>
      <div className={styles.dos}>
        {/* <div className={styles.slider}>
          <ul>
            <li>
              <img src={mmun1} alt='pkm 1' id="slideImage" className={styles.slideImg} />
            </li>

          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default PruebaCss;
