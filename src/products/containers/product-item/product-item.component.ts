import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { tap } from "rxjs/operators";

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
          [pizza]="visualise$ | async ">
        </pizza-display>
      </pizza-form>
    </div>
  `
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  visualise$: Observable<Pizza>;
  toppings$: Observable<Topping[]>;

  constructor(private store: Store<productsStoreModule.ProductState>) {}

  ngOnInit() {
    this.pizza$ = this.store.select(productsStoreModule.getSelectedPizza).pipe(
      tap((pizza: Pizza = null) => {
        const pizzaExists = !!(pizza && pizza.toppings);
        const toppings = pizzaExists
          ? pizza.toppings.map(topping => topping.id)
          : [];

        this.store.dispatch(
          new productsStoreModule.VisualiseToppings(toppings)
        );
      })
    );
    this.toppings$ = this.store.select(productsStoreModule.getAllToppings);
    this.visualise$ = this.store.select(productsStoreModule.getPizzaVisualized);
  }

  onSelect(event: number[]) {
    this.store.dispatch(new productsStoreModule.VisualiseToppings(event));
  }

  onCreate(event: Pizza) {
    this.store.dispatch(new productsStoreModule.CreatePizza(event));
  }

  onUpdate(event: Pizza) {
    this.store.dispatch(new productsStoreModule.UpdatePizza(event));
  }

  onRemove(event: Pizza) {
    const remove = window.confirm("Are you sure?");
    if (remove) {
      this.store.dispatch(new productsStoreModule.DeletePizza(event));
    }
  }
}
