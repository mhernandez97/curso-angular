import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {

    nombre: string = 'Ironman';
    edad: number = 45;

    //TS tiene metodos get y set para obtener valores de varables
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase(); //Transforma a mayusculas el nombre. 
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad };` //Esta sentencia es propia de js
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad=30;
    }
}