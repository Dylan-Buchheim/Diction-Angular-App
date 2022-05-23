import { Component, OnInit, Input } from '@angular/core';

import { Letter } from '../Interfaces/letter';

@Component({
  selector: 'app-guess-container',
  templateUrl: './guess-container.component.html',
  styleUrls: ['./guess-container.component.css']
})
export class GuessContainerComponent implements OnInit {

  @Input() 
    get word(): string { return this._word; }
    set word(word: string) {
      this.setWord(word);
    }

  private _word: string = "";
  
  @Input() secretWord: string = "";
  
  letters: Letter[] = [
    { value: "", status: "wrong"},
    { value: "", status: "wrong"},
    { value: "", status: "wrong"},
    { value: "", status: "wrong"},
    { value: "", status: "wrong"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  setWord(word: string): void{
    if(!word){
      return;
    }
    
    for(let i=0; i < this.letters.length; i++){
      let status = "wrong";
      
      if(this.secretWord.toUpperCase().includes(word[i].toUpperCase())){
        status = "partial";
      }

      if(word[i].toUpperCase() === this.secretWord[i].toUpperCase()){
        status = "correct";
      }

      this.letters[i] = { value:word[i], status: status };
    }

    this._word = word;
  }

}
