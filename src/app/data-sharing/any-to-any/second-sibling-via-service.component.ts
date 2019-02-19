import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-second-sibling-via-service',
  template: `
  <div class="sibling">
    {{message}}
    <button (click)="newMessage()">New Message</button>
    </div>
  `,
  styles: []
})
export class SecondSiblingViaServiceComponent implements OnInit {

  message:string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }


}