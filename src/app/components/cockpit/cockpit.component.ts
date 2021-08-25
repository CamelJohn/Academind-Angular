import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ServerData } from '../../types';

interface Data {
  name: HTMLInputElement;
  content: HTMLInputElement;
}

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<ServerData>();
  @Output('bptCreated') blueprintCreated = new EventEmitter<ServerData>();
  // newServerName = '';
  // newServerContent = '';
  // @ViewChild('content') serverContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddServer({ name, content }: Data) {
    this.serverCreated.emit({
      content: content.value,
      name: name.value,
    });
  }

  onAddBlueprint({ name, content }: Data) {
    this.blueprintCreated.emit({
      content: content.value,
      name: name.value,
    });
  }
}
