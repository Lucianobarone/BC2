import React, { useState } from 'react';
import { Table } from 'antd';
import PackageModal from '../modalPackage/index';
import styles from './index.module.css';

const AddPackage = ({ passenger }) => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const handleCancel = () => {
    setModal(false);
  };

  const columns = [
    {
      title: 'Tipo',
      dataIndex: 'typeName',
      key: 'typeName',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Nombre',
      width: 220,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Id',
      dataIndex: 'isGarment',
      key: 'isGarment',
      render: (text) => (text ? text : `-`),
    },
  ];
  return (
    <div>
      <div style={{ padding: '3%' }}>
        <div className={styles.dataContainer}>
          <div className={styles.orderContainer}>
            <h4 className={styles.title}>Bultos</h4>
            <Table
              size="middle"
              pagination={false}
              columns={columns}
              dataSource={passenger.packages}
            />
            <button className={styles.add} onClick={() => showModal()}>
              Agregar bulto +
            </button>
          </div>
        </div>
      </div>
      <PackageModal
        visible={modal}
        handleCancel={handleCancel}
        passengerId={passenger.id}
      />
    </div>
  );
};

export default AddPackage;
