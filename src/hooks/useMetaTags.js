import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.shahtraders.biz";
const DEFAULT_IMAGE = `${BASE_URL}/LOGO.svg`;

/**
 * Helper to update or create a meta tag in document head
 */
const setMetaTag = (selector, attrName, attrValue, content) => {
  if (!content) return;
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

/**
 * Helper to update or create canonical link tag in document head
 */
const setCanonical = (url) => {
  if (!url) return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
};

/**
 * Reusable React Hook for dynamic SEO Meta Tags management
 */
export const useMetaTags = (customOptions = {}) => {
  const location = useLocation();

  useEffect(() => {
    const { pathname, search } = location;
    const searchParams = new URLSearchParams(search);
    const category = searchParams.get("category");
    const brand = searchParams.get("brand");

    // Dynamic defaults per route
    let routeMeta = {
      title: "Shah Traders – Stainless Steel Valves, Pumps & Industrial Equipment Supplier",
      description:
        "Shah Traders, based in Vapi, supplies high-quality industrial valves, pumps, motors, and gaskets. Authorized dealer of Crane, Saunders, Forbes Marshall, Swastik, Leser, Wilo, Sandpiper, Havells & Teadit since 1992.",
      keywords:
        "Shah Traders Vapi, industrial valves Vapi, industrial pumps Vapi, motors supplier Vapi, Crane valves dealer, Saunders valves distributor, Forbes Marshall valves, Swastik valves, Leser safety valves, Wilo pumps, Sandpiper pumps, Havells motors, Teadit gaskets",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      ogType: "website",
      image: DEFAULT_IMAGE,
    };

    if (pathname === "/") {
      routeMeta = {
        title: "Shah Traders | Industrial Valves, Pumps, Motors & Gaskets Supplier in Vapi",
        description:
          "Shah Traders in Vapi is an authorized dealer & leading supplier of industrial valves (Crane, Saunders, Swastik, Leser), Wilo & Sandpiper pumps, Havells motors, and Teadit gaskets since 1992.",
        keywords:
          "Shah Traders Vapi, industrial valves Vapi, industrial pumps, Havells motors, Teadit gaskets, Saunders valves, Crane valves, Wilo pumps, Leser safety valves",
        robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        ogType: "website",
        image: DEFAULT_IMAGE,
      };
    } else if (pathname === "/aboutus") {
      routeMeta = {
        title: "About Us | Shah Traders – Industrial Flow Control Solutions",
        description:
          "Established in 1992 in Vapi, Gujarat, Shah Traders is a trusted supplier of industrial valves, pumps, motors, and sealing products across India.",
        keywords:
          "About Shah Traders, flow control supplier Vapi, industrial equipment distributor, GIDC Vapi",
        robots: "index, follow",
        ogType: "website",
        image: DEFAULT_IMAGE,
      };
    } else if (pathname === "/product") {
      let productTitle = "Industrial Products | Valves, Pumps, Motors & Gaskets – Shah Traders";
      let productDesc =
        "Browse industrial valves, centrifugal & diaphragm pumps, electric motors, and high-performance gaskets from leading global manufacturers.";

      if (category) {
        productTitle = `${category} Products | Industrial Supplies – Shah Traders`;
        productDesc = `Explore our range of industrial ${category} products supplied by Shah Traders in Vapi, Gujarat. Premium quality and certified standards.`;
      } else if (brand) {
        productTitle = `${brand} Products | Authorized Supplier – Shah Traders`;
        productDesc = `Browse genuine ${brand} products including industrial valves, pumps, and motors available at Shah Traders.`;
      }

      routeMeta = {
        title: productTitle,
        description: productDesc,
        keywords:
          "industrial valves list, pumps catalog, Havells motors, Teadit gaskets, Saunders valves, Leser safety valves, Wilo pumps",
        robots: "index, follow",
        ogType: "website",
        image: DEFAULT_IMAGE,
      };
    } else if (pathname === "/contact") {
      routeMeta = {
        title: "Contact Us | Shah Traders – Vapi, Gujarat",
        description:
          "Get in touch with Shah Traders in GIDC Vapi, Gujarat for quotes, technical support, and product inquiries on valves, pumps, motors, and gaskets.",
        keywords:
          "Contact Shah Traders, Vapi industrial supplier address, GIDC Vapi phone number, Shah Traders contact",
        robots: "index, follow",
        ogType: "website",
        image: DEFAULT_IMAGE,
      };
    } else if (pathname === "/sitemap") {
      routeMeta = {
        title: "Sitemap | Shah Traders – Complete Website Directory",
        description:
          "Explore the complete website sitemap of Shah Traders. Quick links to all main pages, product categories, and featured brand partners.",
        keywords:
          "Shah Traders sitemap, website map, site directory, products index, Shah Traders pages",
        robots: "index, follow",
        ogType: "website",
        image: DEFAULT_IMAGE,
      };
    } else {
      routeMeta = {
        title: "404 - Page Not Found | Shah Traders",
        description: "The page you are looking for does not exist on Shah Traders website.",
        keywords: "404, page not found, Shah Traders",
        robots: "noindex, follow",
        ogType: "website",
        image: DEFAULT_IMAGE,
      };
    }

    // Merge customOptions over default route metadata
    const finalTitle = customOptions.title || routeMeta.title;
    const finalDescription = customOptions.description || routeMeta.description;
    const finalKeywords = customOptions.keywords || routeMeta.keywords;
    const finalRobots = customOptions.robots || routeMeta.robots;
    const finalOgType = customOptions.ogType || routeMeta.ogType;
    const finalImage = customOptions.image || routeMeta.image;
    const canonicalUrl =
      customOptions.canonical || `${BASE_URL}${pathname}${search ? search : ""}`;

    // 1. Title
    document.title = finalTitle;

    // 2. Standard Meta Tags
    setMetaTag('meta[name="description"]', "name", "description", finalDescription);
    setMetaTag('meta[name="keywords"]', "name", "keywords", finalKeywords);
    setMetaTag('meta[name="robots"]', "name", "robots", finalRobots);

    // 3. Canonical URL
    setCanonical(canonicalUrl);

    // 4. Open Graph Tags
    setMetaTag('meta[property="og:title"]', "property", "og:title", finalTitle);
    setMetaTag('meta[property="og:description"]', "property", "og:description", finalDescription);
    setMetaTag('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMetaTag('meta[property="og:image"]', "property", "og:image", finalImage);
    setMetaTag('meta[property="og:type"]', "property", "og:type", finalOgType);

    // 5. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", finalTitle);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", finalDescription);
    setMetaTag('meta[name="twitter:url"]', "name", "twitter:url", canonicalUrl);
    setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", finalImage);
  }, [location, customOptions]);
};

export default useMetaTags;
