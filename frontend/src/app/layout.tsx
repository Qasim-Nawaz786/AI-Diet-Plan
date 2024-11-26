import type { Metadata } from "next";
import localFont from "next/font/local";
import { Raleway, Cinzel } from "next/font/google";
import "./globals.css";



const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify weights you want
});
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify weights you want
});

// const geistSans = localFont({
//   src: "../../public/fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "../../public/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const poblaheavy = localFont({
  src:[ 
    {
    path: "../../public/fonts/poblaheavy-heavy.otf",
    weight: "100 900",
},
],

  variable: "--font-poblaheavy",
  // weight: "100 900",
}
);

export const metadata: Metadata = {
  title: "Olympo",
  description: "AI Diet Recommendation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poblaheavy.variable} ${raleway.className} ${cinzel.className}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
