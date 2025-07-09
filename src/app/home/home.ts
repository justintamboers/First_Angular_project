import { Component} from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  KeyUpHandler(event: KeyboardEvent) {
    console.log(`user typed the ${event.key} key`)
  }
}
