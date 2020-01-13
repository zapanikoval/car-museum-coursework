import $ from "jquery";

export default function fetchCars() {
  return async function(dispatch) {
    let fetchedCars;
    await $.ajax({
      url: "http://localhost:3333/api/cars",
      type: "GET",
      contentType: "application/json",
      success: function(cars) {
        fetchedCars = cars;
      }
    });
    console.log("FETCHING CARS:", fetchedCars);
    dispatch({ type: "INITIAL_CARS", cars: fetchedCars });
  };
}
