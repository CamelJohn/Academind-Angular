import { Component, Output } from '@angular/core';
import { ServerElement, ServerData } from './types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Output() serverElements: ServerElement[] = [
    { type: 'server', name: 'Testserver', content: 'Just a test!' },
  ];

  onServerAdded({ content, name }: ServerData) {
    this.serverElements.push({
      type: 'server',
      name,
      content,
    });
  }

  onBlueprintAdded({ content, name }: ServerData) {
    this.serverElements.push({
      type: 'blueprint',
      name,
      content,
    });
  }
}
