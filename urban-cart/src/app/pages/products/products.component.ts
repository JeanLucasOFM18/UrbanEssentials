import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CartService } from '../../services/cart.service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  loading: boolean = true;

  products: any[] = [];

  filteredProducts: any[] = [];

  categorias: string[] = [
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics"
  ];

  categoriaSeleccionada: string = '';

  
  constructor(public productService: ProductService, private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
    this.route.queryParams.subscribe(params => {
    const categoria = params['categoria'];
    if (categoria) {
      this.categoriaSeleccionada = categoria;
      this.filteredProducts = this.products.filter(p => p.category === categoria);
    }
  });
  }

  getProducts = () => {
  this.productService.getProducts().subscribe({
    next: (data) => {
      this.products = data;
      this.filteredProducts = this.categoriaSeleccionada
        ? this.products.filter(p => p.category === this.categoriaSeleccionada)
        : [...data];
        this.loading = false;
    },
    error: (err) => {
      console.error('Error fetching products:', err);
    }
  });
}

  filtrarPorCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
    this.filteredProducts = categoria
      ? this.products.filter(p => p.category === categoria)
      : [...this.products];
  }

  addToCart(producto: any) {
    this.cartService.addToCart(producto);
  }
}
