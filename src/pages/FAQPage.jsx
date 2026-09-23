import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import FAQ from "../components/FAQ";
import Seo from "../components/Seo";
import SchemaMarkup from "../components/SchemaMarkup";
import { buildBreadcrumbSchema, buildFAQSchema } from "../utils/schema";

export default function FAQPage({ faqs, articles }) {
  return (
    <div className="space-y-6">
      <Seo
        title="FAQ | TechGuide"
        description="Các câu hỏi thường gặp về điện thoại, máy tính và lựa chọn thiết bị."
        canonical={window.location.href}
      />
      <SchemaMarkup data={buildFAQSchema(faqs.slice(0, 10))} />
      <SchemaMarkup
        data={buildBreadcrumbSchema([
          { name: "Trang chủ", url: window.location.origin },
          { name: "FAQ", url: window.location.href },
        ])}
      />
      <Breadcrumb items={[{ name: "Trang chủ", to: "/" }, { name: "FAQ" }]} />
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h1 className="text-3xl font-bold text-slate-900">FAQ</h1>
        <p className="mt-3 text-sm text-slate-600">
          Câu hỏi tự nhiên, câu trả lời ngắn gọn và dễ trích xuất cho AI Search.
        </p>
        <div className="mt-6">
          <FAQ items={faqs} />
        </div>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-semibold text-slate-900">
          Bài viết liên quan
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {articles.slice(0, 4).map((article) => (
            <Link
              key={article.slug}
              to={`/articles/${article.slug}`}
              className="rounded-2xl bg-slate-50 p-4"
            >
              <div className="text-sm font-semibold text-navy-700">
                {article.category}
              </div>
              <div className="mt-1 font-semibold text-slate-900">
                {article.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
