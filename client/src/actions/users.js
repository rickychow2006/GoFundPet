export const setAllUsers = users => {
  return {
    type: "SET_ALL_USERS", 
    users 
  };
};

export const clearAllUsers = () => {
  return {
    type: "CLEAR_ALL_USERS"
  };
};

export const getAllUsers = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/users", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(users => {
        if (users.error) {
          alert(users.error)
        } else {
          dispatch(setAllUsers(users.data)); 
        }
      })
      .catch(console.log);
  };
};
