import type { Metadata } from "next";
import Header from "@/app/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "UTVT | Tecnologías de la Información",
  description: "Ingeniería en Tecnologías de la Información e Innovación Digital.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased">
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pt-5 sm:px-10 lg:px-16">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
