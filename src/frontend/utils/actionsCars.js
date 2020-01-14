import $ from "jquery";

export function addCar(car) {
  return async function(dispatch) {
    let newCar = {};
    $.ajax({
      url: "http://localhost:3333/cars/add",
      contentType: "application/json",
      method: "POST",
      data: JSON.stringify(car),
      success: function(result) {
        newCar = result;
      }
    });
    dispatch({ type: "ADD_CAR", car: newCar });
  };
}

export function changeCar(car){
    
}
