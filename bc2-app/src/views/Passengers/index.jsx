import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal, Switch } from 'antd';
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';
import PassengerCard from '../../common/components/passengerCard';
import TableInfo from '../../common/components/tableInfo';
import { fetchAllPassengers } from '../../redux/actions-creators/services/pessenger-service';
import {
  succes,
  toggleView,
} from '../../redux/actions-creators/actions/pessenger-action';
import styles from './index.module.css';

const Passengers = () => {
  const dispatch = useDispatch();
  const allPassengers = useSelector((state) => state.pessengers.all);
  const succ = useSelector((store) => store.pessengers.succes);

  useEffect(() => {
    dispatch(fetchAllPassengers());
  }, [succ]);

  const handleToggle = () => {
    dispatch(toggleView());
  };

  const success = () => {
    Modal.success({
      content: succ,
    });
    dispatch(succes([]));
  };

  return (
    <div>
      <div style={{ padding: '3%' }}>
        <div className={styles.dataContainer}>
          <div className={styles.toolContainer}>
            <TableInfo passengers={allPassengers} />
          </div>
          <div className={styles.orderContainer}>
            <div className={styles.toggleContainer}>
              <h1>Lista de pasajeros</h1>
              <div>{succ && succ.length ? success() : null}</div>
              <Switch
                onClick={handleToggle}
                className={styles.toggle}
                checkedChildren={
                  <UnorderedListOutlined className={styles.toggleView} />
                }
                unCheckedChildren={
                  <AppstoreOutlined className={styles.toggleView} />
                }
                defaultChecked
              />
            </div>
            <hr style={{ height: 2, color: 'red' }} />
            <div className={styles.orderHead}>
              <h3>Pasajeros</h3>
              <Link to={`/pasajeros/agregar`}>
                <button className={styles.add}>Agregar +</button>
              </Link>
            </div>
            <PassengerCard data={allPassengers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passengers;
