const ACTION_TYPES = {
  add: 'ADD',
  update_users: 'UPDATE_USERS',
  loading: 'LOADING',
};

export interface RootState {
  id: number;
  users: Array<any>;
  loading: boolean;
}

const INITIAL_STATE: RootState = {
  id: 1,
  users: [],
  loading: false,
};

interface Action {
  type: string,
  payload?: any;
}

export default function reducer(state = INITIAL_STATE, action: Action): RootState {
  switch (action.type) {
    case ACTION_TYPES.add: return { ...state, id: state.id + +(action.payload || 0) };
    case ACTION_TYPES.update_users: return { ...state, users: action.payload };
    case ACTION_TYPES.loading: return { ...state, loading: action.payload };
    default: return state;
  }
}
