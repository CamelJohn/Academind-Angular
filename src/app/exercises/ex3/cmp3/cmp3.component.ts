import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp3',
  templateUrl: './cmp3.component.html',
  styleUrls: ['./cmp3.component.css'],
})
export class Cmp3Component implements OnInit {
  show = false;
  clicks: Date[] = [];
  constructor() {}

  ngOnInit(): void {}

  toggleParagraph() {
    this.clicks.push(new Date());
    this.show = !this.show;
  }

  color(i: number) {
    return i >= 5 ? 'white' : 'black';
  }

  backgroundColor(i: number) {
    return i >= 5 ? 'blue' : 'white';
  }
}
