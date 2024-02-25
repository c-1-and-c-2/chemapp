import {Component} from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroesComponent],
})
export class AppComponent {
  title = 'Organic Chemistry Product Predictor';
}
