import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  operacionEntrada:string = "";

  resultados = [0];
  resultado:number = 0;
  esSimbolo:number = 0;
  simboloFlag:boolean = false;
  esPunto:number = 0;
  puntoFlag:boolean = false;

    ingresarPunto(elemento:string){

      /*
        No es tan complicado, tengo que hacer lo mismo que hice con los simbolos solo que con las siguientes restricciones:
        1. No puedo ingresar . con nada en string
        2. No puedo ingresar si ya se ingreso otro . y no se puso otro simbolo, ademas, si borro el simbolo, no puedo remplazarlo por un "."
        tiene que ingresarse otro numero para que recien ahi pueda hacerlo, ademas, si borro ese numero y simbolo, se reinicia la autorizacion.
        Es decir, solo puedo ingresar 1 vez punto despues de un simbolo
        Si este metodo normal no funciona, peudo ir por la fuerza escaneando todo el string y tirandome true si detecta MAS de un "." entre 2 simbolos
      */

      if(this.esSimbolo>0){

        this.esPunto++;
        }else{
        if(this.esSimbolo===0){
          this.esPunto=0;
        }else{
          this.esPunto++;
        }
      }

      if(this.esPunto < 2 && this.esSimbolo===0 && this.operacionEntrada!==""){
        this.operacionEntrada += elemento;
        this.resultado=eval(this.operacionEntrada);
      }
    }

    ingresarSimbolo(elemento:string){ // Valida si se puede ingresar simbolo o no

      this.esSimbolo++;
      this.simboloFlag = true;

      if(this.esSimbolo < 2 && this.operacionEntrada!==""){
        this.operacionEntrada += elemento;
        this.resultado=eval(this.operacionEntrada);
      }
    }

    ingresarNumero(elemento:string) {
      this.operacionEntrada += elemento;
      this.resultado=eval(this.operacionEntrada);
      this.esSimbolo=0;
    }

    igual(){
      this.resultado=eval(this.operacionEntrada);
      this.resultados.push(this.resultado);

    }
    borrarElemento(){
      this.operacionEntrada = this.operacionEntrada.slice(0, -1);
      if(this.simboloFlag===true || this.puntoFlag===true){
        this.esSimbolo=0;
      }
    }
    borrarTodo(){
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
