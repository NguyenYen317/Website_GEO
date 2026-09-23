import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import Seo from "../components/Seo";
import { recommendProducts } from "../utils/recommendation";

export default function Consultation({ products }) {
  const [form, setForm] = useState({
    budget: "10-15m",
    need: "study",
    gaming: "medium",
    camera: "medium",
    battery: "medium",
    study: "yes",
    work: "yes",
    size: "medium",
  });
  const [results, setResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setResults(recommendProducts(products, form));
  };

  return (
    <div className="space-y-6">
      <Seo
        title="Tư vấn chọn thiết bị | TechGuide"
        description="Form tư vấn chọn điện thoại và máy tính dựa trên dữ liệu local."
        canonical={window.location.href}
      />
      <Breadcrumb
        items={[{ name: "Trang chủ", to: "/" }, { name: "Tư vấn" }]}
      />
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h1 className="text-3xl font-bold text-slate-900">
          Tư vấn lựa chọn thiết bị
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Chọn nhu cầu của bạn, hệ thống sẽ gợi ý sản phẩm phù hợp từ dữ liệu
          local.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 grid gap-4 lg:grid-cols-2"
        >
          {[
            [
              "budget",
              "Ngân sách",
              [
                ["under-10m", "Dưới 10 triệu"],
                ["10-15m", "10–15 triệu"],
                ["15-25m", "15–25 triệu"],
                ["25m-plus", "Trên 25 triệu"],
              ],
            ],
            [
              "need",
              "Nhu cầu",
              [
                ["study", "Học tập"],
                ["work", "Công việc"],
                ["gaming", "Gaming"],
                ["camera", "Camera"],
                ["battery", "Pin lâu"],
                ["portable", "Gọn nhẹ"],
              ],
            ],
            [
              "gaming",
              "Gaming",
              [
                ["low", "Thấp"],
                ["medium", "Vừa"],
                ["high", "Cao"],
              ],
            ],
            [
              "camera",
              "Camera",
              [
                ["low", "Thấp"],
                ["medium", "Vừa"],
                ["high", "Cao"],
              ],
            ],
            [
              "battery",
              "Pin",
              [
                ["low", "Thấp"],
                ["medium", "Vừa"],
                ["high", "Cao"],
              ],
            ],
            [
              "size",
              "Kích thước mong muốn",
              [
                ["small", "Nhỏ gọn"],
                ["medium", "Trung bình"],
                ["large", "Lớn"],
              ],
            ],
          ].map(([key, label, options]) => (
            <label
              key={key}
              className="space-y-2 text-sm font-medium text-slate-700"
            >
              <span>{label}</span>
              <select
                value={form[key]}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    [key]: event.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-slate-200 px-4 py-3"
              >
                {options.map(([value, text]) => (
                  <option key={value} value={value}>
                    {text}
                  </option>
                ))}
              </select>
            </label>
          ))}
          <div className="lg:col-span-2">
            <button
              type="submit"
              className="rounded-full bg-navy-700 px-5 py-3 text-sm font-semibold text-white"
            >
              Xem gợi ý
            </button>
          </div>
        </form>
      </section>
      {results.length > 0 && (
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-slate-900">
            Dựa trên nhu cầu của bạn, các sản phẩm phù hợp gồm:
          </h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {results.map((product, index) => (
              <div key={product.id}>
                <div className="mb-2 text-sm font-semibold text-navy-700">
                  #{index + 1} • Điểm phù hợp: {product.score}
                </div>
                <ProductCard product={product} />
                <p className="mt-2 text-sm text-slate-600">
                  {product.notes.join(" ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
