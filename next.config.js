/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Добавляем локальный хост и удаленный хост с использованием remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'file.anifid.ru',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '9000', // Указываем порт, если сервер работает на localhost:9000
        pathname: '**',
      },
    ],
  },
  typescript: {
    // Игнорируем ошибки сборки TypeScript, если это требуется
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

