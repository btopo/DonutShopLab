import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Details, DonutService } from '../donut.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  totalPrice: number = this.items.length * 1 ;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  public clearCart() {
    this.cartService.clearCart();
    window.alert('Your cart has been emptied!');
    location.reload();
  }

  public getItems() {
    this.cartService.getItems();
  }
  public removeFromCart(items: Details[], item: Details) {

    this.items = this.cartService.getItems();

    for (var i = 0; i < items.length; i++) {

      if (items[i].id == item.id) {
        items.splice(i, 1);
        window.alert('Your donut has been removed from the cart!');
        return;
      }
    }

  }

}
