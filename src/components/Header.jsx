import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Trang chủ" },
  { to: "/phones", label: "Điện thoại" },
  { to: "/laptops", label: "Máy tính" },
  { to: "/compare", label: "So sánh" },
  { to: "/consultation", label: "Tư vấn" },
  { to: "/articles", label: "Kiến thức" },
  { to: "/faq", label: "FAQ" },
];

export default function Header({ search, setSearch, onSearchSubmit }) {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 lg:px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-700 text-lg font-bold text-white shadow-soft">
            TG
          </div>
          <div>
            <div className="text-lg font-semibold text-slate-900">
              TechGuide
            </div>
            <div className="text-xs text-slate-500">
              Thông tin công nghệ rõ ràng – Tư vấn lựa chọn thông minh
            </div>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition ${isActive ? "bg-navy-700 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <form
          className="ml-auto flex w-full max-w-sm items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 shadow-sm lg:w-[340px]"
          onSubmit={onSearchSubmit}
          role="search"
        >
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Tìm điện thoại, laptop, bài viết..."
            className="w-full bg-transparent text-sm outline-none"
            aria-label="Tìm kiếm nội dung TechGuide"
          />
          <button
            type="submit"
            className="rounded-full bg-navy-700 px-3 py-1.5 text-sm font-semibold text-white"
          >
            Search
          </button>
        </form>
      </div>
      {location.pathname !== "/" && (
        <div className="border-t border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 lg:px-6">
          TechGuide tập trung vào nội dung minh họa cho mục đích học tập và GEO.
        </div>
      )}
    </header>
  );
}
