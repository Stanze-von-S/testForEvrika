import './App.css';
import Main from '../Main/Main';
import GlobalContext from '../../context/globalContext';
import { useReducer, useState } from 'react';
import reducer from '../../reducer/reducer';
import AddModal from '../AddModal/AddModal';
import EditModal from '../EditModal/EditModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import initialState from '../../files/initialState';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const [modalAddActive, setModalAddActive] = useState(false);

  function makeCounter() {
    const id = [];
    initialState.users.forEach(user => id.push(user.id));
    let count = Math.max.apply(null, id);
    return function() {
      return ++count;
    };
  }

  const counter = makeCounter();

  return (
    <>
      <GlobalContext.Provider value={{ state, dispatch, counter, setModalAddActive }}>
        <header className='App-header'></header>
        <div className="App">        
          <Main />         
        </div>
        <AddModal counter={counter} activeAdd={modalAddActive} setActiveAdd={setModalAddActive} />
        <EditModal />
        <DeleteModal />
      </GlobalContext.Provider>    
    </>
    
  );
}

export default App;
