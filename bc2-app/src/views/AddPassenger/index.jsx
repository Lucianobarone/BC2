import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Input, Form, Button, Alert } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { createPassenger } from '../../redux/actions-creators/services/pessenger-service';
import {
  error,
  succes,
} from '../../redux/actions-creators/actions/pessenger-action';
import styles from './index.module.css';

const AddPassenger = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();
  const err = useSelector((store) => store.pessengers.err);
  const succ = useSelector((store) => store.pessengers.succes);

  useEffect(() => {
    dispatch(error([]));
    dispatch(succes([]));
  }, []);

  const onFinish = (values) => {
    dispatch(
      createPassenger({
        name: values.name,
        surname: values.surname,
        ticketCode: values.ticketCode.toUpperCase(),
      }),
    );
  };
  const onClose = () => {
    dispatch(error([]));
  };
  const onCloseSucces = () => {
    dispatch(succes([]));
    history.push(`/pasajeros`);
  };
  return (
    <div>
      <div className={styles.container}>
        <Link to={`/pasajeros`}>
          <div className={styles.close}>
            <CloseOutlined />
          </div>
        </Link>
        <h1>Nuevo pasajero</h1>
        <hr />
        <div>
          {err && err.length ? (
            <Alert message={err} type="error" closable onClose={onClose} />
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
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Form.Item
              name="name"
              label="Nombre"
              rules={[
                {
                  required: true,
                  message: 'Por favor ingresar Nombre!',
                },
              ]}
              tooltip={`Indicar Nombre del pasajero`}
            >
              <Input placeholder="Ingresar nombre" />
            </Form.Item>
            <Form.Item
              name="surname"
              label="Apellido"
              rules={[
                {
                  required: true,
                  message: 'Por favor ingresar Apellido!',
                },
              ]}
              tooltip={`Indicar Apellido del pasajero`}
            >
              <Input placeholder="Ingresar apellido" />
            </Form.Item>
          </div>
          <Form.Item
            name="ticketCode"
            label="Número de vuelo"
            rules={[
              {
                required: true,
                message: 'Por favor ingresar Codigo!',
              },
            ]}
            tooltip={{
              title: 'Indicar Número de vuelo del pasajero',
            }}
          >
            <Input
              maxLength={5}
              style={{ textTransform: 'uppercase' }}
              placeholder="Ingresar codigo alfanumerico de 5 digitos"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" className={styles.send} htmlType="submit">
              Crear
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddPassenger;
