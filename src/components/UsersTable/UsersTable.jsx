import { useContext } from 'react';
import GlobalContext from '../../context/globalContext';
import TitleRow from '../TitleRow/TitleRow';
import UserRow from '../UserRow/UserRow';
import './UsersTable.css';

function UsersTable() {

  const { state } = useContext(GlobalContext);

  return (
    <table className='table'>
      <thead className='title-row'>
        <TitleRow />
      </thead>
      <tbody>
        {state.users.length > 0 && state.users.map((user) => <UserRow key={user.id} user={user} />)}
      </tbody>      
    </table>
  );
}

export default UsersTable;
