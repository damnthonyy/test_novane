import type { Product } from "../data";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

function ProductList({ products, favorites, toggleFavorite }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          isFav={favorites.includes(p.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default ProductList;
