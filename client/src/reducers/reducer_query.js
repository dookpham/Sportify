import { FETCH_SPECIFIC_PLAYERS } from '../compare/actionTypes';

const INITIAL_STATE = [[{Name: 'Aaron'}, {Name: 'Cam'}]];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_SPECIFIC_PLAYERS':
      return action.payload.data;
    default:
      return state;
  }
}