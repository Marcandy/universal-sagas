export const SAVE = 'SAVE';

export default(state={}, action = {}) => {

  switch(action.type) {
    case SAVE:
    return Object.assing({}, state, action.data)

    default: return state;
  }
}
