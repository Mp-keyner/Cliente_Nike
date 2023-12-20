/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useContext } from "react";
import useForm from "../utils/useForm";
import { AuthContext } from "../../context/AuthContext";

export const userLogin = () => {
  const [loadingApi, setLoadingApi] = useState(false);
  const { signIn } = useContext(AuthContext);

  const { email, password, onChangeInfo, form } = useForm({
    email: "",
    password: "",
  });


  const handleLogin = async () => {
    if (email.trim() === "") {
      // Correo vacío
      alert("El campo de usuario está vacío",)
    } else if (!isValidusername(email)) {
      // Correo no válido
     alert("Ingresa un correo valido",)
    } else if (password.trim() === "") {
      // Contraseña vacía
      alert("El campo de contraseña está vacío",)
    } else {
      // Inicio de sesión
      try {
        setLoadingApi(true);
        const data = await signIn(form);
        if (data) {
          setLoadingApi(false);
        }
      } catch (error) {
        console.log("error", JSON.stringify(error, null, 3));
      }
    }
  };

  const isValidusername = (value) => {
    const usernamePattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return usernamePattern.test(value);
  };
  return {
    userLogin,
    onChangeInfo,
    loadingApi,
    handleLogin,
    ...form,
  };
};
