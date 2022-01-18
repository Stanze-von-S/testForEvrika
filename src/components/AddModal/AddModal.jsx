import { useRef, useState, useContext, useCallback } from 'react';
import GlobalContext from '../../context/globalContext';
import './AddModal.css'

function AddModal({activeAdd, setActiveAdd, counter}) {

  const { dispatch } = useContext(GlobalContext);
  const counterId = useCallback(() => counter(), []);
  const surname = useRef('');
  const name = useRef('');
  const patronymic = useRef('');
  const email = useRef('');
  const login = useRef('');

  const [strSurname, setStrSurname] = useState(surname.current.value);
  const [strName, setStrName] = useState(name.current.value);
  const [strPatronymic, setStrPatronymic] = useState(patronymic.current.value);
  const [strEmail, setStrEmail] = useState(email.current.value);
  const [strLogin, setStrLogin] = useState(login.current.value);

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
    
  const addNewUser = (event) => {
    event.preventDefault();
    if (!boolButton) {
      alert('Заполните все поля формы');
    }
    const form = event.target;
    const { surname, name, patronymic, email, login } = form;
    const user = {
      surname: surname.value,
      name: name.value,
      patronymic: patronymic.value,
      email: email.value,
      login: login.value,
    };
    user.id = counterId();
   
    dispatch({ type: 'ADD_NEW_USER', payload: user });

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

    setActiveAdd(false);
  }

  return (
    <section className={activeAdd ? 'modal modal_type_active' : 'modal'}>
      <div className={activeAdd ? 'modal__content modal__content_type_active' : 'modal__content'}>
        <div className='modal__content_header'>
          <h2 className='modal-title'>Создание пользователя</h2>
          <svg onClick={() => setActiveAdd(false)} className='modal-cross' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 5.5L5.5 14.5" stroke="#B8C1CC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.5 14.5L5.5 5.5" stroke="#B8C1CC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <form className='modal__form' onSubmit={addNewUser}>
          <label htmlFor="surname" className='modal__form_label'>Фамилия</label>
          <input type="text" ref={surname} onChange={inputSurname} id='surname' name='surname' className='modal__form_input' placeholder='Введите фамилию' required tabIndex={1} formNoValidate />

          <label htmlFor="name" className='modal__form_label'>Имя</label>
          <input type="text" ref={name} onChange={inputName} id='name' name='name' className='modal__form_input' placeholder='Введите имя' required tabIndex={2} formNoValidate />

          <label htmlFor="patronymic" className='modal__form_label'>Отчество</label>
          <input type="text" ref={patronymic} onChange={inputPatronymic} id='patronymic' name='patronymic' className='modal__form_input' placeholder='Введите отчество' required tabIndex={3} formNoValidate />

          <label htmlFor="email" className='modal__form_label'>E-mail</label>
          <input type="email" ref={email} onChange={inputEmail} id='email' name='email' className='modal__form_input' placeholder='Введите электронную почту' required tabIndex={4} formNoValidate />

          <label htmlFor="login" className='modal__form_label'>Логин</label>
          <input type="text" ref={login} onChange={inputLogin} id='login' name='login' className='modal__form_input' placeholder='Введите логин' required tabIndex={5} formNoValidate />

          <button className={boolButton ? 'modal__form_button' : 'modal__form_button modal__form_button_type_enabled'} tabIndex={6}>Создать</button>
        </form>

      </div>
    </section>
  );
}

export default AddModal;
