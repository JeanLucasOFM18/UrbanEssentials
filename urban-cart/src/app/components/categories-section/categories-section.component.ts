import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.css'
})
export class CategoriesSectionComponent {

  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;

}
