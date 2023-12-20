/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useContext } from "react";
import useForm from "../utils/useForm";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const userLogin = () => {
  const navigate = useNavigate()
  const [loadingApi, setLoadingApi] = useState(false);
  const { signIn } = useContext(AuthContext);

  const { email, password, onChangeInfo, form } = useForm({
    email: "keyerdelahozsteam@gmail.com",
    password: "1234567890",
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
          navigate('/')
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
    onChangeInfo,
    loadingApi,
    handleLogin,
    ...form,
  };
};
