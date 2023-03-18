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
  public tarefas : Tarefa[] = []

  public idTarefa : number = 0

  public formEntradaTarefa: FormGroup = new FormGroup({
    'id': new FormControl(null),
    'titulo': new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
    'data': new FormControl(null, [Validators.required, Validators.minLength(10)]),
    'descricao': new FormControl(null, [Validators.required, Validators.minLength(5),Validators.maxLength(75)])
  })


  constructor(){
    //console.log(this.formEntradaTarefa)
  }

  ngOnInit(): void {
    
  }

  public incluirTarefa():void{

    if(this.formEntradaTarefa.status === 'INVALID'){
      this.formEntradaTarefa.get('titulo')?.markAllAsTouched()
      this.formEntradaTarefa.get('data')?.markAllAsTouched()
      this.formEntradaTarefa.get('descricao')?.markAllAsTouched()
    } else{

      let tarefa:Tarefa = new Tarefa (
        this.formEntradaTarefa.value.id = this.idTarefa,
        this.formEntradaTarefa.value.titulo,
        this.formEntradaTarefa.value.data,
        this.formEntradaTarefa.value.descricao
      )
      this.tarefas.push(tarefa)
      this.idTarefa ++
    }




  }

  












}
