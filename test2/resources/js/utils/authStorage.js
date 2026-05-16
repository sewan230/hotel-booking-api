const USER_KEY = "user";
const TOKEN_KEY = "token";

export const saveAuth = (
  user,
  token,
  rememberMe = true
) => {

  const storage =
    rememberMe
      ? localStorage
      : sessionStorage;

  storage.setItem(
    USER_KEY,
    JSON.stringify(user)
  );

  storage.setItem(
    TOKEN_KEY,
    token
  );
};

export const getAuth = () => {

  const user =
    localStorage.getItem(USER_KEY) ||
    sessionStorage.getItem(USER_KEY);

  const token =
    localStorage.getItem(TOKEN_KEY) ||
    sessionStorage.getItem(TOKEN_KEY);

  // hydration safety
  if (!user || !token) {

    clearAuth();

    return {
      user: null,
      token: null,
    };
  }

  return {
    user: JSON.parse(user),
    token,
  };
};

export const clearAuth = () => {

  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(TOKEN_KEY);

  sessionStorage.removeItem(USER_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
};