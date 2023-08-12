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

    ingresarElemento(numero:string) {

      if(numero === '*' || numero === '/' || numero === '+' || numero === '-' || numero === '.'){
        this.esSimbolo++;
      } else {
        this.esSimbolo=0;
      }

      if(this.esSimbolo < 2){
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
