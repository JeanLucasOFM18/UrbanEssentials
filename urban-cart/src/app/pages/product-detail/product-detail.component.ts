import { Component, OnInit } from '@angular/core';
import Product from '../../models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CartService } from '../../services/cart.service';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  product: Product | undefined;
  selectedSize: string = '';
  sizes: string[] = ['XS', 'S', 'M', 'L', 'XL'];
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
      this.getProduct(this.route.snapshot.params['productId']);
  }

  getProduct = (id: number) => {
    this.productService.getProduct(id).subscribe({
      next: (data) => {
        this.product = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching product:', err);
      }
    });
  }

  addToCart(producto: any) {
    this.cartService.addToCart(producto);
  }

  goBack() {
    history.back();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Esperas un poco a que cargue
  }
}
