import { Component } from '@angular/core';
import { BrandComponent } from '../../components/brand/brand.component';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BrandComponent, CategoriesComponent, NavbarComponent, RouterLink, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories = [
    {
      title: "MUJER",
      url: "https://i.postimg.cc/5tKh3XFK/descarga-1.png",
      categoria: "women's clothing"
    },
    {
      title: "HOMBRE",
      url: "https://i.postimg.cc/FH3zwQxx/image.png",
      categoria: "men's clothing"
    },
    {
      title: "JOYERÍA",
      url: "https://i.postimg.cc/VvW4KhVs/descarga-4.png",
      categoria: "jewelery"
    },
    {
      title: "TECNOLOGÍA",
      url: "https://i.postimg.cc/ncQhQtNt/image.png",
      categoria: "electronics"
    }
  ]
}
