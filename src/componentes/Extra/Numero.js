import React from "react";

export default function Numero(props){
    return (
        <p>
            <p>Valor do state num em Número: {props.num}</p>
            <button onClick={()=>{props.setNum(props.num+10)}}>Executar</button>
        </p>
    );
}
