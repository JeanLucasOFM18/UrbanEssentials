import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly API_URL = "https://fakestoreapi.com/products";
  products: any[];

  constructor(private http: HttpClient) {
    this.products = [];
  }

  getProducts() {
    return this.http.get<any[]>(this.API_URL);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.API_URL}/${id}`);
  }
}
