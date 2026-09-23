import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import Breadcrumb from "../components/Breadcrumb";
import Seo from "../components/Seo";
import { searchContent } from "../utils/search";

export default function Articles({ articles }) {
  const [query, setQuery] = useState("");
  const filtered = searchContent(query, articles);

  return (
    <div className="space-y-6">
      <Seo
        title="Kiến thức công nghệ | TechGuide"
        description="Bài viết công nghệ ngắn gọn, có cấu trúc rõ ràng và FAQ."
        canonical={window.location.href}
      />
      <Breadcrumb
        items={[{ name: "Trang chủ", to: "/" }, { name: "Kiến thức" }]}
      />
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h1 className="text-3xl font-bold text-slate-900">
          Kiến thức công nghệ
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Các bài viết giải thích rõ ràng để người dùng và AI Search dễ hiểu.
        </p>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm bài viết..."
          className="mt-5 w-full rounded-2xl border border-slate-200 px-4 py-3"
        />
      </section>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
      <div className="text-sm text-slate-500">
        Đã hiển thị {filtered.length} bài viết.
      </div>
    </div>
  );
}
