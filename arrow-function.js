function apresentar(nome){

    return `meu nome é ${nome}`;
}
//arrow
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1,num2) => `soma igual a ${num1 + num2}`;
const somaNumerosPequenos = (num1,num2) => {
    if (num1 > 10 || num2 > 10){
        return 'somente numeros de 1 a 9';
    } else {
       return `soma igual a ${num1 + num2}`
    }
}
console.log(apresentarArrow('teste'));
console.log(soma(1,2));
console.log(somaNumerosPequenos(1,9));