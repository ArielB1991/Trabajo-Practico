import React from "react";

function Reloj(props){
 const {hora, minutos}= props;
    
    return(
    <div>
        <h2>Reloj estatico</h2>
        <div>
            <span>{hora < 10? '0'+ hora : hora}</span> :
            <span>{minutos < 10? '0'+ minutos : minutos}</span>
        </div>
    </div>
    )
}

export default Reloj;