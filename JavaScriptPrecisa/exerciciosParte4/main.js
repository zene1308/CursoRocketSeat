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

function renderNomes() {
   listElement.innerHTML = '';
   for (nome of nomes) {
      var nomeElement = document.createElement('li');
      var nomeText = document.createTextNode(nome);
      listElement.appendChild(nomeElement);
      listElement.appendChild(nomeText);
   }
}

renderNomes();

function addNome() {
   var nomeText = inputElement.value;

   axios.get(`https://api.github.com/users/${nomeText}/repos`)
      .then(function (response) {
         nomes.push(response.data[0]);
         inputElement.value = '';
         renderNomes();
         console.log(response);
      })
      .catch(function (error) {
         console.warn(error);
      });
}

buttonElement.onclick = addNome;