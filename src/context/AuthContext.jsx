import { createContext, useReducer, useEffect, useState } from "react";
import { useApi } from "../hook/utils/useApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 const { loadApi, errorApi, loadingApi, getLocal } = useApi();
  
  useEffect(() => {
    if (errorApi !== ""){
        errorApi
    }
    getLocal()
  }, [errorApi]);

  const signIn = async (form) => {
    try {
      const data = await loadApi({
        endpoint: "usuarios/login/",
        type: "POST",
        body: form,
        instance: "api_Shoes",
      }).then(({ data }) => {
        console.log(data)
        localStorage.setItem("user", JSON.stringify(data));
      });
      return true;
    } catch (error) {
      // console.log(JSON.stringify(error, null, 3));
      console.log(error);
      return false;
    }
  };

  const logOut = async () => {
    console.log("logOut");
    await localStorage.removeItem("user");
    dispatch({ type: "logout" });
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        logOut,
        loadingApi: loadingApi.length > 0,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
