import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Minimalist Analog Watch',
      price: 109,
      color: 'Black',
      available: 'Available',
      image: '/assets/products/product-image-1.jpeg'
    },
    {
      id: 2,
      name: 'High Sense Ultra HD Smart TV',
      price: 3339,
      color: 'Black',
      available: "Available",
      image: '/assets/products/product-image-2.jpeg'
    },
    {
      id: 3,
      name: 'Apple iPhone 12',
      price: 1855,
      color: 'Black',
      available: 'Not Available',
      image: '/assets/products/product-image-3.jpeg'
    },
    {
      id: 4,
      name: 'LG Fully Automatic Washing Machine',
      price: 1765,
      color: 'White',
      available: 'Available',
      image: '/assets/products/product-image-4.jpeg'
    },
    {
      id: 5,
      name: 'LG Refrigerator With Door Cooling',
      price: 2815,
      color: "White",
      available: 'Not Available',
      image: '/assets/products/product-image-5.jpeg'
    },
    {
      id: 6,
      name: 'Dell Inspiron One 27 Ryzen 7',
      price: 2145,
      color: 'White',
      available: "Available",
      image: '/assets/products/product-image-6.jpeg'
    }
  ];
}
