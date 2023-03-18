import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Tarefa } from '../shared/tarefa.model';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {

  public tarefa !:Tarefa

  public formEntradaTarefa: FormGroup = new FormGroup({
    'titulo': new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
    'data': new FormControl(null),
    'descricao': new FormControl(null, [Validators.required, Validators.minLength(5),Validators.maxLength(75)])
  })


  constructor(){
    //console.log(this.formEntradaTarefa)
  }

  ngOnInit(): void {
    
  }


  public incluirTarefa():void{
    console.log(this.formEntradaTarefa)
    console.log('---------------------------------')
    console.log(this.formEntradaTarefa.value)
  }












}
