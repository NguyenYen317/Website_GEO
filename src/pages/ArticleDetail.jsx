import React from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import FAQ from "../components/FAQ";
import Seo from "../components/Seo";
import SchemaMarkup from "../components/SchemaMarkup";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
} from "../utils/schema";

export default function ArticleDetail({ articles, products }) {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  if (!article) return <p>Không tìm thấy bài viết.</p>;
  const canonical = window.location.href;

  return (
    <div className="space-y-8">
      <Seo
        title={`${article.title} | TechGuide`}
        description={article.description}
        canonical={canonical}
        type="article"
      />
      <SchemaMarkup data={buildArticleSchema(article, canonical)} />
      <SchemaMarkup data={buildFAQSchema(article.faq)} />
      <SchemaMarkup
        data={buildBreadcrumbSchema([
          { name: "Trang chủ", url: window.location.origin },
          { name: "Kiến thức", url: `${window.location.origin}/articles` },
          { name: article.title, url: canonical },
        ])}
      />
      <Breadcrumb
        items={[
          { name: "Trang chủ", to: "/" },
          { name: "Kiến thức", to: "/articles" },
          { name: article.title },
        ]}
      />
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-wide text-navy-700">
          Tóm tắt
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          {article.title}
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          {article.date} • {article.author}
        </p>
        <p className="mt-4 rounded-2xl bg-navy-50 p-4 text-slate-800">
          {article.summary}
        </p>
        {article.content.sections.map((section) => (
          <section key={section.h2} className="mt-8">
            <h2 className="text-2xl font-semibold text-slate-900">
              {section.h2}
            </h2>
            {section.h3 && (
              <h3 className="mt-2 text-lg font-semibold text-slate-800">
                {section.h3}
              </h3>
            )}
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-slate-600">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        {article.content.bullets && (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-slate-900">
              Điểm chính
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              {article.content.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </section>
        )}
        {article.content.table && (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-slate-900">
              Bảng tóm tắt
            </h2>
            <div className="mt-3 overflow-x-auto rounded-3xl border border-slate-200">
              <table className="min-w-full text-left text-sm">
                <tbody>
                  {article.content.table.map((row) => (
                    <tr
                      key={row[0]}
                      className="border-t border-slate-100 first:border-t-0"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-medium text-slate-700">
                        {row[0]}
                      </th>
                      <td className="px-4 py-3 text-slate-600">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
          <div className="mt-4">
            <FAQ items={article.faq} />
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Nguồn tham khảo
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {article.sources.map((source) => (
              <li key={source.url || source}>
                {source.url ? (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-navy-700 underline underline-offset-2"
                  >
                    {source.name}
                  </a>
                ) : (
                  source
                )}
                {source.accessedAt && (
                  <span className="ml-2 text-slate-500">
                    (truy cập {source.accessedAt})
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-slate-500">
            Bài viết được biên soạn lại cho mục đích học tập; nguồn liên kết
            dùng để đối chiếu khái niệm và tài liệu nền.
          </p>
        </section>
      </article>
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">
          Related articles
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {article.related.map((slugValue) => {
            const related = articles.find((item) => item.slug === slugValue);
            return related ? (
              <Link
                key={related.slug}
                to={`/articles/${related.slug}`}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft"
              >
                <div className="text-sm font-semibold text-navy-700">
                  {related.category}
                </div>
                <div className="mt-2 text-lg font-semibold text-slate-900">
                  {related.title}
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  {related.description}
                </div>
              </Link>
            ) : null;
          })}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-slate-900">
          Sản phẩm liên quan
        </h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {products.slice(0, 4).map((product) => (
            <Link
              key={product.id}
              to={`/${product.category === "phone" ? "phones" : "laptops"}/${product.id}`}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
            >
              {product.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
