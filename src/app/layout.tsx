import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Carlos Vivas | DevOps Engineer",
  description:
    "Portafolio profesional de Carlos Vivas - DevOps Engineer especializado en automatización, Kubernetes, CI/CD y Cloud. Ayudo a equipos a construir infraestructuras resilientes y eficientes.",
  keywords: [
    "DevOps",
    "Kubernetes",
    "CI/CD",
    "Cloud",
    "AWS",
    "Docker",
    "Terraform",
    "Automatización",
  ],
  authors: [{ name: "Carlos Vivas" }],
  creator: "Carlos Vivas",
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://carlosvivas.dev",
    title: "Carlos Vivas | DevOps Engineer",
    description:
      "DevOps Engineer especializado en automatización, Kubernetes, CI/CD y Cloud",
    siteName: "Carlos Vivas Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Vivas | DevOps Engineer",
    description:
      "DevOps Engineer especializado en automatización, Kubernetes, CI/CD y Cloud",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
