// Crie uma função para verificar se um valor é truthy
function isTruthy(dado) {
    return !!dado;
}
  
  //Crie uma função matematica que retorne o perímetro de um quadrado
  //Lembrando: perímetro é a soma dos quatro lados do quadrado
  
  function perimetroQuadrado(p) {
    return 4 * p;
  }
  
  //Crie uma funcao que retorne seu nome completo
  //ela deve possuir os parametros: nome e sobrenome
  
  function nome(n, s) {
    return `${n} ${s}`;
  }
  nome('Gabriel', 'Martorello');
  
  // Crie uma função que verifica se um número é par
  function impPar(n) {
    var mod = n % 2 ;
    if (mod === 0) {
        return true
    }else {
        return false
    }
  }

  // Crie uma função que retorne o tipo de
  // dado do argumento passado nela (typeof)
  function tipo(tipo) {
    return typeof tipo;
  }
  // addEventListener é uma função nativa do JavaScript
  // o primeiro parâmetro é o evento que ocorre e o segundo o Callback
  // utilize essa função para mostrar no console o seu nome completo
  // quando o evento 'scroll' ocorrer.
  addEventListener('click', function () {
    console.log('Gabriel Martorello');
  });
  // Corrija o erro abaixo
  var totalPaises = 193;
  
  function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));