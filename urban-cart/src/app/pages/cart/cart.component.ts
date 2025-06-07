import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
  this.cartItems = this.cartService.getCart();
  console.log('Carrito:', this.cartItems); // verifica que no esté vacío
}

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  comprar() {
  alert('¡Compra realizada con éxito!');

  this.cartService.clearCart();
  this.cartItems = [];
}
}
