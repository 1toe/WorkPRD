/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilitar componentes de servidor estrictos 
  reactStrictMode: true,
  
  // Configuración para imágenes externas
  images: {
    domains: [],
    // Permitir optimizar imágenes desde cualquier dominio en modo de desarrollo
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Optimizaciones de compilación
  swcMinify: true,
}; 

export default nextConfig;
