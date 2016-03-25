import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe ({
  name: "lowCal",
  pure: false
})
export class LowCalPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCalorieState = args[0];
    if(desiredCalorieState === "lowCal") {
      return input.filter((meal) => {
        return meal.lean;
      });
    } else if (desiredCalorieState === "notLowCal") {
      return input.filter((meal) => {
        return !meal.lean;
      });
    } else {
      return input;
    }
  }
}
