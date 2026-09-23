import React, { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import Seo from "../components/Seo";
import { phones } from "../data/products";
import { formatPrice, searchContent } from "../utils/search";

const brands = ["All", "Apple", "Samsung", "Xiaomi", "OPPO", "Google", "ASUS"];
const needs = [
  "All",
  "gaming",
  "camera",
  "battery",
  "study",
  "work",
  "daily",
  "portable",
];
const sorters = ["relevance", "price-asc", "price-desc"];

export default function Phones() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [brand, setBrand] = useState("All");
  const [need, setNeed] = useState("All");
  const [sort, setSort] = useState("relevance");
  const [priceRange, setPriceRange] = useState("All");
  const [ram, setRam] = useState("All");

  const filtered = useMemo(() => {
    const base = phones.filter((product) => {
      const matchBrand = brand === "All" || product.brand === brand;
      const matchNeed = need === "All" || product.suitableFor.includes(need);
      const matchPrice =
        priceRange === "All" ||
        (priceRange === "under10" && product.price < 10000000) ||
        (priceRange === "10to20" &&
          product.price >= 10000000 &&
          product.price < 20000000) ||
        (priceRange === "20plus" && product.price >= 20000000);
      const matchRam = ram === "All" || product.ram === ram;
      return matchBrand && matchNeed && matchPrice && matchRam;
    });

    const searched = searchContent(query, base);
    const sorted = [...searched];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    return sorted;
  }, [brand, need, priceRange, query, ram, sort]);

  return (
    <div>
      <Seo
        title="Điện thoại | TechGuide"
        description="Danh sách điện thoại TechGuide với search, filter và dữ liệu minh họa cho học tập."
        canonical={window.location.href}
      />
      <Breadcrumb
        items={[{ name: "Trang chủ", to: "/" }, { name: "Điện thoại" }]}
      />
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h1 className="text-3xl font-bold text-slate-900">Điện thoại</h1>
        <p className="mt-3 text-sm text-slate-600">
          Thông tin minh họa cho prototype. Giá hiển thị là giá tham khảo.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-5">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm theo tên, mô tả, tag..."
            className="rounded-2xl border border-slate-200 px-4 py-3"
          />
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3"
          >
            {brands.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3"
          >
            <option value="All">Tất cả giá</option>
            <option value="under10">Dưới 10 triệu</option>
            <option value="10to20">10–20 triệu</option>
            <option value="20plus">Trên 20 triệu</option>
          </select>
          <select
            value={ram}
            onChange={(e) => setRam(e.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3"
          >
            <option value="All">Tất cả RAM</option>
            <option>8GB</option>
            <option>12GB</option>
            <option>16GB</option>
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3"
          >
            {sorters.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {needs.map((item) => (
            <button
              key={item}
              onClick={() => setNeed(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${need === item ? "bg-navy-700 text-white" : "bg-slate-100 text-slate-700"}`}
            >
              {item === "All" ? "Tất cả nhu cầu" : item}
            </button>
          ))}
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
