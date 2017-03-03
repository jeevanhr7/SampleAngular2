import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-deatil',
  templateUrl: './recipe-deatil.component.html'
})
export class RecipeDeatilComponent implements OnInit {
@Input() selectedRecipe:Recipe;
  constructor() { }

  ngOnInit() {
  }

}
