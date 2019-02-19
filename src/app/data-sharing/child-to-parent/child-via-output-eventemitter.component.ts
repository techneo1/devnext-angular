import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-via-output-eventemitter',
  template: `
  <div class="child">
    <button (click)="incrementCounter()">Increment counter</button>
    </div>
  `,
  styles: []
})
export class ChildViaOutputEventemitterComponent implements OnInit {

  counter: number = 0;
  @Output() counterEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }


  incrementCounter() {
    this.counterEvent.emit(this.counter++);
  }
}