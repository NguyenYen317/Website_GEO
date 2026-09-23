import React from "react";
import { formatPrice } from "../utils/search";

const fields = [
  ["price", "Giá tham khảo"],
  ["display", "Màn hình"],
  ["processor", "Chip / CPU"],
  ["ram", "RAM"],
  ["storage", "Storage"],
  ["camera", "Camera / Webcam"],
  ["battery", "Pin"],
  ["weight", "Trọng lượng"],
  ["os", "Hệ điều hành"],
];

export default function ComparisonTable({ products }) {
  if (!products?.length)
    return (
      <p className="text-sm text-slate-500">
        Chọn 2 hoặc 3 sản phẩm để so sánh.
      </p>
    );

  return (
    <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-soft">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-4 py-3 font-semibold text-slate-700">Tiêu chí</th>
            {products.map((product) => (
              <th
                key={product.id}
                className="px-4 py-3 font-semibold text-slate-700"
              >
                {product.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fields.map(([field, label]) => (
            <tr key={field} className="border-t border-slate-100 align-top">
              <td className="px-4 py-3 font-medium text-slate-700">{label}</td>
              {products.map((product) => (
                <td
                  key={product.id + field}
                  className="px-4 py-3 text-slate-600"
                >
                  {field === "price"
                    ? formatPrice(product.price)
                    : product[field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
