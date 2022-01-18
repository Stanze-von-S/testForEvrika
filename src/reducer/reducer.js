const reducer = (state, action) => {
  switch (action.type) {

    case 'OPEN_EDIT_MODAL': {
      const user = state.users.find(user => user.id === action.payload);
      const arr = [...state.modals];
      arr[0].modalEditActive = true;
      arr[0].user = user;
      return { ...state, modals: [...arr] };
    }

    case 'CLOSE_EDIT_MODAL': {
      const arr = [...state.modals];
      arr[0].modalEditActive = false;
      return { ...state, modals: [...arr] };
    }

    case 'EDIT_USER': {
      const arrUsers = [...state.users];
      const arrModals = [...state.modals];
      arrModals[0].modalEditActive = false;
      const index = arrUsers.findIndex((user) => user.id === action.payload.id)
      arrUsers.splice(index, 1);
      arrUsers.unshift(action.payload);
      return { ...state, users: [...arrUsers], modals: [...arrModals] };
    }

    case 'ADD_NEW_USER': {
      const arr = [...state.users];
      arr.unshift(action.payload);
      return { ...state, users: [...arr] };
    }

    case 'OPEN_DELETE_MODAL': {
      const arrModals = [...state.modals];
      arrModals[1].modalDeleteActive = true;
      arrModals[1].id = action.payload;
      return { ...state, modals: [...arrModals] };
    }

    case 'CLOSE_DELETE_MODAL': {
      const arrModals = [...state.modals];
      arrModals[1].modalDeleteActive = false;
      arrModals[1].id = -1;
      return { ...state, modals: [...arrModals] };
    }

    case 'DELETE_USER': {
      const arrModals = [...state.modals];
      const arrUsers = [...state.users];
      arrModals[1].modalDeleteActive = false;
      const index = arrUsers.findIndex((user) => user.id === action.payload)
      arrModals[1].id = -1;
      arrUsers.splice(index, 1);
      return { ...state, users: [...arrUsers], modals: [...arrModals] };
    }

    default:
      return state;
  }
}

export default reducer;
