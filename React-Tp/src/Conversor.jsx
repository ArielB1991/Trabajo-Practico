function Conversor({celsius}){
    
    let fare= celsius *2;

    return(
        <div>
            <h1>Conversor</h1>
            <p>Celsius: {celsius}</p>
            <p>Farenheit: {fare}</p>
        </div>
    )
}

export default Conversor;