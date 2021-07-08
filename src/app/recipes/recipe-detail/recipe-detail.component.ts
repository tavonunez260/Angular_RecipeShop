import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {relativeToRootDirs} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = Number(params['id']);
        this.recipe = this.recipeService.getRecipe(this.id);
      });
  }

  addToShoppingList(event: Event) {
    event.preventDefault();
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  editRecipe(event: Event) {
    event.preventDefault();
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
