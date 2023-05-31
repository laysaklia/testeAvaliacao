import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './paginas/inicial/inicial.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { MenuComponent } from './fixar/menu/menu.component';
import { RodapeComponent } from './fixar/rodape/rodape.component';
InicialComponent
ContatoComponent
SobreComponent
MenuComponent
RodapeComponent

const routes: Routes = [
  { path: '', component:InicialComponent },
  { path: 'contato', component:ContatoComponent },
  { path: 'sobre', component:SobreComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
