import { fetchAPI } from '../../../config/auth/axios';
import {
  fillAllPassengers,
  fillOnePassenger,
  succes,
  error,
} from '../actions/pessenger-action';

export const fetchAllPassengers = () => (dispatch) =>
  fetchAPI({ method: 'get', url: `/passengers` })
    .then(({ data }) => dispatch(fillAllPassengers(data)))
    .catch((err) => console.error(err));

export const fetchOnePassenger = (id) => (dispatch) =>
  fetchAPI({ method: 'get', url: `/passengers/${id}` })
    .then(({ data }) => dispatch(fillOnePassenger(data)))
    .catch((err) => console.error(err));

export const createPassenger = (body) => (dispatch) =>
  fetchAPI({ method: 'post', url: `/passengers`, body })
    .then(({ data }) => dispatch(succes(data.message)))
    .catch((err) => dispatch(error(err.response.data.message)));

export const deletePassenger = (id) => (dispatch) =>
  fetchAPI({ method: 'delete', url: `/passengers/${id}` })
    .then(({ data }) => dispatch(succes(data.message)))
    .catch((err) => console.error(err));
