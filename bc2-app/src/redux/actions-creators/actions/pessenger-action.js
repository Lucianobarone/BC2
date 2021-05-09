import { passengers } from '../../constants';

export const fillAllPassengers = (data) => ({
  type: passengers.FETCH_ALL_PASSENGERS,
  payload: data,
});

export const fillOnePassenger = (data) => ({
  type: passengers.FETCH_ONE_PASSENGER,
  payload: data,
});

export const error = (data) => ({
  type: passengers.ERR,
  payload: data,
});

export const succes = (data) => ({
  type: passengers.SUCCES,
  payload: data,
});

export const toggleView = () => ({
  type: passengers.TOOGLE_VIEW,
});
