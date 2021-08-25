import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css'],
})
export class FormControlComponent implements OnInit {
  @Input() name: string = '';
  @Input() inputType: string = '';

  capitalizeName() {
    return `${this.name.slice(0, 1).toUpperCase()}${this.name.slice(1)}`;
  }

  ngOnInit(): void {}
}
