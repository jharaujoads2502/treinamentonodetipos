//parametros de função

function soma(num1, num2){
    return num1 + num2;
}

console.log(soma(1,2));
console.log(soma(245,20));
console.log(soma(-52,80));

//parametros x argumentos

//ordem dos parâmetros


function nomeIdade(nome, idade){
    return `Meu nome é ${nome} minha idade é ${idade}`;
}


console.log(nomeIdade(40,'José'));

function multiplica(numero1 = 1, numero2 = 1){
  return numero1 * numero2;
}

console.log(multiplica(soma(2,3),soma(3,4)));
console.log(multiplica(soma(2,3)));

