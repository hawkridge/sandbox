import { Component } from '@angular/core';
import {BehaviorSubject, interval} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  val = interval(1000);
  title = 'sandbox';
  user = {
    name: 'Sorax',
    age: 341
  }
}
