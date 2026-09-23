import { formatPrice } from "./search";

const budgetRanges = {
  "under-10m": [0, 10000000],
  "10-15m": [10000000, 15000000],
  "15-25m": [15000000, 25000000],
  "25m-plus": [25000000, Infinity],
};

const needWeights = {
  gaming: { gaming: 3, camera: 0, battery: 0, study: 1, work: 1, portable: 0 },
  camera: { gaming: 0, camera: 3, battery: 0, study: 0, work: 1, portable: 0 },
  battery: { gaming: 0, camera: 0, battery: 3, study: 1, work: 1, portable: 1 },
  study: { gaming: 0, camera: 0, battery: 1, study: 3, work: 2, portable: 2 },
  work: { gaming: 0, camera: 0, battery: 1, study: 2, work: 3, portable: 1 },
};

function inBudget(productPrice, rangeKey) {
  const [min, max] = budgetRanges[rangeKey] || [0, Infinity];
  return productPrice >= min && productPrice <= max;
}

export function recommendProducts(products, form) {
  const need = form.need || "study";
  const budget = form.budget || "10-15m";
  const weights = needWeights[need] || needWeights.study;

  const scored = products.map((product) => {
    let score = 0;
    if (inBudget(product.price, budget)) score += 3;
    if ((product.suitableFor || []).includes(need)) score += 4;
    if ((product.suitableFor || []).includes("daily")) score += 1;
    if ((product.tags || []).some((tag) => tag.includes(need))) score += 1;
    if (
      need === "gaming" &&
      /snapdragon|ryzen|elite|ultra/i.test(
        `${product.processor} ${product.name}`,
      )
    )
      score += 2;
    if (need === "camera" && /camera|pixel|pro|max|ultra/i.test(product.name))
      score += 2;
    if (need === "battery" && /5000|5500|batter/i.test(product.battery))
      score += 2;
    if (need === "portable" && parseFloat(product.weight) < 2) score += 2;

    const notes = [];
    if (inBudget(product.price, budget))
      notes.push(`Nằm trong ngân sách ${budget}.`);
    if ((product.suitableFor || []).includes(need))
      notes.push(`Phù hợp nhu cầu ${need}.`);
    if (product.price)
      notes.push(`Giá tham khảo ${formatPrice(product.price)}.`);

    return { ...product, score, notes };
  });

  return scored.sort((a, b) => b.score - a.score).slice(0, 3);
}
