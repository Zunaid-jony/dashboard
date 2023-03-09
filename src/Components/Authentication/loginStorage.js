export const setUserSession = (token, email, firstName, lastName, id) => {
    token && localStorage.setItem("token", token);
    email && localStorage.setItem("email", JSON.stringify(email));
    firstName && localStorage.setItem("firstName", JSON.stringify(firstName));
    lastName && localStorage.setItem("lastName", JSON.stringify(lastName));
    id && localStorage.setItem("id", JSON.stringify(id));
  };
  export const removeUserSession = () => {
    localStorage.clear();
  };
  export const userInfo = () => {
    const email = JSON.parse(localStorage?.getItem("email"));
    const firstName = JSON.parse(localStorage?.getItem("firstName"));
    const lastName = JSON.parse(localStorage?.getItem("lastName"));
    const id = JSON.parse(localStorage?.getItem("id"));
    return {
      email,
      firstName,
      lastName,
      id,
    };
  };
  
  export const getToken = () => {
    return localStorage.getItem("token") || null;
  };
  