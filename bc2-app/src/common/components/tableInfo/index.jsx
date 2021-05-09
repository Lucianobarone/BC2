import React from 'react';
import { Card } from 'antd';
import styles from './index.module.css';

let hora = Math.floor(Math.random() * 24);
let minuto = Math.floor(Math.random() * 60);

const toolInfo = ({ passengers }) => (
  <div className={styles.toolInfoContainer}>
    <Card className={styles.toolCard}>
      <h3>Informacion</h3>
      <div className={styles.moreVoted}>
        <h4>Total pasajeros</h4>
        <p className={styles.feature}>{passengers.length}</p>
        <hr className={styles.hr} />
        <h4>Hora de salida</h4>
        <p className={styles.bug}>{`${hora}:${minuto}`}</p>
      </div>
    </Card>
  </div>
);

export default toolInfo;
