export default function reducer(state = {}, action) {
  switch (action.type) {
    case "INITIAL_CARS": {
      return { ...state, cars: action.cars };
    }
    case "ADD_CAR": {
      const newCars = state.cars.concat([action.car]);
      return { ...state, cars: newCars };
    }
    case "UPDATE_CAR": {
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
      console.log("DELETE_CAR ON REDUCER. INDEX: ", indexDeleteCar);
      const newCars = state.cars.slice(indexDeleteCar, 1);
      return { ...state, cars: newCars };
    }
    case "AUTH_USER": {
      return { ...state, auth: action.auth };
    }
    case "LOGOUT_USER": {
      return { ...state, auth: undefined };
    }
    default:
      return state;
  }
}
