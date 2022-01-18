import AddButton from '../AddButton/AddButton';
import UsersTable from '../UsersTable/UsersTable';
import './Main.css';

function Main(props) {
  return (
    <main className='Main'>
      <section className='Main-header'>
        <h2 className='Main-title'>Пользователи</h2>
        <AddButton />
      </section>
      <UsersTable />
    </main>
  );
}

export default Main;
