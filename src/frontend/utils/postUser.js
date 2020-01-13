import $ from "jquery";

export default function postUser(user) {
  return async function(dispatch) {
    let authentication;
    console.log("IN POST USER:", user.username, user.password);
    await $.ajax({
      url: "http://localhost:3333/api/authentication",
      contentType: "application/json",
      method: "POST",
      data: JSON.stringify({
        username: user.username,
        password: user.password
      }),
      success: function(result) {
        authentication = result;
      }
    });
    console.log("POST USER AUTH:", authentication);
    dispatch({ type: "AUTH_USER", auth: authentication });
  };
}
