import React, { useMemo, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import Seo from "../components/Seo";
import { laptops } from "../data/products";
import { searchContent } from "../utils/search";

const needs = [
  "All",
  "gaming",
  "camera",
  "battery",
  "study",
  "work",
  "portable",
];

export default function Laptops() {
  const [query, setQuery] = useState("");
  const [need, setNeed] = useState("All");
  const [sort, setSort] = useState("relevance");

  const filtered = useMemo(() => {
    const base = laptops.filter(
      (product) => need === "All" || product.suitableFor.includes(need),
    );
    const searched = searchContent(query, base);
    const sorted = [...searched];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    return sorted;
  }, [need, query, sort]);

  return (
    <div>
      <Seo
        title="Máy tính | TechGuide"
        description="Danh sách laptop TechGuide với search, filter và dữ liệu minh họa."
        canonical={window.location.href}
      />
      <Breadcrumb
        items={[{ name: "Trang chủ", to: "/" }, { name: "Máy tính" }]}
      />
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h1 className="text-3xl font-bold text-slate-900">Máy tính</h1>
        <p className="mt-3 text-sm text-slate-600">
          Thông tin minh họa cho prototype. Giá hiển thị là giá tham khảo.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm theo tên, mô tả, tag..."
            className="rounded-2xl border border-slate-200 px-4 py-3"
          />
          <select
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3"
          >
            {needs.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3"
          >
            <option value="relevance">relevance</option>
            <option value="price-asc">price-asc</option>
            <option value="price-desc">price-desc</option>
          </select>
        </div>
      </section>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-500">
        Đã tìm thấy {filtered.length} sản phẩm phù hợp.
      </p>
    </div>
  );
}
