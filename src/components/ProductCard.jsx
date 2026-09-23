import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/search";

export default function ProductCard({ product, compareLink = "/compare" }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1">
      <Link
        to={`/${product.category === "phone" ? "phones" : "laptops"}/${product.id}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover"
          loading="lazy"
          width="960"
          height="720"
        />
      </Link>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
            {product.brand}
          </span>
          <span className="text-sm font-semibold text-slate-700">
            {formatPrice(product.price)}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            <Link
              to={`/${product.category === "phone" ? "phones" : "laptops"}/${product.id}`}
              className="hover:text-navy-700"
            >
              {product.name}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-slate-600">{product.description}</p>
        </div>
        <ul className="space-y-1 text-sm text-slate-600">
          <li>{product.display}</li>
          <li>{product.processor}</li>
          <li>
            {product.ram} • {product.storage}
          </li>
        </ul>
        <div className="flex flex-wrap gap-2">
          <Link
            to={`/${product.category === "phone" ? "phones" : "laptops"}/${product.id}`}
            className="rounded-full bg-navy-700 px-4 py-2 text-sm font-semibold text-white"
          >
            Xem chi tiết
          </Link>
          <Link
            to={`${compareLink}?ids=${product.id}`}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
          >
            So sánh
          </Link>
        </div>
      </div>
    </article>
  );
}
