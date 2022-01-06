const setUser = (user) => ({
  type: "SET_USER",
  payload: user
});

const removeUser = () => ({
  type: "REMOVE_USER",
})

export const signup = (username, password) => async (dispatch) => {
  try {
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    const data = await response.json();

    if (data.error) {
      return data;
    };

    dispatch(setUser(data))
    return {};
  } catch (error) {
    console.log(error);
  };
};

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    const data = await response.json();

    if (data.error) {
      return data;
    };
    console.log(data)
    dispatch(setUser(data))
    return {};
  } catch (error) {
    console.log(error);
  };
};

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/me', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  if (data.error) {
    return;
  }

  dispatch(setUser(data))
}

export const logout = () => async (dispatch) => {
  fetch("/logout", {method: 'DELETE'})
  dispatch(removeUser());
};
