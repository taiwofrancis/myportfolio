import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taiwo Francis — Software Engineer",
  description:
    "Portfolio of Taiwo Francis, Software Engineer and freelance AI & full-stack engineer specializing in Python. Explore case studies, experience, and get in touch.",
  keywords: [
    "AI Architect",
    "Full-Stack Engineer",
    "Python Developer",
    "Software Engineer",
    "Freelancer",
    "INPT",
    "Nigeria",
    "Portfolio",
    "Web Privacy",
  ],

  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "https://yourdomain.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Taiwo Francis Portfolio",
    title: "Taiwo Francis — Software Engineer",
    description: "Portfolio of Taiwo Francis, Software Engineer",
    images: [
      {
        url: "/taiwofrancis.png",
        width: 1200,
        height: 630,
        alt: "Taiwo Francis - Software Engineer",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@TaiwoFrancisOg",
    creator: "@TaiwoFrancisOg",
    title: "Taiwo Francis — Software Engineer",
    description:
      "Portfolio of Taiwo Francis, Software Engineer and freelance AI & full-stack engineer specializing in Python. Explore case studies, experience, and get in touch.",
    images: ["/taiwofrancis.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    // google: "google-verification-code",
  },

  category: "technology",
  classification: "Portfolio Website",

  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#100C08",
    "color-scheme": "dark",
  },
};

export default metadata;
