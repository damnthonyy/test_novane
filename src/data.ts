export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    inStock: boolean;
  }
  
  export const products: Product[] = [
    { id: 1, name: 'Laptop 13"', category: 'Informatique', price: 899, inStock: true },
    { id: 2, name: 'Casque Bluetooth', category: 'Audio', price: 129, inStock: false },
    { id: 3, name: 'Clavier mécanique', category: 'Informatique', price: 79, inStock: true },
    { id: 4, name: 'Écran 27"', category: 'Informatique', price: 229, inStock: true },
    { id: 5, name: 'Souris ergonomique', category: 'Informatique', price: 59, inStock: false },
    { id: 6, name: 'Webcam HD', category: 'Informatique', price: 69, inStock: true },
    { id: 7, name: 'Enceinte portable', category: 'Audio', price: 99, inStock: true },
    { id: 8, name: 'SSD 1 To', category: 'Stockage', price: 119, inStock: true },
    { id: 9, name: 'Câble USB-C', category: 'Accessoires', price: 12, inStock: true },
    { id: 10, name: 'Batterie externe', category: 'Accessoires', price: 39, inStock: false }
  ];
  