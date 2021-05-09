import React from 'react';
import 'antd/dist/antd.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import Passengers from '../Passengers';
import AddPassenger from '../AddPassenger/index';
import Nav from '../../sharedCommponents/Navbar';

export const Routes = () => {
  return (
    <div style={{ backgroundColor: '#F5EFE6' }}>
      <Nav />
      <Switch>
        <div style={{ paddingTop: 50 }}>
          <Route exact path="/pasajeros/agregar" component={AddPassenger} />
          <Route exact path="/pasajeros" component={Passengers} />
          <Redirect from="/" to="/pasajeros" />
        </div>
      </Switch>
    </div>
  );
};
