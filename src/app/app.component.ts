import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from "./shopping-list/shopping-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ShoppingListService]
})
export class AppComponent {
  title = 'my-first-project';
  // loadedFeature: string = 'recipe';

  constructor() { }

  ngOnInit(): void {
  }

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }

}
