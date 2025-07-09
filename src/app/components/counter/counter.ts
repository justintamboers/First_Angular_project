import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
  counterVal = signal(0);
  increment() {
    this.counterVal.update((testval) => testval + 1);
  }

  incrementX10() {
    this.counterVal.update((value) => value + 10);
  }

  decrement() {
    this.counterVal.update((val) => val - 1);
  }

  decrementX10() {
    this.counterVal.update((val) => val - 10);
  }

  reset() {
    this.counterVal.set(0);
  }
}
