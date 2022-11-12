import React from "react";
import Button from "./Button";


export default function Evento(){

    function meuEvento(){
        console.log(`Percebendo primeiro evento!`);
    }

    function segundoEvento(){
        console.log('Ativando segundo evento!');
    }

    return(
        <div>
            <p>Clique para disparar o evento</p>
            <Button evento={meuEvento} texto="Primeiro Evento"/>
            <Button evento={segundoEvento} texto="Segundo Evento"/>
        </div>
    );
}

