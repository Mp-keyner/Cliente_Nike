import React, { useState } from 'react'
import { userLogin } from '../hook/Auth/useLogin';
import { userRegister } from '../hook/Auth/useRegister';
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
import { motion, useScroll, useTransform } from "framer-motion";
import zapato from "../assets/img/zapato.png";
import conver from "../assets/img/conver.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ShoesAnimated from "../components/ShoesAnimated";

const Registro = () => {
  const {
    onChangeInfo,
    handleRegister,
    email,
    password,
    password2,
    nombre
  } = userRegister();
  const [showPassword, setShowPassword] = React.useState(false);
  const [btn, setBtn] = useState(false);
  const { scrollYProgress } = useScroll();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <>
    <Stack component="section" className='register'>
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
            <i>Converse Chuck Taylor All Star Classic Unisex</i>
          </Typography>
          <Typography>
          El icónico Chuck Taylor All Star ha permitido a los fanáticos expresar su individualidad durante generaciones. Ahora puedes hacerlos realmente tuyos con una variedad de opciones de personalización, desde colores exclusivos, una identificación personal, estampados en la entresuela y letras bordadas en cada pie.
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
              transform: "rotate(35deg)",
            }}
            animate={{
              opacity: 1,
              left: 1,
              top: 1,
              transform: "rotate(30deg)",
            }}
            transition={{ duration: 1 }}
            src='https://www.converseenmedellin.com/images/converse-colombia/High_Tops_Tenis_Converse_Chuck_Taylor_Al-KBUET-0586.jpg'
            alt="zapato"
            className="zapato"
          />
        </Box>
      </Stack>
      <Box
        sx={{
          backgroundImage:
            `url(${conver})`,
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
        height="95vh"
        gap={3}
      >
        <Box
          width={{ sm: "50%", xs: "100%" }}
          flexDirection="column"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={3}
        >
          <i>
            <Typography
              variant="h2"
              fontSize="2.2pc"
              fontWeight={900}
              color="white"
              sx={{
                fontFamily: "Barlow",
              }}
            >
              INICIAR SESION
            </Typography>
          </i>
          <div>
      Registro
      <input type="text" name='email' onChange={({target: {value, name}}) => onChangeInfo(value, name)} value={email}/>
      <input type="text" name='nombre' onChange={({target: {value, name}}) => onChangeInfo(value, name)} value={nombre}/>
      <input type="text" name='password' onChange={({target: {value, name}}) => onChangeInfo(value, name)} value={password}/>
      <input type="text" name='password2' onChange={({target: {value, name}}) => onChangeInfo(value, name)} value={password2}/>
      <button onClick={() => handleRegister()}>Login</button>
    </div>
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
          display="flex"
          flexDirection='column'
          alignItems="center"
          justifyContent="center"
          position="relative"
          height='90%'
        >
           <i>
            <Typography
              variant="h2"
              fontSize="2.2pc"
              fontWeight={900}
              color="white"
              sx={{
                fontFamily: "Barlow",
              }}
            >
              MARCAS ALIADAS
            </Typography>
          </i>
          <ShoesAnimated />
        </Box>
      </Stack>
    </Stack>
  </>
    
  )
}

export default Registro
