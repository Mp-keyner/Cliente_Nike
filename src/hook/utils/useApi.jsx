import { useState } from "react";
import api_Shoes from "../../api/Shoes";

const getLocal = async () => {
 try {
  return await Promise.resolve(localStorage.getItem("user")).then((data) => {
    if (data === null) {
      return "";
    }
    return JSON.parse(data).token;
  });
 } catch (e) {
  console.log(e)
 }
};

const removeLocal = async () => {
 try {
  return await localStorage.clear();
 } catch (e) {
  console.log(e);
 }
};

export const useApi = () => {
 const [loadingApi, setLoading] = useState(false);
 const [loadedApi, setLoadedApi] = useState([]);
 const [errorApi, setErrorApi] = useState("");

 const loggedApi = Boolean(getLocal());

 function setError(error) {
  setErrorApi(error);
 }

 const loadApi = async ({
  type = "GET",
  endpoint,
  token,
  body,
  file,
  instance = 'api_Shoes',
 }) => {
  console.log(body, 'desde loading')
  try {
    setLoading(true);
    const headers = {};
    if (token) {
      const token2 = await getLocal();
      if (token2.length == 0) {
        setError("No has iniciado sesión.");
        console.log(endpoint);
        console.error("Token no encontrado.");
        return;
      }
      headers.authorization = `Bearer ${token2}`;
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
    }

    setLoading(false);
    setLoadedApi((value) => [...value, `${type}__${endpoint}`]);
    return response;
  } catch (error) {
    console.log("error", error);
    setLoading(false);
  }
 };

 return {
  loadApi,
  loadingApi,
  errorApi,
  loggedApi,
  loadedApi,
 };
};
