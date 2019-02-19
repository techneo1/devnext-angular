import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-via-input',
  template:
    `<div class="child">
    <p>child: {{childMessage}}</p>
  </div>`,
  styles:[]
})
export class ChildViaInputComponent implements OnInit {
  @Input() childMessage: string;
  constructor() { }

  ngOnInit() {
  }

}