import React from 'react';
import EditItem from '../EditItem/EditItem';
import DeleteItem from '../DeleteItem/DeleteItem';
import './UserRow.css';

function UserRow({ user }) {
  return (
    <tr className='body-row'>
      <td className='body-cell'>{user.surname}</td>
      <td className='body-cell'>{user.name}</td>
      <td className='body-cell'>{user.patronymic}</td>
      <td className='body-cell body-cell_theme_dark'>{user.email}</td>
      <td className='body-cell body-cell_theme_dark'>{user.login}</td>
      <td className='body-cell'>
        <div className='body-control'>
          <div className='body-control_item'>
            <EditItem id={user.id}/>
          </div>
          <div>
            <DeleteItem id={user.id}/>
          </div>          
        </div>       
      </td>
    </tr>
  );
}

export default UserRow;
