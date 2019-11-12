//exercicio1
class Usuario {
   constructor(email, senha) {
      this.email = email;
      this.senha = senha;
      this.admin = false;
   }
   isAdmin() {
      return this.admin;
   }
}

class Admin extends Usuario {
   constructor() {
      super();
      this.admin = true;
   }

}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

//exercicio2
const usuarios = [
   { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
   { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
   { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1
const idades = usuarios.map(item => {
   return item.idade;
});
console.log(idades);

//2.2
const filtrarIdade = usuarios.filter(item => {
   return (item.empresa === 'Rocketseat') && (item.idade > 18);
});
console.log(filtrarIdade);

//2.3 
const procurar = usuarios.find(item => {
   return item.empresa === "Google";
});
console.log(procurar);

//2.4
const union = usuarios.map(item =>{ 
   return {...item, idade: item.idade* 2};
}).filter(filtro => filtro.idade < 50);
console.log(union);

//3.1
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map(item => item + 10);
//console.log(arr2);

//3.2
const usuario = { nome: 'Diego', idade: 23 };

const user = (usuario) => {
   return usuario.idade;
}
//console.log(user(usuario));

//3.3
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => {
   return { nome, idade };
}
//console.log(mostraUsuario(nome, idade));
//console.log(mostraUsuario(nome));

// 3.4
const promise = () => {
   return new Promise((resolve, reject) => {
      return resolve();
   })
}

//4.1
const empresa = {
   nomes: 'Rocketseat',
   endereco: {
      cidade: 'Rio do Sul',
      estado: 'SC',
   }
};

const {nomes, endereco:{cidade}, endereco:{estado}} = empresa;

console.log(nomes); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

//4.2
function mostraInfo({nome, idade}) {
   return `${nome} tem ${idade} anos.`;
  }
  console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

  













