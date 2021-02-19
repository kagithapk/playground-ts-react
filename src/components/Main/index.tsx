import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers/reducer';
import getUsers from '../../actions/getUsers';

const getId = (state: RootState): RootState['id'] => state.id;
const getUsersFromStore = (state: RootState): RootState['users'] => state.users;
const getLoadingStatus = (state: RootState): RootState['loading'] => state.loading;

const Main: FC = ({ children }) => {
  const id = useSelector(getId);
  const users = useSelector(getUsersFromStore);
  const loading = useSelector(getLoadingStatus);
  const dispatch = useDispatch();

  const handleAddClick = useCallback(() => {
    dispatch({ type: 'ADD', payload: 3 });
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <main>
        {children}
      </main>
      <p>{id}</p>
      <button type="button" onClick={handleAddClick}>Add</button>
      {loading ? <>Loading...</> : <></>}
      {users.map((user) => (
        <section key={user.id}>
          <p>{user.name}</p>
        </section>
      ))}
    </>
  )
};

export default Main;
