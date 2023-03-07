/*
Este es el módulo principal. La idea es que cada 
sección tenga su propio modulo, como por ejemplo el modulo
de heroes que seriá heroes.module.ts , y sean esos módulos donde 
hagan sus imports y sus cosas. Lurgo es imprescindible importar esos modulo aqui
en la etiqueta imports del NgModule
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';

/* 

NgModule Identifica los componentes del propio módulo, directivas y pipes, 
haciendo algunos de ellos públicos (a través de la propiedad export) 
para que los componentes externos puedan utilizarlos.

*/
@NgModule({
  declarations: [ //Lugar donde se ponen los componentes
    AppComponent,
    /*ContadorComponent va a ser removido de aquí ahora porque vamos a crear su propio módulo.
    de manera que ahora lo que necesitaremos será importar su módulo abajo.*/

    //ContadorComponent, //Declaraciones de los componentes (nombre de las clases)
  ],
  imports: [ //lugar donde se colocan otros módulos
    BrowserModule,
    AppRoutingModule,
    HeroesModule,  //Este es el modulo de héroes
    ContadorModule //Este módulo es el del componente contador
  ],
  providers: [], //Servicios especificos a un módulo
  bootstrap: [AppComponent] //Este es el módulo principal
})
export class AppModule { }
