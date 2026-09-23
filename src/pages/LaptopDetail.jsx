import React from "react";
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

export default function LaptopDetail({ products, articles }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  if (!product) return <p>Không tìm thấy sản phẩm.</p>;
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
      <SchemaMarkup data={buildFAQSchema(product.faq.slice(0, 5))} />
      <SchemaMarkup
        data={buildBreadcrumbSchema([
          { name: "Trang chủ", url: window.location.origin },
          { name: "Máy tính", url: `${window.location.origin}/laptops` },
          { name: product.name, url: canonical },
        ])}
      />
      <Breadcrumb
        items={[
          { name: "Trang chủ", to: "/" },
          { name: "Máy tính", to: "/laptops" },
          { name: product.name },
        ]}
      />
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-wide text-navy-700">
          Quick answer
        </p>
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
          {products
            .filter((item) => item.id !== id)
            .slice(0, 3)
            .map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
        </div>
      </section>
    </div>
  );
}
