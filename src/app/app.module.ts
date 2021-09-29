import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { RecomendacaoInserirComponent } from './recomendacao-inserir/recomendacao-inserir.component';
import { RecomendacaoListarComponent } from './recomendacao-listar/recomendacao-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    RecomendacaoInserirComponent,
    RecomendacaoListarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
