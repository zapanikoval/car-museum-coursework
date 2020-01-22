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
        } else return car;
      });
      console.log("NEW CARS FROM REDUCER:", newCars);
      return { ...state, cars: newCars };
    }
    case "DELETE_CAR": {
      console.log(action.id);

      const newCars = state.cars.filter(car => car._id !== action.id);
      console.log(newCars);

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
