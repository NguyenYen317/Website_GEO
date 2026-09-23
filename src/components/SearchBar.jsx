import React from "react";

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = "Tìm kiếm...",
}) {
  return (
    <form onSubmit={onSubmit} className="flex gap-2" role="search">
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-navy-400"
        aria-label={placeholder}
      />
      <button
        type="submit"
        className="rounded-2xl bg-navy-700 px-5 py-3 text-sm font-semibold text-white shadow-soft"
      >
        Tìm
      </button>
    </form>
  );
}
