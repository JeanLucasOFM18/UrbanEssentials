import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CategoriesSectionComponent } from "../../components/categories-section/categories-section.component";
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NavbarComponent, CategoriesSectionComponent, FooterComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categories = [
    {
      title: 'VESTUARIO',
      description: 'Descubre las últimas tendencias en moda urbana. Diseños versátiles, cómodos y con estilo para que te expreses a tu manera. Desde básicos atemporales hasta prendas modernas que marcan tendencia.',
      imageUrl: 'https://i.postimg.cc/rFfF4hnc/image.png'
    },
    {
      title: 'JOYERÍA',
      description: 'Elegancia en cada detalle. Encuentra piezas únicas que combinan brillo, sofisticación y personalidad. El complemento perfecto para elevar tu estilo en cualquier ocasión.',
      imageUrl: 'https://i.postimg.cc/3xJRkM33/image.png'
    },
    {
      title: 'TECNOLOGÍA',
      description: 'Innovación al alcance de tu día a día. Gadgets, dispositivos y accesorios inteligentes que hacen tu vida más conectada, productiva y entretenida. Funcionalidad con un toque de diseño moderno.',
      imageUrl: 'https://i.postimg.cc/c4zCj9Qh/image.png'
    }
  ];
}
