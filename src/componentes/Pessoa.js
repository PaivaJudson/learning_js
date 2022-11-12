import {React, useState} from "react";
var i=1;
function Pessoa(){

    const [str, setStr]= useState("Romeno");
     
    function falar(str2){
        setStr(str2+" "+i);
        i++;
    }
    function alteracao(e){
        console.log(e.target.value);
    }
    return(
        <>
           <h2>{str}</h2>
           <input onChange={alteracao} type="text"/>
            <button onClick={()=>falar("Malila falando")}>falar</button>
        </>

    )
}

export default Pessoa;