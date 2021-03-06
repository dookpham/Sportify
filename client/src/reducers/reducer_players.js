import { REQUEST_ALL_PLAYERS, FILTER_PLAYERS } from '../player/actionTypes';
import { FETCH_SPECIFIC_PLAYERS } from '../compare/actionTypes';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_ALL_PLAYERS':
      return action.payload.data;
    case 'FILTER_PLAYERS':
      return action.payload.data[0];
    case 'FETCH_SPECIFIC_PLAYERS':
      return action.payload.data;
    default:
      return state;
  }
}
