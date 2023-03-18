import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import {datos} from "../data";
import {datos2} from "../datos";

const Home = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const navegacion = useNavigate();
    const {etapas,setEtapas,misDatos} = useContext(Context);
    const obtener = (data) =>{
        console.table(data);
        const miZona = data.valor;
        const Datos = datos.find(d => d.lugar === miZona);
        misDatos.push(Datos.imagen);
        misDatos.push(Datos.lugar);
        misDatos.push(Datos.precio);
        setEtapas(etapas + 3);
        navegacion('/form') 
    }
  return (
    <div className="main-container">
        <form onSubmit={handleSubmit(obtener)}>
        <nav>
            <span className="center">{datos2[etapas].texto}</span> <br/>
            <center><input className="send center" type="submit" value="Enviar"/></center>
            {errors.valor 
                ?.type ===  "required" && <span className="aviso">Selecciona una de las opciones</span>}
        </nav>
        <center>
        <div className="formularioZonas ">
            {datos.map(data => 
                <div className="zonas" key={data.lugar}>
                    <div className="zona">
                        <input type="radio" name="listado" className="lugar" value={data.lugar} {...register('valor',{required:true})}/>
                        <span className="poblacion">{data.lugar}</span>
                        <span className="precio">$ {data.precio}</span>
                    </div>
                    <img src={data.imagen} alt={data.lugar}/>
                </div>
                )}
                </div>
                </center>
        </form>
    </div>
  )
}

export default Home