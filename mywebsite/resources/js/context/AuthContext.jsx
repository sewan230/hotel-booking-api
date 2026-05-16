import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, saveAuth, clearAuth } from "../utils/authStorage";

const AuthContext = createContext();

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const auth = getAuth() || {};

    if (auth.user && auth.token) {
      setUser(auth.user);
      setToken(auth.token);
    }

    setIsHydrated(true);
  }, []);

  const login = (userData, userToken,rememberMe = false) => {
    saveAuth(userData, userToken, rememberMe);

    setUser(userData);
    setToken(userToken);
  };

  const logout = () => {
    clearAuth();
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isHydrated,
        isAuthenticated: !!(user && token),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);