import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="meal-form">
      <h1>Edit This Meal: </h1>
      <input [(ngModel)]="meal.name" class="col-sm-8 input-lg"/>
      <input [(ngModel)]="meal.details" class="col-sm-8 input-lg"/>
      <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg"/>
    </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
