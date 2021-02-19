import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/reducer';

const getKittens = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: true });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    dispatch({ type: 'UPDATE_USERS', payload: users });
    dispatch({ type: 'LOADING', payload: false });
  } catch (error) {
    dispatch({ type: 'LOADING', payload: false });
    console.error(error);
  }
};

export default getKittens;
