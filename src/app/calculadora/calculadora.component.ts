import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  operacionEntrada:string = " ";

  resultados = [0];
  lastChar:string = "";
  resultado:number = 0;
  esSimbolo:boolean = false;
  esPunto:boolean = false;

  ingresarPunto(elemento:string){

    if(this.esPunto===false){
      this.esPunto=true;
      this.operacionEntrada += elemento;
      this.lastChar = this.operacionEntrada[this.operacionEntrada.length-1];
      this.resultado=eval(this.operacionEntrada);
    }

  }

  ingresarSimbolo(elemento:string){

    if(this.esSimbolo === false && this.operacionEntrada!=="" && this.lastCharValidacion() === false && this.lastChar !== "."){

      this.esSimbolo=true;
      this.esPunto=false;
      this.operacionEntrada += elemento;
      this.lastChar = this.operacionEntrada[this.operacionEntrada.length-1];
      this.resultado=eval(this.operacionEntrada);

    }
  }

  ingresarNumero(elemento:string) {
    this.operacionEntrada += elemento;
    this.lastChar = this.operacionEntrada[this.operacionEntrada.length-1];
    this.resultado=eval(this.operacionEntrada);
    this.esSimbolo=false;
  }

  borrarElemento(){
    if(this.lastCharValidacion()){
      this.esSimbolo=false;
      this.esPunto=true;
    }
    if(this.lastChar ===  "."){
      this.esPunto = false;
    }
    this.operacionEntrada = this.operacionEntrada.slice(0, -1);
    this.lastChar = this.operacionEntrada[this.operacionEntrada.length-1];

  }

  igual(){
    this.resultado=eval(this.operacionEntrada);
    this.resultados.push(this.resultado);

  }
  lastCharValidacion(){
    if(this.lastChar === "/" || this.lastChar === "+" || this.lastChar === "-" || this.lastChar === "*"){
      return true;
    }else{
      return false;
    }
  }
  borrarTodo(){
    this.esSimbolo=false;
    this.esPunto=false;
    this.operacionEntrada = "";
  }

/* Si no existiese eval() yo lo que haria seria un sistema que recorra el string y cuando se tope con un operador analice si es un * / o un suma y resta.
Una vez se encuentre con x simbolo, guardaria todo lo anterior al simbolo en un array de elementos.Si fuese multiplicacion o division , multiplicaria o
dividiria el elemento guardado dentro del array con el elemento a la derecha del simbolo. Seguiria acumulandose eso en la posicion 0 del array hasta
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
const arrelementos = [4,3,4];
const orden = ["-","-","+",];
let resultado=0;
for(let i=0;i<arrelementos.length;i++){
    if(orden[i]==="+"){
    resultado += arrelementos[i];
    }else{
    resultado -= arrelementos[i];
    }

}
console.log(resultado);
*/
}
