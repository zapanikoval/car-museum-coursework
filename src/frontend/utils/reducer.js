
export default function reducer(state = {}, action) {
  switch (action.type) {
    case "INITIAL_CARS": {
      return { ...state, cars: action.cars };
    }
    case "AUTH_USER": {
      return { ...state, auth: action.auth };
    }
    default:
      return state;
  }
}
