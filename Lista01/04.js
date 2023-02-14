//CAC = 3.1416 * R². Lembre-se que R² é o mesmo que (R * R). Área de um Círculo
function calcularAreaCirculo(raio) {
    const PI = 3.14159;
    let area = PI * (raio ** 2);
    return area;
  }
  
  // Exemplo de uso:
  let raio = 5;
  let areaCirculo = calcularAreaCirculo(raio);
  console.log("A área do círculo é:", areaCirculo);
  