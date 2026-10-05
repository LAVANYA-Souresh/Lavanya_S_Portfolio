import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lavanya S. | Software Engineer | AI & Automation",

  description:
    "Portfolio of Lavanya S., a Software Engineer with experience in Java, Spring Boot, SQL, Python, AI, automation, and business-critical application development.",

  keywords: [
    "Lavanya S",
    "Software Engineer",
    "AI Engineer",
    "AI Engineer India",
    "Python Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Machine Learning",
    "Generative AI",
    "AI Automation",
    "Software Engineer Portfolio",
  ],

  authors: [
    {
      name: "Lavanya S.",
    },
  ],

  creator: "Lavanya S.",

  metadataBase: new URL("http://localhost:3000"),

  openGraph: {
    title: "Lavanya S. | Software Engineer | AI & Automation",
    description:
      "Software Engineer focused on AI, automation, backend development, and intelligent software systems.",
    type: "website",
    locale: "en_IN",
    siteName: "Lavanya S. Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lavanya S. | Software Engineer | AI & Automation",
    description:
      "Software Engineer focused on AI, automation, backend development, and intelligent software systems.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lavanya S.",
    jobTitle: "Software Engineer",
    description:
       "Software Engineer focused on AI, automation, backend development, and intelligent software systems.",
    url: "http://localhost:3000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puducherry",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Software Engineering",
      "Java",
      "Python",
      "Spring Boot",
      "SQL",
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "AI Automation",
      "Backend Development",
    ],
    sameAs: [
      "https://linkedin.com/in/lavanya-s-79478b1b1",
      "https://github.com/",
    ],
  };
  return (

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </body>
    </html>
  );
}