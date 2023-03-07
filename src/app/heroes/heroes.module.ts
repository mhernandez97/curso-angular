import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [     //Las declaraciones dicen básicamente que cosas tiene este módulo
                        //Por ejemplo, que pìpes, que componentes, que otras cosas
        HeroeComponent,
        ListadoComponent
    ],
    //que cosas quiero que sean visibles fueras de este módulo
    exports: [
        ListadoComponent
    ],
    //Dentro del import van solo los módulos
    imports: [
        CommonModule //Ofrece directivas personalizadas de Angular como ngIf o ngFor
    ]
})

export class HeroesModule {}