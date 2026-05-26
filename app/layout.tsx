import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bibek Lamichhane | IT Portfolio",
  description:
    "IT Student specialising in networking, cybersecurity and AI. Based in Sydney, NSW.",
  keywords: ["Bibek Lamichhane", "IT Portfolio", "Networking", "Cybersecurity", "Sydney"],
  authors: [{ name: "Bibek Lamichhane" }],
  openGraph: {
    title: "Bibek Lamichhane | IT Portfolio",
    description: "IT Student specialising in networking, cybersecurity and AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050705] text-white antialiased">{children}</body>
    </html>
  );
}
