import { products } from "../data";

interface Props {
  category: string;
  setCategory: (val: string) => void;
  sort: "asc" | "desc";
  setSort: (val: "asc" | "desc") => void;
}

function FilterBar({ category, setCategory, sort, setSort }: Props) {
  const categories = ["Toutes", ...new Set(products.map((p) => p.category))];

  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      <div className="relative">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="appearance-none rounded-lg border border-slate-300 bg-white/80 backdrop-blur px-3 py-2 pr-9 shadow-sm outline-none focus:border-sky-400 focus:shadow-md transition"
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">▾</span>
      </div>

      <div className="relative">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as "asc" | "desc")}
          className="appearance-none rounded-lg border border-slate-300 bg-white/80 backdrop-blur px-3 py-2 pr-9 shadow-sm outline-none focus:border-sky-400 focus:shadow-md transition"
        >
          <option value="asc">Prix croissant</option>
          <option value="desc">Prix décroissant</option>
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">▾</span>
      </div>
    </div>
  );
}

export default FilterBar;
