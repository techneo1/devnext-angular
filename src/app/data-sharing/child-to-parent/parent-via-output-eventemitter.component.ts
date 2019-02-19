import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-via-output-eventemitter',
  template: `
  <div class="parent">
    Counter: {{counter}}
    <app-child-via-output-eventemitter (counterEvent)="receiveCount($event)"></app-child-via-output-eventemitter>
    </div>
  `,
  styles: []
})
export class ParentViaOutputEventemitterComponent implements OnInit {

  counter: number;
  constructor() { }

  ngOnInit() {
  }


  receiveCount($event) {
    this.counter = $event
  }
}