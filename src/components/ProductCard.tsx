import type { Product } from "../data";

interface Props {
  product: Product;
  isFav: boolean;
  toggleFavorite: (id: number) => void;
}

function ProductCard({ product, isFav, toggleFavorite }: Props) {
  return (
    <div className="group relative rounded-xl border border-slate-200 bg-white/80 backdrop-blur p-5 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-slate-800 text-lg">{product.name}</h3>
      <p className="text-sm text-slate-500">Catégorie : {product.category}</p>
      <p className="text-sm text-slate-700">Prix : {product.price} €</p>
      <p className={product.inStock ? "text-emerald-600" : "text-rose-600"}>
        {product.inStock ? "En stock" : "Rupture"}
      </p>
      <button
        onClick={() => toggleFavorite(product.id)}
        className="absolute top-3 right-3 text-xl hover:scale-110 transition-transform"
        aria-label={isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
        title={isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
      >
        <span className={isFav ? "text-amber-500" : "text-slate-400 group-hover:text-slate-600"}>
          {isFav ? "★" : "☆"}
        </span>
      </button>
    </div>
  );
}

export default ProductCard;
