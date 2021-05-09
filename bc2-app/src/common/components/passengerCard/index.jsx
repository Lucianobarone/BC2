import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'antd';
import SimpleModal from '../../components/modal/index';
import styles from './index.module.css';

const PassengerCard = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const [passengerId, setPassengerId] = useState(0);
  const toggle = useSelector((state) => state.pessengers.toggle);

  const handleCancel = () => {
    setVisible(false);
  };

  const showModal = (id) => {
    const value = id;
    setPassengerId(value);
    setVisible(true);
  };

  return (
    <div
      className={
        toggle ? styles.orderCardContainerToggle : styles.orderCardContainer
      }
    >
      {data &&
        data.map((e) => {
          let fullName = `${e.name} ${e.surname}`;
          return (
            <Card
              key={e.id}
              title={fullName}
              className={styles.card}
              style={
                toggle
                  ? {
                      width: '90%',
                      display: 'flex',
                      flexDirection: 'row',
                      height: 70,
                      margin: 5,
                    }
                  : null
              }
            >
              <p className={styles.ticketCode}>{e.ticketCode}</p>
              <div className={styles.votesContainer}>
                <p
                  onClick={() => showModal(e.id)}
                  style={toggle ? { width: '40%' } : null}
                >
                  Bultos: <strong>{e.totalPackages}</strong>
                </p>
                <button
                  className={styles.vote}
                  onClick={() => showModal(e.id)}
                  style={toggle ? { width: '35%', marginLeft: '4vw' } : null}
                >
                  VER
                </button>
              </div>
            </Card>
          );
        })}

      <SimpleModal
        visible={visible}
        passengerId={passengerId}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default PassengerCard;
