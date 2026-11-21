
import { useState } from "react";



const TrafficLight = () =>{
const [ color, setColor ] = useState("red");

return ( 
     <div className="contenedor-principal">
        <div className="soport-semaf"></div>
        <div className="carcasa">
            <div className={`luz luz-roja ${color === "red" ? "encendida" : ""}`} onClick={()=>{setColor("red")}}></div>
            <div className={`luz luz-amarilla ${color === "yellow" ? "encendida" : ""}`} onClick={()=>{setColor("yellow")}}></div>
            <div className={`luz luz-verde ${color === "green" ? "encendida" : ""}`} onClick={()=>{setColor("green")}}></div>
        </div>
     </div>

)


}

export default TrafficLight;
