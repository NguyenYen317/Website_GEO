import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Seo from "../components/Seo";

export default function About() {
  return (
    <div className="space-y-6">
      <Seo
        title="Giới thiệu | TechGuide"
        description="Giới thiệu website TechGuide, mục tiêu nội dung và định hướng GEO."
        canonical={window.location.href}
      />
      <Breadcrumb
        items={[{ name: "Trang chủ", to: "/" }, { name: "Giới thiệu" }]}
      />
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h1 className="text-3xl font-bold text-slate-900">
          Giới thiệu TechGuide
        </h1>
        <p className="mt-4 text-slate-600">
          TechGuide là website thông tin và tư vấn thiết bị công nghệ, tập trung
          vào điện thoại và máy tính. Nội dung được tổ chức theo hướng rõ ràng,
          có cấu trúc, có FAQ, bảng thông số và liên kết nội bộ để phù hợp với
          mục tiêu GEO.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Không phải website bán hàng",
            "Dữ liệu minh họa cho học tập",
            "Có search, filter, compare, consultation",
            "Tối ưu cấu trúc nội dung cho AI Search",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-slate-50 p-4 font-medium text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
