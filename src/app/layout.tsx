import "./globals.css";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/footer";
import { register } from 'swiper/element/bundle';
register();


// const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://anifid.ru/"
const SITE_NAME = "Онлайн кинотеатр Anifid. Аниме Фильмы и сериалы смотреть онлайн в хорошем качестве";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  verification: {
    yandex:'30a94f2125614063'
  }
 
    
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <meta name="yandex-verification" content="30a94f2125614063" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
      <body className="">
        
        <Navbar />
        <div className="lg:pt-20 md:pt-14 pt-12 ">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
