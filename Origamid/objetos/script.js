var pessoa = {
    nome : 'Andre',
    idade : '28',
}

console.log(pessoa);

var quadrado = {
    lados: 4,
    area(lado) {                   /*= area: function(lado)*/
        return lado*lado;
    },
    perimetro(lado) {
       return this.lados*lado; 
    },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.log(Math.random());

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeheight() {
        return this.height / 2;
    }
}

menu.backgroundColor = '#000'; /*mudar a cor*/

menu.color = 'blue';

menu.esconder = function () {
    console.log('escondi');
}

var bg = menu.backgroundColor
