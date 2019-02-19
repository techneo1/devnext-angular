import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-via-viewchild',
  template: `<div class="child">
  <p>child: {{message}}</p>
  </div>`,
  styles: []
})
export class ChildViaViewchildComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'message from Child!';
  }

  ngOnInit() {
  }

}