import React from "react";
import Pregunta from "../components/Pregunta/Pregunta";
import datos from "../data/data.js"


const Preguntas = () => {
  return (
    <>
      <div className='m-14'>
        {datos.map(data => (
          <div key={data.askId}>
          <Pregunta 
            askId={data.askId}
            title={data.title}
            content={data.content}
          />
          </div>
        ))}
      </div>
    </>
  )
}

export default Preguntas;