import { Component, OnInit ,EventEmitter ,Output} from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[];
@Output() recipeSelected=new EventEmitter<Recipe>();
recipe=new Recipe('Dummy','Dummy', 'https://www.iconexperience.com/_img/g_collection_png/standard/256x256/crash_test_dummy.png')
  constructor() { }

  ngOnInit() {
  }
  onSelcected(recipe:Recipe){
  
     this.recipeSelected.emit(recipe);

  }

}
