import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}


const Pregunta = ({askId, title, content}) => {
    const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div>
      <Accordion open={open === askId} icon={<Icon id={askId} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(askId)}>{title}</AccordionHeader>
        <AccordionBody>
          <div className='text-justify'>
          {content}
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  )
}

export default Pregunta
