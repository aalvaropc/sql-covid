import React from 'react'
import CovidImg from '../../assets/coronavirus-covid-19.png';
import './Covid.css'
const Covid = () => {
  return (
    <>
      <img
        className="h-40 rotating-image"
        src={CovidImg}
        alt="Covid"
      />
    </>
  )
}

export default Covid