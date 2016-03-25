import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h1>Create Meal:</h1>
    <input placeholder="Food Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Details" class="col-sm-8 input-lg" #newDetails>
    <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
    <button (click)="addMeal(newName, newDetails, newCalories)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement){
    var newMeal = new Meal(newName.value, newDetails.value, parseInt(newCalories.value));
    console.log(newMeal);
    this.checkLowCal(newMeal);
    this.onSubmitNewMeal.emit(newMeal);
    newName.value = null;
    newDetails.value = null;
    newCalories.value = null;
  }
  checkLowCal(meal: Meal) {
    if(meal.calories <= 300) {
      meal.lean = true;
    } else {
      meal.lean = false;
    }
  }
}
