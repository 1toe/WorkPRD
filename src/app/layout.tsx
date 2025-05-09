import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRD Workflow Tools - Desarrollo de Productos con IA",
  description: "Herramientas de flujo de trabajo PRD para optimizar el desarrollo de productos con asistentes de IA",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
