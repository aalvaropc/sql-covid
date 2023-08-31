import datos from "../data/data";
import Respuesta from "../components/Respuesta/Respuesta";

const Solucion = () => {
  return (
    <>
      {datos.map(data => (
        <div key={data.askId}>
          <Respuesta 
            askId={data.askId}
            title={data.title}
            sql={data.respuesta}
          />
        </div>
        ))
        }

    </>
  )
}

export default Solucion