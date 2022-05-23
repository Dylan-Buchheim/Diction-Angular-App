import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary-service.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  secretWord: string = "";
  
  topWord: string = "";
  bottomWord: string = ""
  guessCount: number = 0;

  constructor(private dictionary: DictionaryService) { }

  ngOnInit(): void {
    this.dictionary.getRandomWord(5).subscribe(
      (data) => {
        this.secretWord = data[0];
        this.dictionary.searchForWord(data[0]).subscribe(
          data => console.log(data)
        )
      }
    )
  }

  onWordGuessed(word: string){
    if(word.toUpperCase() < this.secretWord.toUpperCase()){
      this.topWord = word;
    } else {
      this.bottomWord = word;
    }
    
    this.guessCount ++;
  }

}
