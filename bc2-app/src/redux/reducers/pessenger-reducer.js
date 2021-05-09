import { passengers } from '../constants';

const initialState = {
  all: [],
  passenger: {},
  err: [],
  succes: [],
  toggle: false,
};

const Passenger = (state = initialState, action) => {
  switch (action.type) {
    case passengers.FETCH_ALL_PASSENGERS:
      return { ...state, all: action.payload };
    case passengers.FETCH_ONE_PASSENGER:
      return { ...state, passenger: action.payload };
    case passengers.ERR:
      return { ...state, err: action.payload };
    case passengers.SUCCES:
      return { ...state, succes: action.payload };
    case passengers.TOOGLE_VIEW:
      return { ...state, toggle: !state.toggle };
    default:
      return state;
  }
};

export default Passenger;
