"use client";

import { TemaProveedor } from '@/context/TemaContexto';
import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>Desarrollo Guiado por PRD & RFC</title>
        <meta name="description" content="Herramientas y prompts para desarrollo guiado por PRD y RFC" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <TemaProveedor>
          {children}
        </TemaProveedor>
      </body>
    </html>
  );
}
