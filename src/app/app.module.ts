import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WordContainerComponent } from './word-container/word-container.component';
import { LetterContainerComponent } from './letter-container/letter-container.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GuessContainerComponent } from './guess-container/guess-container.component';

@NgModule({
  declarations: [
    AppComponent,
    WordContainerComponent,
    LetterContainerComponent,
    GameBoardComponent,
    GuessContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
