/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const arr = [1, 3, 4, 5, 8, 9];\n// //map = percorre o vetor e retorna uma informação\n// //na funcao o item é o valor e o index a posicao\n// const newArr = arr.map(function (item, index) {\n//     return item * index;\n// });\n// console.log(newArr);\n// //reduce consumi o vetor e e transformar em uma unica informacao\n// const sum = arr.reduce(function (total, next) {\n//     return total + next;\n// });\n// console.log(sum);\n// //filtrar dados no array\n// const filter = arr.filter(function (item) {\n//     return item % 2 === 0;\n// });\n// console.log(filter);\n// //verificar se tem uma informação no array\n// const find = arr.find(function (item) {\n//     return item === 4;\n// });\n// console.log(find);\n// //usando arrow function\n// const novoArray = arr.map(item => {\n//     return item * 2;\n// });\n// console.log(novoArray);\n// //valores padrao\n// const soma = (a = 1, b = 2) => a + b;\n// console.log(soma());\n// //desestruturacao objectos\n// const usuario = {\n//     nome: 'Zene',\n//     idade: 66,\n//     endereco: {\n//         cidade: 'Dois Vizinhos',\n//         estado: 'PR'\n//     }\n// };\n// const { nome, idade, endereco: { estado } } = usuario;\n// console.log(nome);\n// console.log(idade);\n// console.log(estado);\n// //usando desestruturacao com funcoes\n// function mostraNome({ nome, idade }) {\n//     console.log(nome, idade);\n// };\n// mostraNome(usuario);\n// //operador REST\n// const pessoa = {\n//     apelido: 'Zene',\n//     console: 'X-Box One X',\n//     cachorros: 4,\n//     gatos: 2\n// };\n// const { apelido, ...outros } = pessoa;\n// console.log(outros);\n// //operador REST em vetor\n// const array = [1, 2, 3, 4, 5];\n// const [a, b, ...c] = array;\n// console.log('======================');\n// console.log(a);\n// console.log(b);\n// console.log(c);\n// //REST EM PARAmetros de functions\n// function somar(a, b, ...params) {\n//     return params;\n// };\n// console.log(somar(1, 2, 3, 4, 5, 6, 7));\n// //SPREAD repassa as informacoes de um objeto para outra estrutura\n// const arr1 = [1, 2, 3];\n// const arr2 = [4, 5, 6];\n// const arr3 = [...arr1, ...arr2];\n// console.log(arr3);\n// //usando em objetos\n// const usuario1 = {\n//     nome: 'Pedro',\n//     idade: 22\n// };\n// const usuario2 = {\n//     ...usuario1,\n//     sexo: 'M'\n// };\n// console.log(usuario2);\n// //template literals\n// const nome1 = \"Zene\";\n// const idade1 = 66;\n// console.log('Meu nome é ' + nome1 + 'e tenho ' + idade1 + ' anos');\n// console.log(`Meu nome é ${nome1} e tenho ${idade1} anos`);\n// //object short syntax\n// //quando uso uma variavel de um nome recebendo outra de mesmo nome posso\n// //abreviar\n// const nome2 = 'maria';\n// const idade2 = 22;\n// const pessoa3 = {\n//     nome2,\n//     idade2,\n//     sexo: 'M'\n// };\n// console.log(pessoa3);\n// //======================================================================================================================\n// //exercicio 1\n// class Usuario {\n//     constructor(email, senha) {\n//         this.email = email;\n//         this.senha = senha;\n//     }\n//     isAdmin() {\n//         return this.admin === true;\n//     }\n// }\n// class Admin extends Usuario {\n//     constructor(email, senha) {\n//         super(email, senha);\n//         this.admin = true;\n//     }\n// };\n// //exercicio 2\n// const usuarios = [\n//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },\n//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },\n//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },\n// ];\n// //2.1\n// const idades = usuarios.map(item => item.idade);\n// console.log(idades);\n// //2.2\n// const usuariosRocket = usuarios.filter(\n//     usuario =>\n//         usuario.empresa === \"Rocketseat\"\n//         && usuario.idade >= 18\n// );\n// console.log(usuariosRocket);\n// //2.3\n// const usuarioGoogle = usuarios.find(\n//     usuario => usuario.empresa === \"Google\"\n// );\n// console.log(usuarioGoogle);\n// //2.4\n// const calculo = usuarios\n//   .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))\n//   .filter(usuario => usuario.idade <= 50);\n// console.log(calculo);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });