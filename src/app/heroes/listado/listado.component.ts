import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

   heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
   
   heroeBorrado: string = '';

   borrarHeroe() {
     this.heroeBorrado = this.heroes.shift() || ''; //Esto se hace para evitar el error de si devuelve undefined
   }
}
