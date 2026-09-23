import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import ArticleCard from "../components/ArticleCard";
import FAQ from "../components/FAQ";
import Seo from "../components/Seo";
import SchemaMarkup from "../components/SchemaMarkup";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildWebSiteSchema,
} from "../utils/schema";
import { formatPrice } from "../utils/search";

const categories = [
  {
    name: "Điện thoại",
    to: "/phones",
    description: "Tìm máy phù hợp theo nhu cầu và ngân sách.",
  },
  {
    name: "Máy tính",
    to: "/laptops",
    description: "Chọn laptop cho học tập, làm việc và gaming.",
  },
  {
    name: "So sánh",
    to: "/compare",
    description: "Đặt hai hoặc ba thiết bị lên cùng một bảng.",
  },
  {
    name: "Tư vấn",
    to: "/consultation",
    description: "Nhận gợi ý dựa trên nhu cầu sử dụng.",
  },
  {
    name: "Kiến thức",
    to: "/articles",
    description: "Bài viết giải thích rõ các khái niệm công nghệ.",
  },
];

export default function Home({ phones, laptops, articles, faqs }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const featuredProducts = [...phones.slice(0, 3), ...laptops.slice(0, 3)];
  const featuredArticles = articles.slice(0, 4);
  const featuredFaqs = faqs.slice(0, 4);

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    const match = [...phones, ...laptops, ...articles, ...faqs].find((item) => {
      const haystack = [
        item.name,
        item.title,
        item.description,
        item.question,
        item.answer,
        item.summary,
        item.tags?.join(" "),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });

    if (!match) return;
    if (match.category === "phone") navigate(`/phones/${match.id}`);
    else if (match.category === "laptop") navigate(`/laptops/${match.id}`);
    else if (match.slug) navigate(`/articles/${match.slug}`);
    else navigate("/faq");
  };

  return (
    <div className="space-y-12">
      <Seo
        title="TechGuide | Thông tin công nghệ rõ ràng"
        description="TechGuide là website thông tin và tư vấn điện thoại, máy tính, tối ưu GEO với nội dung rõ ràng, cấu trúc tốt và dữ liệu minh họa."
        canonical={window.location.href}
      />
      <SchemaMarkup
        data={buildWebSiteSchema({
          name: "TechGuide",
          url: window.location.origin,
          description: "Website thông tin và tư vấn công nghệ",
          searchUrl: `${window.location.origin}/?q={search_term_string}`,
        })}
      />
      <SchemaMarkup
        data={buildBreadcrumbSchema([
          { name: "Trang chủ", url: window.location.href },
        ])}
      />
      <Breadcrumb items={[{ name: "Trang chủ" }]} />

      <section className="grid gap-8 rounded-[2rem] bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 px-6 py-12 text-white shadow-soft lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-100">
            Website thông tin và tư vấn
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight lg:text-6xl">
            Thông tin công nghệ rõ ràng, giúp bạn chọn đúng thiết bị
          </h1>
          <p className="max-w-2xl text-lg text-slate-200">
            Khám phá thông số, so sánh điện thoại và máy tính, đồng thời tìm câu
            trả lời phù hợp với nhu cầu sử dụng của bạn.
          </p>
          <div className="max-w-2xl">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onSubmit={handleSearch}
              placeholder="Tìm điện thoại, máy tính, bài viết..."
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/phones"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy-900"
            >
              Khám phá điện thoại
            </Link>
            <Link
              to="/laptops"
              className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white"
            >
              Khám phá máy tính
            </Link>
          </div>
        </div>
        
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-slate-900">Danh mục</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.to}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1"
            >
              <div className="text-lg font-semibold text-slate-900">
                {category.name}
              </div>
              <p className="mt-2 text-sm text-slate-600">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Sản phẩm nổi bật
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Dữ liệu minh họa đã được cập nhật theo thế hệ sản phẩm gần đây,
              phục vụ mục đích học tập và prototype.
            </p>
          </div>
          <Link to="/compare" className="text-sm font-semibold text-navy-700">
            So sánh sản phẩm
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Bài viết nổi bật
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Bài viết được viết ngắn gọn, có heading, bullet và FAQ.
            </p>
          </div>
          <Link to="/articles" className="text-sm font-semibold text-navy-700">
            Xem tất cả
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">FAQ nổi bật</h2>
          <p className="mt-2 text-sm text-slate-600">
            Câu hỏi tự nhiên, câu trả lời ngắn và trực tiếp.
          </p>
          <div className="mt-5 space-y-3">
            {featuredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
              >
                <div className="font-semibold text-slate-900">
                  {faq.question}
                </div>
                <div className="mt-2 text-sm text-slate-600">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-slate-900">
            Dữ liệu tham khảo
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Website sử dụng dữ liệu minh họa cho prototype. Giá được hiển thị
            dưới dạng giá tham khảo.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              ["Điện thoại", phones.length],
              ["Máy tính", laptops.length],
              ["Bài viết", articles.length],
              ["FAQ", faqs.length],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-slate-50 p-4">
                <div className="text-sm text-slate-500">{label}</div>
                <div className="mt-1 text-xl font-semibold text-slate-900">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
