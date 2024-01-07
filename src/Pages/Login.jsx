import React, { useEffect, useState } from "react";
import { userLogin } from "../hook/Auth/useLogin";
import axios from "axios";
import { useApi } from "../hook/utils/useApi";
import zapato from "../assets/img/zapato.png";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ShoesAnimated from "../components/ShoesAnimated";

const Login = () => {
  const { handleLogin, onChangeInfo, email, password } = userLogin();
  const { errorApi } = useApi();
  const [showPassword, setShowPassword] = React.useState(false);
  const [btn, setBtn] = useState(false);
  const { scrollYProgress } = useScroll();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <>
      <Stack component="section">
        <Stack
          component="section"
          alignItems="center"
          padding={{ sm: "3pc", xs: "1pc" }}
          direction={{ sm: "row", xs: "column" }}
          color="#fff"
        >
          <Box
            component="div"
            width={{ sm: "50%", xs: "100%" }}
            alignItems="center"
            justifyContent="center"
            display="flex"
            flexDirection="column"
          >
            <Typography
              fontSize={{
                sm: "5pc",
                xs: "4pc"
              }}
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
            width={{ sm: "50%", xs: "100%" }}
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            <motion.img
              initial={{
                opacity: 0,
                left: -100,
                top: -100,
                transform: "rotate(-35deg)",
              }}
              animate={{
                opacity: 1,
                left: 1,
                top: 1,
                transform: "rotate(-30deg)",
              }}
              transition={{ duration: 1 }}
              src={zapato}
              alt="zapato"
              className="zapato"
            />
          </Box>
        </Stack>
        <Box
          sx={{
            backgroundImage:
              "url('https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1263,c_limit/d0177eb4-ba54-4526-9d1d-a4b85f76c0a9/nike-just-do-it.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          height={{ sm: "27pc", xs: "8pc" }}
          padding="0.6pc"
          display="flex"
          alignItems="flex-end"
          justifyContent="center"
        >
          <motion.div
            style={{
              y: translate,
            }}
          >
            <i>
              <Typography
                variant="h2"
                fontSize={{ sm: "7pc", xs: "2.2pc" }}
                fontWeight={900}
                color="white"
                sx={{
                  fontFamily: "Barlow",
                }}
              >
                REGALA INSPIRACION
              </Typography>
            </i>
          </motion.div>
        </Box>
        <Stack
          component="section"
          direction={{ sm: "row", xs: "column" }}
          padding={{ sm: 0, xs: "1pc" }}
          height="80vh"
        >
          <Box
            width={{ sm: "50%", xs: "100%" }}
            flexDirection="column"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={3}
          >
            <TextField
              color="light"
              variant="outlined"
              placeholder="Email"
              name="email"
              onChange={({ target: { value, name } }) =>
                onChangeInfo(value, name)
              }
              value={email}
              sx={{
                color: "#fff",
                width: {
                  sm: "70%",
                  xs: "100%"
                },
                border: "1px solid white",
                borderRadius: 1,
                "& .MuiInputBase-input": {
                  color: "#fff",
                },
                "& .MuiFormLabel-root": {
                  color: "#fff",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#fff",
                  },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#fff",
                  },
              }}
            />
            <OutlinedInput
              color="light"
              placeholder="Contraseña"
              name="password"
              sx={{
                color: "#fff",
                width: {
                  sm: "70%",
                  xs: "100%"
                },
                border: "1px solid white",
              }}
              onChange={({ target: { value, name } }) =>
                onChangeInfo(value, name)
              }
              value={password}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {!showPassword ? (
                      <VisibilityOff color="light" />
                    ) : (
                      <Visibility color="light" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button
              sx={{
                width: {
                  sm: "70%",
                  xs: "100%"
                },
              }}
              color="light"
              onMouseOver={() => setBtn(true)}
              onMouseOut={() => setBtn(false)}
              variant={btn ? "contained" : "outlined"}
              onClick={() => handleLogin()}
            >
              iniciar sesion
            </Button>
          </Box>
          <Box
            width={{ sm: "50%", xs: "100%" }}
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
          >
            <ShoesAnimated />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
