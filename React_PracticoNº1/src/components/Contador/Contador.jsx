import React, { useState, useEffect } from "react";

const Contador = () => {
  const [count, setCount] = useState(1);

  useEffect(() =>{
    document.title = `Clickeaste ${count} veces`;
    console.log('hola')
  },[])


  const handleClick = (isClick) => {
    if (isClick === "mas") {
      setCount(count + 1);
    } else if (isClick === "menos") {
      setCount(count - 1);
    }
  };
  



  const estilos = {
    fontSize: '2.5rem',
  }
  const styleButton ={
    height: ' 50px',
    width: '70px',
    fontSize: '40px'
  }
  return (
    <>
      <h2 style={estilos}>Contador</h2>
      <h1>{count}</h1>
      <button onClick={() => handleClick("mas")} style={styleButton}>+</button>
      <button onClick={() => handleClick("menos")} style={styleButton}>-</button>
    </>
  );
};

export default Contador;
