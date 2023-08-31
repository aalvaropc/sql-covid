import React from "react";
import { getDatos } from "../api/covid.api";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { Card, Typography } from "@material-tailwind/react";
import {
  SEXO_DATA,
  CLASIFICACIONES_DATA,
  PACIENTES_DATA,
  TIPOS_PACIENTE_DATA,
  DATOS_SALUD_DATA,
} from "../data/documentacion.js";
import Tabla from "../components/Tabla/Tabla";

const TABLAS = [
  {
    id: "1",
    title: "Tabla: Sexo",
    content: SEXO_DATA,
  },
  {
    id: "2",
    title: "Tabla: Clasificaciones",
    content: CLASIFICACIONES_DATA,
  },
  {
    id: "3",
    title: "Tabla: Pacientes",
    content: PACIENTES_DATA,
  },
  {
    id: "4",
    title: "Tabla: TiposPaciente",
    content: TIPOS_PACIENTE_DATA,
  },
  {
    id: "5",
    title: "Tabla: DatosSalud",
    content: DATOS_SALUD_DATA,
  },
];

const Documentacion = () => {
  const [condicion, setCondicion] = useState([]);
  useEffect(() => {
    async function loadData() {
      const res = await getDatos();
      setCondicion(res.data);
    }
    loadData();
  }, []);

  return (
    <>
      <a
        href="https://www.kaggle.com/datasets/meirnizri/covid19-dataset"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="flex items-center gap-3 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
            />
          </svg>
          FUENTE
        </Button>
      </a>
      <Typography variant="h3">CONTEXTO</Typography>
      <Typography variant="paragraph" className="text-justify">
        La COVID-19 es una enfermedad infecciosa causada por un nuevo
        coronavirus. La mayoría se recupera con síntomas leves, pero los mayores
        y quienes tienen afecciones médicas previas corren más riesgo. Durante
        la pandemia, la falta de recursos médicos y distribución eficiente ha
        sido un reto. Se busca usar un modelo de aprendizaje automático para
        predecir el riesgo de pacientes basado en síntomas y historial, ayudando
        a gestionar recursos y salvar vidas.
      </Typography>

      <Typography variant="h3">CONTENIDO</Typography>

      <Typography variant="paragraph" className="text-justify">
        El conjunto de datos fue proporcionado por el gobierno mexicano{" "}
        <a
          className="text-cyan-600"
          href="https://datos.gob.mx/busca/dataset/informacion-referente-a-casos-covid-19-en-mexico"
          target="_blank"
          rel="noopener noreferrer"
        >
          (enlace)
        </a>
        . Este conjunto de datos contiene una enorme cantidad de información
        anónima relacionada con el paciente, incluidas las condiciones previas.
        El conjunto de datos sin procesar consta de 21 características únicas y
        1.048.576 pacientes únicos. En las funciones booleanas, 1 significa "sí"
        y 2 significa "no". Valores como 97 y 99 son datos faltantes.
      </Typography>

      <br />
      {TABLAS.map((data) => (
        <div key={data.id}>
          <Tabla title={data.title} content={data.content} />
        </div>
      ))}
    </>
  );
};

export default Documentacion;
