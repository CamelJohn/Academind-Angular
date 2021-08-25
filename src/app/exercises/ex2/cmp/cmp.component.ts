import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.css'],
})
export class CmpComponent implements OnInit {
  username = '';
  constructor() {}

  ngOnInit(): void {}

  isUsernameEmpty() {
    return this.username.trim() === '';
  }

  resetUsername() {
    this.username = '';
  }
}
