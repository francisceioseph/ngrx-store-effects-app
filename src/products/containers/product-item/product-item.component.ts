import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { Pizza } from "../../models/pizza.model";
import { Topping } from "../../models/topping.model";

import * as productsStoreModule from "../../store";

@Component({
  selector: "product-item",
  styleUrls: ["product-item.component.scss"],
  template: `
    <div 
      class="product-item">
      <pizza-form
        [pizza]="pizza$ | async"
        [toppings]="toppings$ | async"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)">
        <pizza-display
          [pizza]="visualise">
        </pizza-display>
      </pizza-form>
    </div>
  `
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  visualise: Pizza;
  toppings$: Observable<Topping[]>;

  constructor(private store: Store<productsStoreModule.ProductState>) {}

  ngOnInit() {
    this.store.dispatch(new productsStoreModule.LoadToppings());
    this.pizza$ = this.store.select(productsStoreModule.getSelectedPizza);
    this.toppings$ = this.store.select(productsStoreModule.getAllToppings);
  }

  onSelect(event: number[]) {}

  onCreate(event: Pizza) {}

  onUpdate(event: Pizza) {}

  onRemove(event: Pizza) {
    const remove = window.confirm("Are you sure?");
    if (remove) {
    }
  }
}
