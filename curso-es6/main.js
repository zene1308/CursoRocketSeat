const arr = [1, 3, 4, 5, 8, 9];

//map = percorre o vetor e retorna uma informação
//na funcao o item é o valor e o index a posicao
const newArr = arr.map(function (item, index) {
    return item * index;
});
console.log(newArr);

//reduce consumi o vetor e e transformar em uma unica informacao
const sum = arr.reduce(function (total, next) {
    return total + next;
});

console.log(sum);

//filtrar dados no array
const filter = arr.filter(function (item) {
    return item % 2 === 0;
});

console.log(filter);


//verificar se tem uma informação no array
const find = arr.find(function (item) {
    return item === 4;
});

console.log(find);

//usando arrow function
const novoArray = arr.map(item => {
    return item * 2;
});

console.log(novoArray);

//valores padrao
const soma = (a = 1, b = 2) => a + b;

console.log(soma());


//desestruturacao objectos
const usuario = {
    nome: 'Zene',
    idade: 66,
    endereco: {
        cidade: 'Dois Vizinhos',
        estado: 'PR'
    }
};

const {nome, idade, endereco:{ estado } } = usuario;

console.log(nome);
console.log(idade);
console.log(estado);

//usando desestruturacao com funcoes
function mostraNome({nome, idade}){
    console.log(nome, idade);
};

mostraNome(usuario);

//operador REST
const pessoa = {
    apelido: 'Zene',
    console: 'X-Box One X',
    cachorros: 4,
    gatos: 2
};

const {apelido, ...outros} = pessoa;

console.log(outros);

//operador REST em vetor
const array = [1,2,3,4,5];
const [a,b,...c] = array;

console.log('======================');
console.log(a);
console.log(b);
console.log(c);

//REST EM PARAmetros de functions
function somar(a,b, ...params){
    return params;
};

console.log(somar(1,2,3,4,5,6,7));


//SPREAD repassa as informacoes de um objeto para outra estrutura
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

//usando em objetos
const usuario1 = {
    nome:'Pedro',
    idade: 22
};

const usuario2 = {
    ...usuario1,
    sexo: 'M'
};

console.log(usuario2);

