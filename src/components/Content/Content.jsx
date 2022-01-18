import React from 'react';
import UsersTable from '../UsersTable/UsersTable';
import AddButton from '../AddButton/AddButton';

function Content(props) {
  return (
    <section>
      <div>
        <h2>
          Пользователи
        </h2>
        <AddButton />
      </div>
      <UsersTable />
    </section>
  );
}

export default Content;
