import React, { useEffect } from "react";
import { userLogin } from "../hook/Auth/useLogin";
import axios from "axios";
import { useApi } from "../hook/utils/useApi";
import zapato from "../assets/img/zapato.png";

const Login = () => {
  const { handleLogin, onChangeInfo, email, password } = userLogin();
  const { errorApi } = useApi();
  return (
    <>
      <section className="SectionZapato">
        <div className="left">
          {/* <h1 className='Title'><i>INICIAR SESION</i></h1> */}
          <h1 className="Title">
            <i>Nike Air Max Alpha Trainer 5</i>
          </h1>
          <p>
            Dalo todo en tu última repetición con potencia y acaba con un rugido
            que resuene en todo el gimnasio con las Nike Air Max Alpha Trainer
            5. La amortiguación Max Air ofrece una estabilidad cómoda para el
            levantamiento de pesas ligera o pesadas. La amplia base plana ofrece
            una mayor estabilidad y agarre para todo tipo de entrenamientos
            exigentes sin sacrificar el estilo mientras cambias de serie o
            estación.
          </p>
        </div>
        <div className="rigth">
          <img src={zapato} alt="zapato" className="zapato" />
        </div>
      </section>
      <div className="Baner">
        <i>
          <h2>REGALA INSPIRACION</h2>
        </i>
      </div>
      <section className="sectionLogin">
        <input
          type="text"
          name="email"
          onChange={({ target: { value, name } }) => onChangeInfo(value, name)}
          value={email}
        />
        <input
          type="text"
          name="password"
          onChange={({ target: { value, name } }) => onChangeInfo(value, name)}
          value={password}
        />
        <button onClick={() => handleLogin()}>Login</button>
      </section>
    </>
  );
};

export default Login;
