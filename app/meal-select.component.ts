import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-select',
  inputs: ['meal'],
  outputs: ['onClick'],
  template: `
  <div class="select-form">
    <h4>Details: {{meal.details}}</h4>
    <h4>Calories: {{meal.calories}}</h4>
    <button class="btn btn-warning" type="submit" (click)="mealClicked()">Edit Meal</button>
  </div>
  `
})

export class MealSelectComponent {
  public meal: Meal;
  public onClick: EventEmitter<Meal>
  constructor() {
    this.onClick = new EventEmitter();
  }
  mealClicked(){
    this.onClick.emit(this.meal);
  }

}
