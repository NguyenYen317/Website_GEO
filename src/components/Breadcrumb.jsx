import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ items }) {
  if (!items?.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-2">
            {index > 0 && <span>/</span>}
            {item.to ? (
              <Link to={item.to} className="hover:text-navy-700">
                {item.name}
              </Link>
            ) : (
              <span className="text-slate-700">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
