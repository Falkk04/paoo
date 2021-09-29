import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recomendacao-inserir',
  templateUrl: './recomendacao-inserir.component.html',
  styleUrls: ['./recomendacao-inserir.component.css']
})
export class RecomendacaoInserirComponent{

  @Output() recomendacaoInserida = new EventEmitter();

  adicionar(titulo,texto){
    this.recomendacaoInserida.emit({titulo,texto})
  }
}
