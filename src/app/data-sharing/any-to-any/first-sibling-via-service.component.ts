import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-first-sibling-via-service',
  template: `
  <div class="sibling">
    {{message}}
  </div>
  `,
  styles: []
})
export class FirstSiblingViaServiceComponent implements OnInit {
  message: string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}