import $ from "jquery";

function url(path) {
  return `http://localhost:3333/api/cars/${path}`;
}

export function addCar(car) {
  return async function(dispatch) {
    $.ajax({
      url: url("add"),
      contentType: "application/json",
      method: "POST",
      data: JSON.stringify(car),
      success: function(result) {
        console.log("ADD CAR IN ACTION", result);
        dispatch({ type: "ADD_CAR", car: result });
      }
    });
  };
}

export function updateCar(car) {
  return async function(dispatch) {
    $.ajax({
      url: url("update"),
      contentType: "application/json",
      method: "PUT",
      data: JSON.stringify(car),
      success: function(result) {
        dispatch({ type: "UPDATE_CAR", car: result });
      }
    });
  };
}

export function deleteCar(id) {
  return async function(dispatch) {
    $.ajax({
      url: url(`delete/${id}`),
      contentType: "application/json",
      method: "DELETE",
      success: function(result) {
        dispatch({ type: "DELETE_CAR", id: result._id });
      }
    });
  };
}
