import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Pregunta from "../components/Pregunta/Pregunta";
import datos from "../data/data.js"


const Preguntas = () => {
  return (
    <>
      <div className='m-14'>
        {datos.map(data => (
          <Pregunta 
            askId={data.askId}
            title={data.title}
            content={data.content}
          />
        ))}
      </div>
    </>
  )
}

export default Preguntas;