import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-4 lg:px-6">
        <div>
          <div className="text-lg font-semibold text-slate-900">TechGuide</div>
          <p className="mt-3 text-sm text-slate-600">
            Website thông tin và tư vấn điện thoại, máy tính, tối ưu theo hướng
            GEO để dễ hiểu và dễ trích xuất nội dung.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Danh mục
          </div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link to="/phones">Điện thoại</Link>
            </li>
            <li>
              <Link to="/laptops">Máy tính</Link>
            </li>
            <li>
              <Link to="/compare">So sánh</Link>
            </li>
            <li>
              <Link to="/consultation">Tư vấn</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Nguồn dữ liệu
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Dữ liệu demo phục vụ prototype và bài tập GEO, một vài thông số
            chính thức từ hãng.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Liên hệ
          </div>
          <p className="mt-3 text-sm text-slate-600">contact@techguide.local</p>
          <p className="mt-2 text-sm text-slate-600">© 2026 TechGuide.</p>
        </div>
      </div>
    </footer>
  );
}
