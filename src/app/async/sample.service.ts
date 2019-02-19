import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SampleService {

  constructor() { }
  getString(): Promise<string> {
    return Promise.resolve("tests");
  }

  getPromise1(): Promise<void> {
    return new Promise((resolve) => {
      resolve(5);
    }).then(value => console.log("Case1 -- Promise: " + value));
  }

  getObservable1(): any {
    return new Observable((observer) => {
      observer.next(5);
      observer.next(10);
    }).subscribe(value => console.log("Case1 -- Observable: " + value));
  }


  getPromise2(): Promise<void> {
    return new Promise(() => {
      console.log('Case2 -- Promise was called!');
    });
  }

  getObservable2(): Observable<void> {
    return new Observable(() => {
      console.log('Case2 -- Observable was called!');
    });
  }

  getObservable3(): Observable<number> {
    return new Observable((observer) => {
      let i = 0;
      const token = setInterval(() => {
        observer.next(i++);
      }, 1000);

      return () => clearInterval(token);
    });
  }

  getPromise4(): Promise<void> {
    return new Promise((resolve) => {
      resolve(100);
    }).then(value => console.log("Case4 -- Promise: " + value));
  }

  getObservable4(): any {
    return new Observable((observer) => {
      observer.next(100);
    }).subscribe(value => console.log("Case4 -- Observable: " + value));
  }

}