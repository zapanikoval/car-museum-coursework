export default function reducer(state = { auth: undefined }, action) {
  switch (action.type) {
    case "INITIAL_CARS": {
      return { ...state, cars: action.cars };
    }
    case "ADD_CAR": {
      return { ...state, cars: [...state.cars, action.car] };
    }
    case "CHANGE_CAR": {
      const newCars = state.cars.map(car => {
        if (car._id === action.car._id) {
          return action.car;
        }
      });
      return { ...state, cars: newCars };
    }
    case "DELETE_CAR": {
      const indexDeleteCar = state.cars.findIndex(car => {
        if (car._id === action.id) return car;
      });
      const newCars = state.cars.slice(indexDeleteCar, 1);
      return { ...state, cars: newCars };
    }
    case "AUTH_USER": {
      return { ...state, auth: action.auth };
    }
    case "LOGOUT_USER": {
      return { ...state, auth: !state.auth };
    }
    default:
      return state;
  }
}
