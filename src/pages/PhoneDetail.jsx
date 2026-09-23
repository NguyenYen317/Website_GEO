import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import FAQ from "../components/FAQ";
import ProductCard from "../components/ProductCard";
import Seo from "../components/Seo";
import SchemaMarkup from "../components/SchemaMarkup";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildProductSchema,
} from "../utils/schema";
import { formatPrice } from "../utils/search";

export default function PhoneDetail({ products, articles, faqs }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== id).slice(0, 3),
    [id, products],
  );
  const relatedArticles = articles.slice(0, 2);

  if (!product) return <p>Không tìm thấy sản phẩm.</p>;

  const schemaFaqs = product.faq.slice(0, 5);
  const canonical = window.location.href;

  return (
    <div className="space-y-8">
      <Seo
        title={`${product.name} | TechGuide`}
        description={product.description}
        canonical={canonical}
        image={product.image}
        type="article"
      />
      <SchemaMarkup data={buildProductSchema(product, canonical)} />
      <SchemaMarkup data={buildFAQSchema(schemaFaqs)} />
      <SchemaMarkup
        data={buildBreadcrumbSchema([
          { name: "Trang chủ", url: window.location.origin },
          { name: "Điện thoại", url: `${window.location.origin}/phones` },
          { name: product.name, url: canonical },
        ])}
      />
      <Breadcrumb
        items={[
          { name: "Trang chủ", to: "/" },
          { name: "Điện thoại", to: "/phones" },
          { name: product.name },
        ]}
      />
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-wide text-navy-700"></p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          {product.name}
        </h1>
        <p className="mt-4 rounded-2xl bg-navy-50 p-4 text-slate-800">
          {product.quickAnswer}
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <img
            src={product.image}
            alt={product.name}
            width="960"
            height="720"
            loading="lazy"
            className="rounded-3xl object-cover"
          />
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 text-sm text-slate-600">
              <span className="rounded-full bg-slate-100 px-3 py-1">
                {product.brand}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1">
                {product.releaseDate}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1">
                Giá tham khảo: {formatPrice(product.price)}
              </span>
            </div>
            <p className="text-slate-600">{product.description}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/compare"
                className="rounded-full bg-navy-700 px-5 py-3 text-sm font-semibold text-white"
              >
                So sánh sản phẩm này
              </Link>
              <Link
                to="/consultation"
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700"
              >
                Nhận tư vấn
              </Link>
            </div>
          </div>
        </div>
        <h2 className="mt-8 text-2xl font-semibold text-slate-900">
          Thông số kỹ thuật
        </h2>
        <div className="mt-4 overflow-x-auto rounded-3xl border border-slate-200">
          <table className="min-w-full text-left text-sm">
            <tbody>
              {[
                ["Hãng", product.brand],
                ["Model", product.name],
                ["Ngày ra mắt", product.releaseDate],
                ["Hệ điều hành", product.os],
                ["Màn hình", product.display],
                ["Chip", product.processor],
                ["RAM", product.ram],
                ["Bộ nhớ", product.storage],
                ["Camera", product.camera],
                ["Pin", product.battery],
                ["Trọng lượng", product.weight],
                ["Kết nối", product.connectivity],
              ].map(([label, value]) => (
                <tr
                  key={label}
                  className="border-t border-slate-100 first:border-t-0"
                >
                  <th className="w-1/3 bg-slate-50 px-4 py-3 font-medium text-slate-700">
                    {label}
                  </th>
                  <td className="px-4 py-3 text-slate-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Điểm nổi bật
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              {product.pros.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Phù hợp với ai?
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              {product.suitableFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Ưu điểm</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              {product.pros.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Hạn chế</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              {product.cons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
          <div className="mt-4">
            <FAQ items={product.faq} />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Nguồn thông tin
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {product.sources.map((source) => (
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
          
          
        </div>
      </article>

      <section>
        <h2 className="text-2xl font-semibold text-slate-900">
          Sản phẩm liên quan
        </h2>
        <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-900">
          Bài viết liên quan
        </h2>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          {relatedArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/articles/${article.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft"
            >
              <div className="text-sm font-semibold text-navy-700">
                {article.category}
              </div>
              <div className="mt-2 text-lg font-semibold text-slate-900">
                {article.title}
              </div>
              <div className="mt-2 text-sm text-slate-600">
                {article.description}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
