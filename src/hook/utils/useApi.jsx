import { useState } from "react";
import api_Shoes from "../../api/Shoes";

export const useApi = () => {
  const [loadingApi, setLoading] = useState(false);
  const [loadedApi, setLoadedApi] = useState([]);
  const [errorApi, setErrorApi] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  function setError(error) {
    setErrorApi(error);
  }

  const loadApi = async ({
    type = "GET",
    endpoint,
    token,
    body,
    file,
    instance = "api_Shoes",
  }) => {
    try {
      setLoading(true);
      const headers = {};
      if (token) {
        const userToken = await getLocal();
        if (!userToken) {
          setError("No has iniciado sesión.");
          console.error("Token no encontrado.");
          return;
        }
        headers.authorization = `Bearer ${userToken}`;
      }

      if (file) {
        headers["Content-Type"] = "multipart/form-data";
      }

      let response;
      switch (instance) {
        case "api_Shoes":
          response = await api_Shoes({
            method: type,
            url: endpoint,
            headers: headers,
            data: body,
          });
          break;
        // Puedes agregar más casos aquí para manejar diferentes instancias de API
      }
      console.log(response)
      setLoadedApi((value) => [...value, `${type}__${endpoint}`]);
      return response;
    } catch (error) {
      console.error("Error en la carga de la API:", error.request.response);
      setError(JSON.parse(error.request.response).message);
    } finally {
      setLoading(false);
    }
  };

  const getLocal = async () => {
    try {
      const data = await localStorage.getItem("user");
      if (data === null) {
        return "";
        setIsLoggedIn(false)
      }
      console.log(JSON.parse(data));
      setIsLoggedIn(true)
      return JSON.parse(data).token;
    } catch (error) {
      console.error("Error al obtener datos locales:", error);
      throw new Error("Error al obtener datos locales");
    }
  };
  
  const removeLocal = async () => {
    try {
      await localStorage.clear();
    } catch (error) {
      console.error("Error al limpiar el almacenamiento local:", error);
      throw new Error("Error al limpiar el almacenamiento local");
    }
  };  
  console.log(errorApi)
  return {
    loadApi,
    loadingApi,
    errorApi,
    loadedApi,
    getLocal,
    isLoggedIn
  };
};
