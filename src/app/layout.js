import { DM_Sans } from "next/font/google";
import './globals.css';
import Header from '@/components/Header';
import Providers from './Providers';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import { Footer } from "@/components/Footer";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: 'Olympics Athletes',
  description: 'This is a olympics athletes profile database',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen dark:bg-[linear-gradient(to_bottom,#000,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%,#A46EDB_82%)]  bg-[linear-gradient(to_bottom,#fff,#fff,#5E79D6,#3c5dcf,#3c5dcf)]">
            <Header />
            <Navbar />
            <SearchBox />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
