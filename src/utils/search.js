const normalize = (value = "") =>
  value
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();

export function searchContent(query, items) {
  const text = normalize(query);
  if (!text) return items;

  return items
    .map((item) => {
      const haystack = normalize(
        [
          item.name,
          item.title,
          item.description,
          item.brand,
          item.category,
          item.summary,
          item.tags?.join(" "),
          item.suitableFor?.join(" "),
          item.question,
          item.answer,
        ]
          .filter(Boolean)
          .join(" "),
      );
      return {
        item,
        score: haystack.includes(text)
          ? 1
          : haystack.split(/\s+/).filter((token) => text.includes(token))
              .length,
      };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item);
}

export function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(price);
}

export function slugify(value = "") {
  return normalize(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
