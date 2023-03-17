import { Routes } from "@angular/router";

// import { MenuComponent } from "./menu/menu.component"; //
import { TelaPrincipalComponent } from "./tela-principal/tela-principal.component";
import { ListaTarefasComponent } from "./lista-tarefas/lista-tarefas.component";
import { HistoricoTarefasComponent } from "./historico-tarefas/historico-tarefas.component";

export const ROUTES : Routes = [
    { path:"",component:TelaPrincipalComponent},
    { path:"historico",component:HistoricoTarefasComponent},
    { path:"listaTarefas",component:ListaTarefasComponent}
]


