import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Dreno | Créateur de Contenu & Expert IA",
  description:
    "Portfolio de Wilfried Dzomeu (Dreno) — Créateur de contenu, expert en génération d'images IA, vidéo et design graphique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
