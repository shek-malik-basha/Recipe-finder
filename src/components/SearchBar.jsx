function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mx-auto mt-10 max-w-2xl px-10">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-full border px-6 py-4 outline-none focus:border-red-500"
      />
    </div>
  );
}

export default SearchBar;