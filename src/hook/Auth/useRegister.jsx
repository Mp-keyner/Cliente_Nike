/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import useForm from "../utils/useForm";
import {useApi}  from "../utils/useApi";

export const userRegister = () => {
  const { loadApi, errorApi } = useApi(); //use Effect error, el cargando mandalo a la vista
  const [loadingApi, setLoadingApi] = useState(false);
  const { email, password, onChangeInfo, form, password2, nombre,} = useForm({
    email: "andrescampu3@gmail.com",
    password: "1234567890",
    password2: "1234567890",
    nombre: "Andres Campuzano",
  });
 const handleRegister = async () => {
    if (email.trim() === "") {
      // Correo vacío
      alert("El campo de correo electronico está vacío",)
    }  else if (nombre.trim() === "") {
      alert("El campo de nombre está vacío",)
    } else if (!isValidusername(email)) {
      alert("Ingresa un correo valido",)
    } else if (password.trim() === "") {
      // Contraseña vacía
      alert("El campo de contraseña está vacío",)
    } else if (password2.trim() === "") {
      // Correo no válido
      alert("El campo de confirmar contraseña está vacío",)
    } else if (password.trim() !== password2.trim()) {
      // Contraseña vacía
      alert("Las contraseñas no son iguales",)
    } else {
      try {
        setLoadingApi(true);
        const info = await loadApi({
          endpoint: "usuarios/registro",
          type: "POST",
          body: form,
          instance: "api_Shoes",
        });
        if (info && info.data) {
          alert(info.data)
          setLoadingApi(false);
        }
       } catch (error) {
        setLoadingApi(false);
        console.log("error", error);
       }
    }
  };

  useEffect(() => {
    if (errorApi.length > 0) {
      alert(errorApi)
    }
  }, [errorApi]);

  const isValidusername = (value) => {
    const usernamePattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return usernamePattern.test(value);
  };
  return {
    onChangeInfo,
    loadingApi,
    handleRegister,
    ...form,
    userRegister,
  };
};
