import React, { useState } from "react";

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <button
          key={item.question}
          className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-soft"
          onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          aria-expanded={openIndex === index}
        >
          <div className="flex items-center justify-between gap-4">
            <span className="font-semibold text-slate-900">
              {item.question}
            </span>
            <span className="text-navy-700">
              {openIndex === index ? "−" : "+"}
            </span>
          </div>
          {openIndex === index && (
            <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
          )}
        </button>
      ))}
    </div>
  );
}
