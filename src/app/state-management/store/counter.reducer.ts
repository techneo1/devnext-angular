import { INCREMENT, DECREMENT, ADD_USER } from '../actions/counter.actions';

const INITIAL_STATE = { value: 0, users: [1,2,3] };

export function CounterReducer(state = INITIAL_STATE, action: any): any {

  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { value: state.value + 1 }  )

    case DECREMENT:
      return { value: state.value - 1 };

    case ADD_USER:
      const users = [...state.users, action.payload]
      return Object.assign({}, state, { users } )

    default:
      return state;
  }
}

