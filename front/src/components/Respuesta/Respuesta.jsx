import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import SqlCode from '../SqlCode/SqlCode'
export default function Respuesta({askId, title, sql}) {
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);

  return (
    <>
      <Accordion open={openAcc1}>
        <AccordionHeader onClick={handleOpenAcc1}>{title}</AccordionHeader>
        <AccordionBody>
          {sql}
          {/* <SqlCode 
            sql
          /> */}
        </AccordionBody>
      </Accordion>
    </>
  );
}