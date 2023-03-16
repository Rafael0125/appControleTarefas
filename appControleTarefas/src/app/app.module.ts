import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TelaPrincipalComponent,
    ListaTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
