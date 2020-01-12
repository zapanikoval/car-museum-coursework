import fetchCars from "./fetchCars";

export default function reducer(state, action) {
  switch (action.type) {
    case "INITIAL_CARS": {
      return fetchCars();
    }
    default:
      return state;
  }
}