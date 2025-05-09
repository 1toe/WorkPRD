import { Metadata } from "next";
import "./globals.css";
import { ProveedorTema } from "@/context/TemaContexto";
import { Inter } from 'next/font/google';

// Cargar la fuente Inter
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "WorkPRD - Flujo de Trabajo para Desarrollo de Productos con IA",
  description: "Herramientas avanzadas de flujo de trabajo PRD para optimizar el desarrollo de productos con asistentes de IA",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={inter.className}>
      <body>
        <ProveedorTema>
          {children}
        </ProveedorTema>
      </body>
    </html>
  );
}
