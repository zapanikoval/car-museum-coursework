import $ from "jquery";

export default function postUser(user) {
  return async function(dispatch) {
    let authentication;
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
    dispatch({ type: "AUTH_USER", auth: authentication });
  };
}
