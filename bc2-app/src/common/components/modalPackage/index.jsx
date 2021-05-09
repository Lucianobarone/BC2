import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Input, Form, Button, Menu, Dropdown } from 'antd';
import { createPackage } from '../../../redux/actions-creators/services/package-services';
import { DownOutlined, ArrowRightOutlined } from '@ant-design/icons';
import styles from './index.module.css';

export default function PackageModal({ visible, handleCancel, passengerId }) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [dropValue, setDropValue] = useState('Selecionar tipo');

  function handleMenuClick(e) {
    setDropValue(e.key);
  }

  const menu = (
    <Menu onClick={(e) => handleMenuClick(e)}>
      <Menu.Item key="Grandes" icon={<ArrowRightOutlined />}>
        Grandes
      </Menu.Item>
      <Menu.Item key="Pequeños" icon={<ArrowRightOutlined />}>
        Pequeños
      </Menu.Item>
      <Menu.Item key="Prendas" icon={<ArrowRightOutlined />}>
        Prendas
      </Menu.Item>
    </Menu>
  );

  const onFinish = (values) => {
    dispatch(
      createPackage({
        name: values.name,
        typeName: dropValue,
        passengerId,
      }),
    );
    handleCancel();
  };

  return (
    <div>
      <Modal
        className={styles.modalContainer}
        visible={visible}
        title={'Agregar bulto'}
        onCancel={handleCancel}
        footer={false}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="typeName"
            label="Tipo"
            tooltip={`Indicar Tipo de bulto`}
          >
            <Dropdown overlay={menu} rules>
              <Button style={{ width: '100%', height: 40 }}>
                {dropValue} <DownOutlined />
              </Button>
            </Dropdown>
          </Form.Item>
          <Form.Item
            name="name"
            label="Nombre"
            rules={[
              {
                required: true,
                message: 'Por favor ingresar nombre del bulto!',
              },
            ]}
            tooltip={`Indicar Nombre del bulto`}
          >
            <Input placeholder="Ingresar nombre" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{ width: 200 }}
              htmlType="submit"
              disabled={dropValue == 'Selecionar tipo'}
            >
              Crear
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
