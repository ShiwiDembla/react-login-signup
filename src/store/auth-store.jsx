import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));

 const saveToken = (token) => {
        localStorage.setItem("token", token);
      };
const isLoggedIn = !!token;
console.log("isLogged in value:"+ isLoggedIn)

      const getToken = () => {
        return token;
      };
      const removeToken = () => {
        setToken("");
        return localStorage.removeItem("token");
      }

  return (
    <AuthContext.Provider value={{saveToken, getToken,removeToken,isLoggedIn}}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
    const useAuthContext =  useContext(AuthContext);
    if(!useAuthContext){
        throw new Error('useAuth must be used within an AuthProvider')

    }
    return useAuthContext;
}
