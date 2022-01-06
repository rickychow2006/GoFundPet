const initialState = { user: null };

export default function session(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return { user: action.payload }
    case "REMOVE_USER":
      return { user: null }
    default:
      return state;
  }
} 