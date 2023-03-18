import React, { useContext } from 'react'
import Context from '../context/Context'

const Resumen = () => {
    const {misDatos} = useContext(Context);
    const campos = ["Imagen","Zona","$ por dia","Nombre", "Habitaciones", "Personas","Dias"];
    return (
    <>
    <div className="resumen">
        <h1>Resumen:</h1>
        {campos.map((campo,indice)=>
        misDatos[indice] && 
        <div className="informacion" key={indice}>
        {indice === 0
            ?<img src={misDatos[indice]} alt="Lugar de destino"/>
            :<div className="linea">
                <div className="col1">
                    {campo}
                </div>
                <div  className="col2">
                    {misDatos[indice]}
                </div>
             </div> 
        }
        </div>
        )}
        {misDatos[3] && 
        <div className="total">
            Total:${Number(misDatos[2]) * Number(misDatos[4] || 1) * Number(misDatos[5] || 1) * Number(misDatos[6] || 1)}
        </div>}
        </div>
    </>
  )
}

export default Resumen