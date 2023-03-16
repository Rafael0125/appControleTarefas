import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoTarefasComponent } from './historico-tarefas.component';

describe('HistoricoTarefasComponent', () => {
  let component: HistoricoTarefasComponent;
  let fixture: ComponentFixture<HistoricoTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoTarefasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
