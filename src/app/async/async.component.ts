import { Component, OnInit } from '@angular/core';

import { SampleService } from './sample.service';

@Component({
  selector: 'app-async',
  template: '',
  styles: [],
  providers: [SampleService]
})
export class AsyncComponent implements OnInit {

   constructor(private sampleService: SampleService) { }

  ngOnInit(): void {
    this.sampleService.getString().then(str => console.log(str));

    this.sampleService.getPromise1();
    this.sampleService.getObservable1();

    this.sampleService.getPromise2();
    this.sampleService.getObservable2().subscribe();

    const subscription = this.sampleService.getObservable3().subscribe(value => console.log("Case3 -- "+value));
    console.log("subscription: ", subscription);
    // .unsubscribe();

    this.sampleService.getPromise4();
    this.sampleService.getObservable4();
  }

}