import React, {useState} from "react";


function State(){

    const [num, setNum] = useState(20);

    function troca(){
        setNum(100);
    }

    return(
        <>
            <p>valor do State num: {num}</p>
            <button onClick={troca}>Executar</button>
        </>
    );
}

export default State;