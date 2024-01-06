import React, { useEffect } from "react";
import { userLogin } from "../hook/Auth/useLogin";
import axios from "axios";
import { useApi } from "../hook/utils/useApi";
import zapato from "../assets/img/zapato.png";
import { Box, IconButton, InputAdornment, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const { handleLogin, onChangeInfo, email, password } = userLogin();
  const { errorApi } = useApi();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <Stack component="section">
        <Stack
          component="section"
          alignItems="center"
          padding="3pc"
          direction="row"
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
            <Typography
              fontSize="5pc"
              fontWeight={900}
              sx={{
                fontFamily: "Barlow",
              }}
              variant="h1"
            >
              <i>Nike Air Max Alpha Trainer 5</i>
            </Typography>
            <Typography>
              Dalo todo en tu última repetición con potencia y acaba con un
              rugido que resuene en todo el gimnasio con las Nike Air Max Alpha
              Trainer 5. La amortiguación Max Air ofrece una estabilidad cómoda
              para el levantamiento de pesas ligera o pesadas. La amplia base
              plana ofrece una mayor estabilidad y agarre para todo tipo de
              entrenamientos exigentes sin sacrificar el estilo mientras cambias
              de serie o estación.
            </Typography>
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
        <Box
          sx={{
            backgroundImage:
              "url('https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1263,c_limit/d0177eb4-ba54-4526-9d1d-a4b85f76c0a9/nike-just-do-it.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          height="27pc"
          padding="0.6pc"
          display="flex"
          alignItems="flex-end"
          justifyContent="center"
        >
          <i>
            <Typography
              variant="h2"
              fontSize="7pc"
              fontWeight={900}
              color='white'
              sx={{
                fontFamily: "Barlow",
              }}
            >
              REGALA INSPIRACION
            </Typography>
          </i>
        </Box>
        <Stack component="section" direction='row'>
          <Box width='50%' flexDirection='column' display='flex'>
          <TextField
                colo
                label="Outlined"
                variant="outlined"
                name="email"
                onChange={({ target: { value, name } }) =>
                  onChangeInfo(value, name)
                }
                value={email}
              />
              <OutlinedInput
            name="password"
            onChange={({ target: { value, name } }) =>
              onChangeInfo(value, name)
            }
            value={password}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {!showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          </Box>
          <Box>
            j
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
