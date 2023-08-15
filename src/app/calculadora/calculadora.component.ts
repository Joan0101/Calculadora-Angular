import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  operacionEntrada:string = "";
  esSimbolo:number = 0;
  
  resultado:number = 0;

    ingresoPunto(){

      /* esta funcion retorna booleano flag permitiendo en casod e que sea true 
      el ingreso al string de un "." */
      let flag:boolean=false;
      let esPunto:number=0;

      if(this.operacionEntrada===null){ // Si el elemento previo al "." es null o un SIMBOLO la funcion retorna false.
        flag=false;
      } else {
        if(this.operacionEntrada[this.operacionEntrada.length] ){ // se validaria con el uso de validarSimbolo() si lo ultimo ingresado en la calculadora es numerico o simbolo.

        }
      }
    }
    validarSimbolo(){

    }
    ingresarElemento(numero:string) {


      /* La validacion de simbolo debera de incluirse en el metodo validar simbolo. Se excluye de
      ingresarElemento() y dentro de la validacion "ths.simbolo<2" se ejecuta el metodo validarSimbolo()
      que retornara un true o false. En valirdar simbolo se crearan las variables necesarias con let (esSimbolo)*/
      

      if(numero === '*' || numero === '/' || numero === '+' || numero === '-'){ 
        this.esSimbolo++;
        
      } else {
        this.esSimbolo=0;
      }

      if(this.esSimbolo < 2 ){
        this.operacionEntrada += numero;
        this.resultado=eval(this.operacionEntrada);
      }
  }

    borrarElemento(){
      this.operacionEntrada = this.operacionEntrada.slice(0, -1);
    }

/* Si no existiese eval() yo lo que haria seria un sistema que recorra el string y cuando se tope con un operador analice si es un * / o un suma y resta.
Una vez se encuentre con x simbolo, guardaria todo lo anterior al simbolo en un array de numeros.Si fuese multiplicacion o division , multiplicaria o
dividiria el numero guardado dentro del array con el numero a la derecha del simbolo. Seguiria acumulandose eso en la posicion 0 del array hasta
que se encuentre una suma o resta. En este caso crearia un elemento que me permita guardar el orden de las operaciones de suma y resta. Asi saber
si primero es resta o despues suma y continuando. Luego de esto, pasaria a un bloque siguiente donde todo lo siguiente del simbolo entraria en la siguiente
posicion del array numerico, sea [1], hasta toparnos con otra suma o resta, se guardaria el orden de suma o resta y asi sucesivamente.

Con el array numerico completado, ahora habria que hacer las operaciones con los elementos del array en orden desde el inicio hasta el final
haciendo su respectiva suma o resta en cada caso

resultado = 0;
if(orden[i] == "+") "El elemnto que guarda el orden (un array)"
resultado += arr[i];
if(orden[i] == "-")
resultado -= arr[i];


Este seria el supuesto codigo bien hecho:
const arrNumeros = [4,3,4];
const orden = ["-","-","+",];
let resultado=0;
for(let i=0;i<arrNumeros.length;i++){
    if(orden[i]==="+"){
    resultado += arrNumeros[i];
    }else{
    resultado -= arrNumeros[i];
    }

}
console.log(resultado);
*/
}
