import React, { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import ComparisonTable from "../components/ComparisonTable";
import Seo from "../components/Seo";

export default function Compare({ products }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [ids, setIds] = useState(
    (searchParams.get("ids") || "").split(",").filter(Boolean).slice(0, 3),
  );

  const selected = useMemo(
    () => products.filter((product) => ids.includes(product.id)).slice(0, 3),
    [ids, products],
  );

  const toggle = (id) => {
    setIds((current) => {
      const exists = current.includes(id);
      const next = exists
        ? current.filter((item) => item !== id)
        : [...current, id].slice(0, 3);
      setSearchParams({ ids: next.join(",") });
      return next;
    });
  };

  return (
    <div className="space-y-6">
      <Seo
        title="So sánh sản phẩm | TechGuide"
        description="So sánh 2-3 điện thoại hoặc máy tính theo dữ liệu minh họa."
        canonical={window.location.href}
      />
      <Breadcrumb
        items={[{ name: "Trang chủ", to: "/" }, { name: "So sánh" }]}
      />
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h1 className="text-3xl font-bold text-slate-900">So sánh sản phẩm</h1>
        <p className="mt-3 text-sm text-slate-600">
          Chọn tối đa 3 sản phẩm. Bảng so sánh trình bày theo nhu cầu để người
          dùng tự quyết định.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {products.slice(0, 8).map((product) => (
            <button
              key={product.id}
              onClick={() => toggle(product.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${ids.includes(product.id) ? "bg-navy-700 text-white" : "bg-slate-100 text-slate-700"}`}
            >
              {product.name}
            </button>
          ))}
        </div>
      </section>
      <ComparisonTable products={selected} />
      {selected.length >= 2 && (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-slate-900">
            Điểm khác biệt chính
          </h2>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>
              Nếu ưu tiên camera, bạn có thể cân nhắc mẫu có hệ camera linh hoạt
              hơn.
            </p>
            <p>
              Nếu ưu tiên gaming, mẫu có chip mạnh và màn hình mượt sẽ phù hợp
              hơn.
            </p>
            <p>
              Nếu ưu tiên hệ sinh thái, hãy xem các thiết bị cùng hệ điều hành
              đang dùng.
            </p>
          </div>
        </section>
      )}
      <div className="text-sm text-slate-500">
        {selected.length < 2
          ? "Hãy chọn ít nhất 2 sản phẩm để xem so sánh."
          : "Bảng trên chỉ dùng dữ liệu minh họa cho prototype."}
      </div>
      <Link
        to="/consultation"
        className="inline-flex rounded-full bg-navy-700 px-5 py-3 text-sm font-semibold text-white"
      >
        Nhận tư vấn theo nhu cầu
      </Link>
    </div>
  );
}
