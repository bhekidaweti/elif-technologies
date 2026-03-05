import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://eliftechnologies.co.za",
      lastModified: new Date(),
    },
    {
      url: "https://eliftechnologies.co.za/about",
      lastModified: new Date(),
    },
    {
      url: "https://eliftechnologies.co.za/services",
      lastModified: new Date(),
    },
    {
      url: "https://eliftechnologies.co.za/pricing",
      lastModified: new Date(),
    },
    {
      url: "https://eliftechnologies.co.za/contact",
      lastModified: new Date(),
    },
  ];
}