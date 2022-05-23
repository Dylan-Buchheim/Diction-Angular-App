import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';

import { Letter } from '../Interfaces/letter';

@Component({
  selector: 'app-word-container',
  templateUrl: './word-container.component.html',
  styleUrls: ['./word-container.component.css']
})
export class WordContainerComponent implements OnInit {

  @Output() wordGuessed = new EventEmitter<string>();
  letterIndex: number = 0;

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

  @HostListener('window:keypress', ['$event']) keyPress(event: any){
    let key = event.key;
    
    if(this.isAlpha(key)){
      this.setLetter(key);
    }
  }

  @HostListener('window:keydown', ['$event']) keyDown(event: any){
    let key = event.key;
    
    if(key.toUpperCase() === 'BACKSPACE'){
      this.removeLetter();
    }

    if(key.toUpperCase() === 'ENTER'){
      this.submitWord();
    }
  }
  
  setLetter(letter: string): void {
    if(this.letterIndex === this.letters.length){
      return
    }

    this.letters[this.letterIndex].value = letter;
    this.letterIndex ++;
  }

  removeLetter(): void {
    if(this.letterIndex === 0){
      return;
    }

    this.letters[this.letterIndex-1].value = "";
    this.letterIndex --;
  }

  submitWord(): void{
    let fullWord: boolean = true;
    let word: string = "";

    for(let i=0; i < this.letters.length; i++){
      if(!this.letters[i].value){
        fullWord = false;
        break;
      }else{
        word = word + this.letters[i].value;
      }
    }

    if(fullWord){
      this.wordGuessed.emit(word);
      this.clearWord();
    }
  }

  clearWord(): void{    
    
    this.letters = [
      { value: "", status: "wrong"},
      { value: "", status: "wrong"},
      { value: "", status: "wrong"},
      { value: "", status: "wrong"},
      { value: "", status: "wrong"}
    ];

    this.letterIndex = 0;
  }

  isAlpha(str: string): boolean{
    return /^[A-Z]$/i.test(str);
  }
}
