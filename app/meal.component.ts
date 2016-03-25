import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div class="meal">
   <h3>{{ meal.name }}</h3>
  </div>
  `
})

//leaf controller//

export class MealComponent {
  public meal: Meal;
}
