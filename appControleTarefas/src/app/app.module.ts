import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';


import {ROUTES} from './app.routes'
import { RouterModule } from '@angular/router';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { HistoricoTarefasComponent } from './historico-tarefas/historico-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TelaPrincipalComponent,
    ListaTarefasComponent,
    HistoricoTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
