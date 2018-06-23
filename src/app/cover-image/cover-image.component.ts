
import { Component, OnInit } from '@angular/core';
import { CoverImageState } from '../animations';



@Component({
  selector: 'app-cover-image',
  templateUrl: './cover-image.component.html',
  styleUrls: ['./cover-image.component.css'],
  animations: [
    CoverImageState
  ]
})



export class CoverImageComponent implements OnInit {
  show = false;

  constructor() { }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }
  toggle() {
    this.show = !this.show;
  }
  ngOnInit() {
  }

}
