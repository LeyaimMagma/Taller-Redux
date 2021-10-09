const initialState = {
  name: 'Leyaim',
  address: 'Colima',
  age: 25,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      return {
        ...state,
        name: action.payload,
      };
    }
    case 'ADD_ADDRESS': {
      return {
        ...state,
        address: action.payload,
      };
    }
    case 'ADD_AGE': {
      return {
        ...state,
        age: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
