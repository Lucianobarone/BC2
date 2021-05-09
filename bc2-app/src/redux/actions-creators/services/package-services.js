import { fetchAPI } from '../../../config/auth/axios';
import { succes , error} from '../actions/pessenger-action';

export const createPackage = (body) => (dispatch) =>
  fetchAPI({ method: 'post', url: `/packages`, body })
    .then(({ data }) => dispatch(succes(data.message)))
    .catch((err) => dispatch(error(err.response.data.message)));