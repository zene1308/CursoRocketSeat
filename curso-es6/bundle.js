"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var arr = [1, 3, 4, 5, 8, 9]; //map = percorre o vetor e retorna uma informação
//na funcao o item é o valor e o index a posicao

var newArr = arr.map(function (item, index) {
  return item * index;
});
console.log(newArr); //reduce consumi o vetor e e transformar em uma unica informacao

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); //filtrar dados no array

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //verificar se tem uma informação no array

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find); //usando arrow function

var novoArray = arr.map(function (item) {
  return item * 2;
});
console.log(novoArray); //valores padrao

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return a + b;
};

console.log(soma()); //desestruturacao objectos

var usuario = {
  nome: 'Zene',
  idade: 66,
  endereco: {
    cidade: 'Dois Vizinhos',
    estado: 'PR'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    estado = usuario.endereco.estado;
console.log(nome);
console.log(idade);
console.log(estado); //usando desestruturacao com funcoes

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

;
mostraNome(usuario); //operador REST

var pessoa = {
  apelido: 'Zene',
  console: 'X-Box One X',
  cachorros: 4,
  gatos: 2
};

var apelido = pessoa.apelido,
    outros = _objectWithoutProperties(pessoa, ["apelido"]);

console.log(outros); //operador REST em vetor

var array = [1, 2, 3, 4, 5];
var a = array[0],
    b = array[1],
    c = array.slice(2);
console.log('======================');
console.log(a);
console.log(b);
console.log(c); //REST EM PARAmetros de functions

function somar(a, b) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  return params;
}

;
console.log(somar(1, 2, 3, 4, 5, 6, 7)); //SPREAD repassa as informacoes de um objeto para outra estrutura

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3); //usando em objetos

var usuario1 = {
  nome: 'Pedro',
  idade: 22
};

var usuario2 = _objectSpread({}, usuario1, {
  sexo: 'M'
});

console.log(usuario2);
