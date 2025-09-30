import { useState } from "react";
import { products } from "./data";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";
import '../src/assets/styles/Global.css'

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Toutes");
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filtered = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (category === "Toutes" ? true : p.category === category))
    .sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800">Catalogue Produits</h1>
        <div className="mt-1 flex gap-3 text-sm text-slate-600">
          <span>{filtered.length} résultats visibles</span>
          <span>•</span>
          <span>⭐ Favoris : {favorites.length}</span>
        </div>
      </header>

      <div className="flex flex-col gap-3">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterBar category={category} setCategory={setCategory} sort={sort} setSort={setSort} />
      </div>

      <ProductList products={filtered} favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default App;

