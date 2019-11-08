//classes normal
class List{
   constructor(){
      this.data = [];
   }
   add(data){
      this.data.push(data);
      console.log(this.data);
   }
}

class TodoList extends List{
   constructor(){
      super();

      this.usuario = 'maconha';
   }
   mostraUsuario(){
      console.log(this.usuario);
   }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
   MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();

//classe estatica
class Matematica {
   static soma(a, b) {
      return a + b;
   }

}
console.log(Matematica.soma(1,2));

//constantes 
//constantes n mudam de valor
//so pode mudar se for um objeto (mutacao)
const usuario = {nome: 'bostao'};
usuario.nome = 'joao';

console.log(usuario);

//variaveis de escopo
function teste(x){
   let y = 2;

   if (x > 5){
      console.log(x,y);
   }
}

teste(10);

