import { useContext } from 'react';
import GlobalContext from '../../context/globalContext';
import './DeleteModal.css';

function DeleteModal(props) {

  const { dispatch, state } = useContext(GlobalContext);

  const activeDelete = state.modals[1].modalDeleteActive;
  const id = state.modals[1].id;

  const closeModal = () => {
    dispatch({ type: 'CLOSE_DELETE_MODAL' });
  };

  const deleteUser = () => {
    dispatch({ type: 'DELETE_USER', payload: id })
  }

  return (
    <section className={activeDelete ? 'modal modal_type_active' : 'modal'}>
      <div className={activeDelete ? 'modal__content modal__content_type_active' : 'modal__content'}>
        <div className='modal__content_header'>
          <h2 className='modal-title'>Удаление пользователя</h2>
        </div>
        <div className='modal__body'>
          <p className='modal__body_description'>Удалить выбранного пользователя?</p>          
        </div>
        <div className='modal__part-button'>
          <button onClick={closeModal} className='modal__part-button_button modal__part-button_button_type_canceled' tabIndex={1}>Отменить</button>
          <button onClick={deleteUser} className='modal__part-button_button' tabIndex={2}>Удалить</button>
        </div>
      </div>
    </section>
  );
}

export default DeleteModal;
