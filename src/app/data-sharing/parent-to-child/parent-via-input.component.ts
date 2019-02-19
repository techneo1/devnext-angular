import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-via-input',
  template: `<div class="parent">
    <p>parent: {{parentMessage}}</p>
    <app-child-via-input [childMessage]="parentMessage"></app-child-via-input>
  </div>`,
  styles: []
})
export class ParentViaInputComponent implements OnInit {

  parentMessage: string;
  constructor() {
    this.parentMessage = "Message from parent";
  }

  ngOnInit() {
  }

}