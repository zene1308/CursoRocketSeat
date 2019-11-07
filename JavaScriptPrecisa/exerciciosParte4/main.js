//exercicio1
//promises
// var checaIdade = function (idade) {
//    return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//          if (idade > 18) {
//             resolve();
//          } else {
//             reject();
//          }
//       }, 2000);

//    })
// }

// checaIdade(10)
//    .then(function () {
//       console.log("Maior que 18");
//    })
//    .catch(function () {
//       console.log("Menor que 18");
//    });

//exercicio2

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var nomes = [];

function renderNomes(nomes, carregando) {
   listElement.innerHTML = '';
   for (nome of nomes) {
      var nomeElement = document.createElement('li');
      if (nome !== '') {
         var nomeText = document.createTextNode(nome.name);
      } else {
         var nomeText = document.createTextNode('carregando');
      }


      nomeElement.appendChild(nomeText);
      listElement.appendChild(nomeElement);
   }
}

function addNome() {
   var nomeText = inputElement.value;
   renderNomes('', 'carregando');

   axios.get(`https://api.github.com/users/${nomeText}/repos`)
      .then(function (response) {
         inputElement.value = '';
         renderNomes(response.data, '');
      })
      .catch(function (error) {
         alert(error);
      });
}

buttonElement.onclick = addNome;