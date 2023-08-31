import React from 'react'
import {getDatos} from '../api/covid.api'
import { useEffect, useState } from 'react'

const Documentacion = () => {
  const [condicion, setCondicion] = useState([])
  useEffect(() => {
    async function loadData(){
      const res = await getDatos();
      setCondicion(res.data)
    }
    loadData()
  }, [])
  
  return (
    <>
      {condicion.map(c=>(
        <div key={c.id}>{c.NombreClasificacion}</div>
      ))}
    </>
  )
}

export default Documentacion