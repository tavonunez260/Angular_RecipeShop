import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false})
  nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false})
  amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(): void {
    const ingName: string = this.nameInputRef.nativeElement.value;
    const ingAmount: number = this.amountInputRef.nativeElement.value;
    const ingredient: Ingredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(ingredient);
  }

}
