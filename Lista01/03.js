//AREA = (BASE x ALTURA) / 2. Área de um Triângulo
function calcularAreaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    return area;
  }
  
  // Exemplo de uso:
  let base = 10;
  let altura = 5;
  let areaTriangulo = calcularAreaTriangulo(base, altura);
  console.log("A área do triângulo é:", areaTriangulo);  