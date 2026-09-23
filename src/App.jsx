import React, { useMemo, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Phones from "./pages/Phones";
import PhoneDetail from "./pages/PhoneDetail";
import Laptops from "./pages/Laptops";
import LaptopDetail from "./pages/LaptopDetail";
import Compare from "./pages/Compare";
import Consultation from "./pages/Consultation";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import FAQPage from "./pages/FAQPage";
import About from "./pages/About";
import { articles } from "./data/articles";
import { faqs } from "./data/faqs";
import { laptops, phones, products } from "./data/products";
import { searchContent } from "./utils/search";

export default function App() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const allSearchable = useMemo(() => [...products, ...articles, ...faqs], []);

  const onSearchSubmit = (event) => {
    event.preventDefault();
    const query = search.trim().toLowerCase();
    if (!query) return;
    const product = searchContent(query, allSearchable)[0];
    if (!product) return;
    if (product.category === "phone") navigate(`/phones/${product.id}`);
    else if (product.category === "laptop") navigate(`/laptops/${product.id}`);
    else if (product.slug) navigate(`/articles/${product.slug}`);
    else navigate("/faq");
    setSearch("");
  };

  const pageKey = location.pathname;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header
        search={search}
        setSearch={setSearch}
        onSearchSubmit={onSearchSubmit}
      />
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
        <Routes key={pageKey}>
          <Route
            path="/"
            element={
              <Home
                phones={phones}
                laptops={laptops}
                articles={articles}
                faqs={faqs}
              />
            }
          />
          <Route path="/phones" element={<Phones phones={phones} />} />
          <Route
            path="/phones/:id"
            element={
              <PhoneDetail products={phones} articles={articles} faqs={faqs} />
            }
          />
          <Route path="/laptops" element={<Laptops laptops={laptops} />} />
          <Route
            path="/laptops/:id"
            element={
              <LaptopDetail
                products={laptops}
                articles={articles}
                faqs={faqs}
              />
            }
          />
          <Route path="/compare" element={<Compare products={products} />} />
          <Route
            path="/consultation"
            element={<Consultation products={products} />}
          />
          <Route path="/articles" element={<Articles articles={articles} />} />
          <Route
            path="/articles/:slug"
            element={
              <ArticleDetail
                articles={articles}
                products={products}
                faqs={faqs}
              />
            }
          />
          <Route
            path="/faq"
            element={<FAQPage faqs={faqs} articles={articles} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
