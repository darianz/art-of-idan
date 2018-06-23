
import { Component, OnInit } from '@angular/core';
import { trigger, state, style } from '@angular/animations';


@Component({
  selector: 'app-cover-image',
  templateUrl: './cover-image.component.html',
  styleUrls: ['./cover-image.component.css'],
  animations: [
    trigger('CoverImageState', [
      state('show', style({
        opacity: 1
      })),

      state('hide', style({
        opacity: 0
      })),

    ])
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
