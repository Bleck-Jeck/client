module.exports = {
  siteUrl: 'https://anifid.ru',
  generateRobotsTxt: true,
  exclude: ['/admin'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://anifid.ru/another-sitemap.xml'],
    // Добавьте параметры для файла robots.txt
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/search'], // Например, запретить доступ к /admin
        crawlDelay: 10, // Задержка между запросами поисковых роботов (в секундах)
        cleanParam: 'ref /', // Указание параметров, которые не должны учитываться роботами
      },
      // Можно добавить другие правила для разных пользователей агентов
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private'],
      }
    ]
  }
};

  
