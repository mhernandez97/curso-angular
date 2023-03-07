
import { Component } from "@angular/core";

@Component({//Esto es un decorador
    selector: 'app-contador',
    //Por comodidad, hacemos el html aqui.
    template:` 
    
            <h1>{{ titulo }}</h1>

            <h3>La base es: <strong>{{ base }}</strong></h3>

            <button (click) =" acumular(base) "> +{{ base }} </button> <!--Los eventos se definen entre llaves. En este caso, 
                                                                estamos definiendo que queremos que pase tras el evento 
                                                                click (pulsar el botón)-->

            <span> {{ numero }} </span>


            <!--

            Esto sería una forma de aplicar una funcionalidad al evento, pero lo suyo es que hagamos un módulo en el app.componente.ts.
            Mientras menos código aqui, mejor
            <button (click) =" numero = numero - 1; "> -1 </button>

            -->
            <button (click) =" acumular(-base) "> -{{ base }} </button>
    
    
    `
})
export class ContadorComponent {
    titulo: string = 'Contador App'; 
    numero: number = 10;
  
    //Tarea 1: crear una nueva propiedad llamada base, va a ser un numero
    //y la vamos a inicializar en 5. Basicamente lo que se pide es que usemos esta base
    //para mostrarla en el html y que ademas sea esta base con la que usemos el acumulador.
    base: number = 5;
    acumular( valor: number ) {
      this.numero += valor;
    }
}