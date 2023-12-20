import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectorRouter = ({ children }) => {
   const [userLogin, setUserLogin] = useState(false)

   useEffect(() => {
       if (localStorage.getItem('user')) {
           setUserLogin(true)
           console.log(localStorage.getItem('user'))
       }
   }, [])

   setTimeout(() => {
    console.log('se mando')
    if (userLogin) {
        console.log('si si')
        return (
            <>
                <h1>HEko</h1>
            </>
        )
    } else {
        return <Navigate to={"/Login"}/>
    }
   }, 500);
};

export default ProtectorRouter;
