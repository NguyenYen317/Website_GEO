import React, { useEffect } from "react";

export default function Seo({
  title,
  description,
  canonical,
  image,
  type = "website",
}) {
  useEffect(() => {
    document.title = title;
    const setMeta = (name, content, attr = "name") => {
      let tag = document.head.querySelector(`meta[${attr}='${name}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", type, "property");
    setMeta("og:url", canonical, "property");
    if (image) setMeta("og:image", image, "property");
    const canonicalLink =
      document.head.querySelector("link[rel='canonical']") ||
      document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    canonicalLink.setAttribute("href", canonical);
    if (!canonicalLink.parentNode) document.head.appendChild(canonicalLink);
  }, [title, description, canonical, image, type]);

  return null;
}
