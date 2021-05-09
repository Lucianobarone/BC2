import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Alert, Button } from 'antd';
import AddPackage from '../addPackage/index';
import {
  deletePassenger,
  fetchOnePassenger,
} from '../../../redux/actions-creators/services/pessenger-service';
import {
  succes,
  error,
} from '../../../redux/actions-creators/actions/pessenger-action';
import styles from './index.module.css';

export default function SimpleModal({ visible, handleCancel, passengerId }) {
  const dispatch = useDispatch();
  const err = useSelector((store) => store.pessengers.err);
  const succ = useSelector((store) => store.pessengers.succes);
  const onePassenger = useSelector((store) => store.pessengers.passenger);

  useEffect(() => {
    passengerId && dispatch(fetchOnePassenger(passengerId));
  }, [passengerId, succ]);

  const handleDelete = (id) => {
    dispatch(deletePassenger(id));
    handleCancel();
  };

  const onClose = () => {
    dispatch(error([]));
  };

  const onCloseSucces = () => {
    dispatch(succes([]));
  };

  const { name, surname, ticketCode, totalPackages, id } = onePassenger;
  let fullName = `${name} ${surname}`;
  return (
    <div>
      <Modal
        className={styles.modalContainer}
        visible={visible}
        title={fullName}
        onCancel={handleCancel}
        footer={false}
      >
        <div>
          {err && err.message ? (
            <Alert
              message={err.message}
              type="error"
              closable
              onClose={onClose}
            />
          ) : null}
        </div>
        <div>
          {succ && succ.length ? (
            <Alert
              message={succ}
              type="success"
              closable
              onClose={onCloseSucces}
            />
          ) : null}
        </div>
        <span className={styles.spanRowComtainer}>
          <span className={styles.spanRow}>
            <h3 className={styles.title}>Numero de vuelo</h3>
            <p>{ticketCode}</p>
          </span>
          <span className={styles.spanRow}>
            <h3 className={styles.title}>Cantidad de bultos</h3>
            <p>{totalPackages}</p>
          </span>
        </span>
        <AddPackage passenger={onePassenger} />
        <br />
        <br />
        <Button
          disabled={totalPackages > 0 ? false : true}
          className={styles.remove}
          onClick={() => handleDelete(id)}
        >
          Retirar todos los bultos
        </Button>
      </Modal>
    </div>
  );
}
