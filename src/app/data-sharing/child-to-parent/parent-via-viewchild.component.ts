import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildViaViewchildComponent } from './child-via-viewchild.component';

@Component({
  selector: 'app-parent-via-viewchild',
  template: `<div class="parent">
  <p>parent: {{messageFromChild}}</p>
  <app-child-via-viewchild></app-child-via-viewchild>
  </div>`,
  styles: []
})
export class ParentViaViewchildComponent implements OnInit {
  @ViewChild(ChildViaViewchildComponent) child;
  messageFromChild: string; 

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.messageFromChild = this.child.message ;
  }

}