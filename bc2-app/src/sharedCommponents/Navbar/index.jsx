import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import styles from './index.module.css';
import logo from '../../assets/icons/logo.png';

const Nav = () => {
  const [current, setCurrent] = useState('mail');

  const handleClick = (e) => {
    setCurrent({ current: e.key });
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      className={styles.container}
    >
      <Link to="/pasajeros">
        <img
          src={logo}
          alt="Meli"
          width={'70vw'}
          style={{ marginTop: 10 }}
        ></img>
      </Link>

      <Menu.Item key="1">
        <Link to="/pasajeros">Pasajeros</Link>
      </Menu.Item>

      <Menu.Item key="2">
        <Link to="/pasajeros/agregar">Agregar pasajero</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
