import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import {LowCalPipe} from './low-cal.pipe';
import { MealSelectComponent } from './meal-select.component';

//branch view "decorator"//

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [LowCalPipe],
  directives: [MealComponent, MealSelectComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option value="lowCal">Show Low Calories</option>
    <option value="notLowCal">Show Not Low Calories</option>
  </select>
  <meal-display *ngFor="#currentMeal of mealList | lowCal:filterLowCal"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
  </meal-display>
  <meal-select *ngIf="selectedMeal" [meal]="selectedMeal" (onClick)="mealToEdit = selectedMeal">
  </meal-select>
  <edit-meal-details *ngIf="mealToEdit" [meal]="mealToEdit">
  </edit-meal-details>
  <button class="btn btn-warning" *ngIf="mealToEdit" (click)="editToggle()">Done</button>
  <new-meal (onSubmitNewMeal)="pushMeal($event)"></new-meal>
  `
})

//branch controller//

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public mealToEdit: Meal;
  public selectedMeal: Meal;
  public filterLowCal: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  pushMeal(newMeal : Meal): void {
    this.mealList.push(newMeal);
  }
  onChange(filterOption) {
    this.filterLowCal = filterOption;
  }
  editToggle() {
    this.mealToEdit = null;
  }
}
