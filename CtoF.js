/* Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra e vice versa
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32     */

// transformDegree('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F');

    //Fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau nao identificado')
    }

    // fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9;
    let degreeSign = 'C'

    //Fluxo alternativo, C -> F
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(uptatedDegree) + degreeSign
}

try {
    transformDegree('50F')
    transformDegree('50Z')
} catch (error) {
    console.log(error.message)
}