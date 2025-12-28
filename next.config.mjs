/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true, // ya lo tienes
  output: 'export',    // Genera archivos estáticos
  images: {
    unoptimized: true, // Para que funcione con imágenes externas
  },
  basePath: '/my-next-app', // Cambia "my-next-app" por el nombre de tu repo
};

export default nextConfig;
