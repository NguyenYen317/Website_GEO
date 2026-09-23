import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-wide text-navy-700">
        {article.category}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">
        <Link to={`/articles/${article.slug}`} className="hover:text-navy-700">
          {article.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-slate-600">{article.description}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
        <span>{article.date}</span>
        <Link
          to={`/articles/${article.slug}`}
          className="font-semibold text-navy-700"
        >
          Đọc tiếp
        </Link>
      </div>
    </article>
  );
}
