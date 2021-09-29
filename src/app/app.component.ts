import { Component } from '@angular/core';
import { Recomendacao } from './recomendacao-listar/recomendacao.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recomendacoes = []

  onRecomendacaoInserida(recomendacao){
    this.recomendacoes = [recomendacao, ...this.recomendacoes];
  }
}
