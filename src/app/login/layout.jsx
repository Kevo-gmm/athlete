import { DM_Sans } from "next/font/google";
import Providers from "../Providers";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata = { title: "Olympics Athletes", description: "This is a olympics athletes profile database" };
export default function PageWithoutRootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
