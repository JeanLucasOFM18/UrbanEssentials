import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "products", component: ProductsComponent},
    {path: "categories", component: CategoriesComponent},
    {path: "products/:productId", component: ProductDetailComponent},
    {path: 'cart', component: CartComponent},
]
