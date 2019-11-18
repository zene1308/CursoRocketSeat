// //classes normal
// class List {
//    constructor() {
//       this.data = [];
//    }
//    add(data) {
//       this.data.push(data);
//       //console.log(this.data);
//    }
// }

// class TodoList extends List {
//    constructor() {
//       super();

//       this.usuario = 'maconha';
//    }
//    mostraUsuario() {
//       //console.log(this.usuario);
//    }
// }

// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function () {
//    MinhaLista.add('Novo Todo');
// }

// MinhaLista.mostraUsuario();

// //classe estatica
// class Matematica {
//    static soma(a, b) {
//       return a + b;
//    }

// }
// //console.log(Matematica.soma(1, 2));

// //constantes 
// //constantes n mudam de valor
// //so pode mudar se for um objeto (mutacao)
// const usuario = { nome: 'bostao' };
// usuario.nome = 'joao';

// //console.log(usuario);

// //variaveis de escopo
// function teste(x) {
//    let y = 2;

//    if (x > 5) {
//       //console.log(x, y);
//    }
// }

// teste(10);

// //operacoes em array
// const arr = [1, 3, 4, 5, 8, 9];

// //map percorre o vetor e retorna uma informacao
// const newArr = arr.map(function (item, index) {
//    return item + index;
// });
// //console.log(newArr);

// //reduce consome o vetor e transforma em uma unica informacao
// const sum = arr.reduce(function (total, next) {
//    return total + next;
// });
// //console.log(sum);

// //filter 
// const filter = arr.filter(function (item) {
//    return item % 2 === 0;
// });
// //console.log(filter);

// //find verifica se existe uma informacao dentro do array
// const find = arr.find(function (item) {
//    return item === 4;
// });
// //console.log(find);

// //arrow function
// const newArray = arr.map(item => item * 2);
// //console.log(newArray);

// const testes = () => ({ nome: 'Oscar Romeu'});
// //console.log(testes());

// //valores padrao
// function somar(a = 3, b = 6){
//    return a + b;
// }

// //console.log(somar(1));
// //console.log(somar());

// //valor padrao com arrow function
// const somar2 = (a = 2, b = 5) => a + b;
// //console.log(somar2(1));
// //console.log(somar2());

// //desestruturação de objetos
// const usuarios = {
//    nome: 'joao',
//    idade: 22,
//    endereco: {
//       cidade: 'Dois Vizinhos',
//       estado: 'SC',
//    },
// };

// const { nome, idade, endereco: { cidade } } = usuarios;
// //console.log(nome,idade, cidade);

// function mostraNome({nome, idade}){
//    //console.log(nome, idade);
// };
// mostraNome(usuarios);

// //operador rest e spred
// //rest pega o resto das propiedades
// const user = {
//    nomee: 'Diego',
//    idade: 23,
//    empresa: 'Google'
// };

// const { nomee, ...resto} = user;
// //console.log(nomee);
// //console.log(resto);

// const arrayy = [1,2,3,4];
// const [a,b, ...c] = arrayy;
// //console.log(a);
// //console.log(b);
// //console.log(c);

// //rest com paramtro de funcao
// function somaGambi(...params){
//    return params.reduce((total, next) => total + next);
// };
// //console.log(somaGambi(1,3,4));

// //spread 
// //spread repassa as informações de um objeto
// //ou array para outra estrutura
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const arr3 = [...arr1, ...arr2];
// //console.log(arr3);

// const usuario1 = {
//    nome: 'Joao',
//    idade: 22,
//    empresa: 'Google.com',
// };

// const usuario2 = { ...usuario1, nome: 'Cuzao', sexo: 'M'};
// //console.log(usuario2);

// //template literals
// const nome3 = 'vini';
// const idade3 = 66;

// //console.log(`meu nome é ${nome3} e tenho ${idade3} anos`);
// //console.log(` o ${nome3} é viadao`);

// //object short sintax
// const nome4 = 'Cu de anu';
// const idade4 = 24;

// const usuario4 = {
//    nome4,
//    idade4,
//    empresa: 'RocketSeat',
// };
// //console.log(usuario4);

//import 
// import  zene,  {idade as idade2}   from './funcoes';
// zene.info(); //1.1
// console.log(idade2); //1.2

//async await

// const minhaPromise = () => new Promise((resolve, reject) => {
//    setTimeout(() => { resolve('ok') }, 2000);
// });

// minhaPromise().then(response => {
//    console.log(response);
// });

// async function executaPromise(){
//    //const response = await minhaPromise();
//    //console.log(response);

//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());

// }

// executaPromise();

// const executaPromise = async () => {
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
// };

// executaPromise();

//usando axios
// import axios from 'axios';

// class Api {
//    static async getUserInfo(username) {
//       try {
//          const response = await axios.get(`https://api.github.com/users/${username}`);
//          console.log(response);
//       } catch (err){
//          console.warn(`Erro na api:${err}`);
//       }   
//    }
// }
// Api.getUserInfo('diego3g');
import axios from 'axios';

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const executaUmPorSegundo = async () => {
   await delay();
   console.log('1s');
   await delay();
   console.log('2s');
   await delay();
   console.log('3s');
}

executaUmPorSegundo();

async function getUserFromGithub(user) {
   try {
      const response = await axios.get(`https://api.github.com/users/${user}`);

      console.log(response.data);
   } catch (err) {
      console.log('Usuário não existe');
   }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');


class Github {
   static async getRepositories(repo) {
      try {
         const response = await axios.get(`https://api.github.com/repos/${repo}`);
         console.log(response.data);
      } catch (err) {
         console.log('Repositório não existe');
      }
   }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

const buscaUsuario = usuario => {
   try {
      const response = axios.get(`https://api.github.com/users/${usuario}`)
      console.log(response.data);
   } catch (err) {
      console.log('Usuário não existe');
   }
}
buscaUsuario('diego3g');






