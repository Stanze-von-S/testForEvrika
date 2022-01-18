import { useRef, useState, useContext, useEffect } from 'react';
import GlobalContext from '../../context/globalContext';
import './EditModal.css';

function EditModal() {

  const { dispatch, state } = useContext(GlobalContext);
  const activeEdit = state.modals[0].modalEditActive;

  const edUser = {
    id: -1,
    surname: '',
    name: '',
    patronymic: '',
    email: '',
    login: '',
  };

  edUser.id = state.modals[0].user.id;
  edUser.surname = state.modals[0].user.surname;
  edUser.name = state.modals[0].user.name;
  edUser.patronymic = state.modals[0].user.patronymic;
  edUser.email = state.modals[0].user.email;
  edUser.login = state.modals[0].user.login;

  const surname = useRef(edUser.surname);
  const name = useRef(edUser.name);
  const patronymic = useRef(edUser.patronymic);
  const email = useRef(edUser.email);
  const login = useRef(edUser.login);

  const [strSurname, setStrSurname] = useState(edUser.surname);
  const [strName, setStrName] = useState(edUser.name);
  const [strPatronymic, setStrPatronymic] = useState(edUser.patronymic);
  const [strEmail, setStrEmail] = useState(edUser.email);
  const [strLogin, setStrLogin] = useState(edUser.login);

  useEffect(() => {
    setStrSurname(edUser.surname);
    setStrName(edUser.name);
    setStrPatronymic(edUser.patronymic);
    setStrEmail(edUser.email);
    setStrLogin(edUser.login);
  }, [activeEdit]);

  const inputSurname = ({ target }) => {
    setStrSurname(() => target.value);
  };

  const inputName = ({ target }) => {
    setStrName(() => target.value);
  };

  const inputPatronymic = ({ target }) => {
    setStrPatronymic(() => target.value);
  };

  const inputEmail = ({ target }) => {    
    setStrEmail(() => target.value);
  };

  const inputLogin = ({ target }) => {
    setStrLogin(() => target.value);
  };

  let boolButton = strSurname !== '' && strSurname !== undefined && strName !== '' && strName !== undefined && strPatronymic !== '' && strPatronymic !== undefined && strLogin !== '' && strLogin !== undefined && (strEmail?.includes('@')) && strEmail !== undefined;
    
  const editUser = (event) => {
    event.preventDefault();
    if (!boolButton) {
      alert('Заполните все поля формы');
    }
    const form = event.target;
    const { surname, name, patronymic, email, login } = form;
    const user = {
      id: edUser.id,
      surname: surname.value,
      name: name.value,
      patronymic: patronymic.value,
      email: email.value,
      login: login.value,
    };
   
    dispatch({ type: 'EDIT_USER', payload: user });

    surname.value = '';
    setStrSurname(prev => prev = '');
    name.value = '';
    setStrName(prev => prev = '');
    patronymic.value = '';
    setStrPatronymic(prev => prev = '');
    email.value = '';
    setStrEmail(prev => prev = '');
    login.value = '';
    setStrLogin(prev => prev = '');

    boolButton = false;
  }

  return (
    <section className={activeEdit ? 'modal modal_type_active' : 'modal'}>
    <div className={activeEdit ? 'modal__content modal__content_type_active' : 'modal__content'}>
        <div className='modal__content_header'>
          <h2 className='modal-title'>Редактирование пользователя</h2>
          <svg onClick={() => dispatch({ type: 'CLOSE_EDIT_MODAL' })} className='modal-cross' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 5.5L5.5 14.5" stroke="#B8C1CC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.5 14.5L5.5 5.5" stroke="#B8C1CC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <form className='modal__form' onSubmit={editUser}>
          <label htmlFor="surname" className='modal__form_label'>Фамилия</label>
          <input type="text" ref={surname} onChange={inputSurname} id='surname' name='surname' className='modal__form_input' placeholder='Введите фамилию' required tabIndex={1} defaultValue={edUser.surname}></input>

          <label htmlFor="name" className='modal__form_label'>Имя</label>
          <input type="text" ref={name} onChange={inputName} id='name' name='name' className='modal__form_input' placeholder='Введите имя' required tabIndex={2} defaultValue={edUser.name}></input>

          <label htmlFor="patronymic" className='modal__form_label'>Отчество</label>
          <input type="text" ref={patronymic} onChange={inputPatronymic} id='patronymic' name='patronymic' className='modal__form_input' placeholder='Введите отчество' required  tabIndex={3} defaultValue={edUser.patronymic}></input>

          <label htmlFor="email" className='modal__form_label'>E-mail</label>
          <input type="email" ref={email} onChange={inputEmail} id='email' name='email' className='modal__form_input' placeholder='Введите электронную почту' required  tabIndex={4} defaultValue={edUser.email}></input>

          <label htmlFor="login" className='modal__form_label'>Логин</label>
          <input type="text" ref={login} onChange={inputLogin} id='login' name='login' className='modal__form_input' placeholder='Введите логин' required  tabIndex={5} defaultValue={edUser.login}></input>

          <button className={boolButton ? 'modal__form_button' : 'modal__form_button modal__form_button_type_enabled'} tabIndex={6}>Сохранить</button>
        </form>

      </div>
    </section>
  );
}

export default EditModal;
