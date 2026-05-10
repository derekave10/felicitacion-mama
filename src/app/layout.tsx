import type { Metadata } from "next";
import { Dancing_Script, Nunito } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing",
  weight: ["400", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Feliz Día de las Madres, Mamá Evelyn ❤️",
  description:
    "Una celebración especial para la mejor mamá del mundo. Con todo mi amor.",
  openGraph: {
    title: "Feliz Día de las Madres, Mamá Evelyn ❤️",
    description: "Una celebración especial para la mejor mamá del mundo.",
    images: ["/images/portada.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${dancingScript.variable} ${nunito.variable}`}
    >
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
