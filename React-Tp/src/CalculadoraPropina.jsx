function CalculadoraPropina({total, porcentajePropina}){
    const calcularPropina= () => {
        return total *(porcentajePropina/ 100);
    };

    return(
        <div>
            <h2>Calculadora de Propinas</h2>
            <p>Total: {total}</p>
            <p>Porcentaje de propina: {porcentajePropina}</p>
            <p>Total de Propina: ${calcularPropina().toFixed(2)}</p>
        </div>
    )
}

export default CalculadoraPropina;