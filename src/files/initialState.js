const initialState = {
  users: [
    {
      id: 1, surname: 'Иванов', name: 'Иван', patronymic: 'Иванович', email: 'mail1@mail.com', login: 'user1',
    },
    {
      id: 2, surname: 'Петров', name: 'Петр', patronymic: 'Сергеевич', email: 'mail2@mail.com', login: 'user2',
    },
    {
      id: 3, surname: 'Сергеев', name: 'Григорий', patronymic: 'Викторович', email: 'mail3@mail.com', login: 'user3',
    },
    {
      id: 4, surname: 'Федоров', name: 'Виктор', patronymic: 'Федорович', email: 'mail4@mail.com', login: 'user4',
    },
    {
      id: 5, surname: 'Хвастунов', name: 'Сергей', patronymic: 'Петрович', email: 'mail5@mail.com', login: 'user5',
    },
    {
      id: 6, surname: 'Григорьев', name: 'Федор', patronymic: 'Григорьевич', email: 'mail6@mail.com', login: 'user6',
    },
  ],
  modals: [
    {
      modalEditActive: false, user: { id: -1, surname: '', name: '', patronymic: '', email: '', login: ''}
    },
    {
      modalDeleteActive: false, id: -1
    }
  ]  
};

export default initialState;
