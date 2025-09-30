interface Props {
    search: string;
    setSearch: (val: string) => void;
  }
  
  function SearchBar({ search, setSearch }: Props) {
    return (
      <div className="relative">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xl rounded-lg border border-slate-300 bg-white/80 backdrop-blur px-4 py-3 pr-10 shadow-sm outline-none ring-0 focus:border-sky-400 focus:shadow-md transition"
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">⌕</span>
      </div>
    );
  }
  
  export default SearchBar;
  
