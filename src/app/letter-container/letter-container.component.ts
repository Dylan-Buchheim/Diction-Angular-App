import { Component, OnInit, Input } from '@angular/core';

import { Letter } from '../Interfaces/letter';

@Component({
  selector: 'app-letter-container',
  templateUrl: './letter-container.component.html',
  styleUrls: ['./letter-container.component.css']
})
export class LetterContainerComponent implements OnInit {

  @Input() letter: Letter = { value: "", status: "wrong" };

  constructor() { }

  ngOnInit(): void {
  }

}
