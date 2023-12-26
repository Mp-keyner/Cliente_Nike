import React, { useEffect } from "react";
import { userLogin } from "../hook/Auth/useLogin";
import axios from "axios";
import { useApi } from "../hook/utils/useApi";
import zapato from "../assets/img/zapato.png";
import { Box, Stack, TextField } from "@mui/material";

const Login = () => {
  const { handleLogin, onChangeInfo, email, password } = userLogin();
  const { errorApi } = useApi();
  return (
    <>
      <Stack component="section">
        <Stack
          component="section"
          display="flex"
          alignItems="center"
          padding="3pc"
          flexDirection="row"
          color="#fff"
        >
          <Box
            component="div"
            width="50%"
            alignItems="center"
            justifyContent="center"
            display="flex"
            flexDirection="column"
          >
            <h1 className="Title">
              <i>Nike Air Max Alpha Trainer 5</i>
            </h1>
            <p>
              Dalo todo en tu última repetición con potencia y acaba con un
              rugido que resuene en todo el gimnasio con las Nike Air Max Alpha
              Trainer 5. La amortiguación Max Air ofrece una estabilidad cómoda
              para el levantamiento de pesas ligera o pesadas. La amplia base
              plana ofrece una mayor estabilidad y agarre para todo tipo de
              entrenamientos exigentes sin sacrificar el estilo mientras cambias
              de serie o estación.
            </p>
          </Box>
          <Box
            component="div"
            width="50%"
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            <img src={zapato} alt="zapato" className="zapato" />
          </Box>
        </Stack>
        <Box sx={{
            backgroundImage: "url('https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1263,c_limit/d0177eb4-ba54-4526-9d1d-a4b85f76c0a9/nike-just-do-it.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }} height='27pc' padding='0.6pc' display='flex' alignItems='flex-end' justifyContent='center'>
          <i>
            <h2 className="Banerh2">REGALA INSPIRACION</h2>
          </i>
        </Box>
        <Stack component="section">
          <div className="sectionLoginLeft">
            <div>
              <h1
                className="Title"
                style={{
                  fontSize: "2pc",
                }}
              >
                <i>INICIA SESION</i>
              </h1>
              <input
                type="text"
                name="email"
                onChange={({ target: { value, name } }) =>
                  onChangeInfo(value, name)
                }
                value={email}
              />
              <input type="text" />
              <TextField
                label="Outlined"
                variant="outlined"
                name="password"
                onChange={({ target: { value, name } }) =>
                  onChangeInfo(value, name)
                }
                value={password}
              />
              <button onClick={() => handleLogin()}>Login</button>
            </div>
          </div>
          <div className="sectionLoginRigth"></div>
          </Stack>
      </Stack>
    </>
  );
};

export default Login;
