import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //app-root es el nombre del componente. Debe de coincidir con el de la etiqueta index.html (app-root va a ser la aplicación principal)
  templateUrl: './app.component.html',  //El componente necesita que se le expecifique si tiene una contraparte de html. Aquí se expecifica el path del .htm que va a mostrar la información html
  styleUrls: ['./app.component.css'],

  //La diferencia de este template con el otro es que en este se escribe la información aqui, y el otro especifica el path del archivo con la información.
  //Cuando un template tiene mas de tres lineas, lo ideal es que el template vaya en un archivo aparte.
  //template: `  
  
  //  <h1>Hola de nuevo</h1>

  //`

})

export class AppComponent {}

