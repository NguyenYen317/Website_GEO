export function buildWebSiteSchema({ name, url, description, searchUrl }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: searchUrl
      ? {
          "@type": "SearchAction",
          target: searchUrl,
          "query-input": "required name=search_term_string",
        }
      : undefined,
  };
}

export function buildProductSchema(product, canonicalUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: [product.image],
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    sku: product.id,
    url: canonicalUrl,
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: canonicalUrl,
    },
  };
}

export function buildArticleSchema(article, canonicalUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    mainEntityOfPage: canonicalUrl,
  };
}

export function buildFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
