import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';

@Component({
  selector: 'app-test-obser',
  templateUrl: './test-obser.component.html',
  styleUrls: ['./test-obser.component.css'],
})
export class TestObserComponent implements OnInit {
  myObservable2 = from(['titi', 'toto', 'tutu']);

  myObservable3 = from(['titi', 'toto', 'tutu']);

  observer: any;
  constructor() {}

  ngOnInit() {
    if (this.observer) {
      this.observer.unsubscribe();
    }
    this.observer = this.myObservable2.subscribe(
      (value) => {
        console.log(value);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Fini');
      }
    );
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.unsubscribe();
    }
  }
}
