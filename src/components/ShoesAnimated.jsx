import { Box, Stack } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const ShoesAnimated = () => {
  const Taps = [10, 30, 50];
  return (
    <>
      <Stack
        direction="row"
        width='100%'
        height='100%'
        gap={5}
      >
        <div
          className="FlotaAnimate"
          style={{
            top: "50%",
            left: "40%",
            borderRadius: "50%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, left: -100 }}
            animate={{ opacity: 1, left: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragSnapToOrigin="true"
            style={{
                background: 'white',
                width: 150,
                height: 150,
                borderRadius: "50%",
                boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.753)',
                backgroundPosition: 'center',
                backgroundSize: '7pc',
                backgroundRepeat: 'no-repeat',  
                background: 'url("https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png") white',
              }}
          ></motion.div>
        </div>
        <div
          className="FlotaAnimate"
          style={{
            top: "15%",
            left: "20%",
            borderRadius: "50%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, left: -100 }}
            animate={{ opacity: 1, left: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragSnapToOrigin="true"
            style={{
                background: 'white',
                width: 150,
                height: 150,
                borderRadius: "50%",
                boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.753)',
                backgroundPosition: 'center',
                backgroundSize: '7pc',
                backgroundRepeat: 'no-repeat',  
                background: 'url("https://upload.wikimedia.org/wikipedia/commons/9/94/Old_Nike_logo.jpg") white',
              }}
          ></motion.div>
        </div>
        <div
          className="FlotaAnimate"
          style={{
            top: "3pc",
            left: "50%",
            borderRadius: "50%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, left: -100 }}
            animate={{ opacity: 1, left: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragSnapToOrigin="true"
            style={{
                background: 'white',
                width: 150,
                height: 150,
                borderRadius: "50%",
                boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.753)',
                backgroundPosition: 'center',
                backgroundSize: '10pc',
                backgroundRepeat: 'no-repeat',  
                background: 'url("https://1000marcas.net/wp-content/uploads/2020/01/Converse-Logo-2007.png") white',
              }}
          ></motion.div>
        </div>
        {/* {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="FlotaAnimate"
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              top: i * 10,
              background: "red",
            }}
          ></div>
        ))} */}
        {/* {Taps.map((item) => (
          <div
            key={item}
            className="FlotaAnimate"
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              top: item,
              background: "red",
              left: item * 10,
              filter: 'blur(2px)',
              zIndex: -1,
              boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.753)' 
            }}
          ></div>
        ))}
        {Taps.map((item) => (
          <div
            key={item}
            className="FlotaAnimate"
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              bottom: item * 2,
              background: "red",
              left: item * 10,
              filter: 'blur(2px)',
              zIndex: -1,
              boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.753)' 
            }}
          ></div>
        ))} */}
      </Stack>
    </>
  );
};

export default ShoesAnimated;
