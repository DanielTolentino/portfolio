import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  colorScheme: "light dark",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://danieltolentino.net",
  ),
  title: "Daniel Tolentino — Designer & Desenvolvedor Web",
  description:
    "Portfólio de Daniel Tolentino: sites bonitos, rápidos e pensados para aproximar negócios das pessoas certas.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Daniel Tolentino — Designer & Desenvolvedor Web",
    description:
      "Sites que transformam boas ideias em presença digital.",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Daniel Tolentino — Sites que transformam boas ideias em presença digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Tolentino — Designer & Desenvolvedor Web",
    description:
      "Sites que transformam boas ideias em presença digital.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
