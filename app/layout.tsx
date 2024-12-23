import "./globals.css";
import NavBar from "@/components/NavBar";
import localFont from "@next/font/local";
import NowPlaying from "@/components/NowPlaying";
import Script from "next/script";

const programme = localFont({
  src: [
    {
      path: "../public/fonts/Programme-Regular.woff2",
      weight: "400",
    },
  ],
  variable: "--font-programme",
});
const montecatiniPro = localFont({
  src: [
    {
      path: "../public/fonts/MontecatiniPro-StrettoUltra.woff2",
      weight: "700",
    },
  ],
  variable: "--font-montecatiniPro",
});

export const metadata = {
  viewport: { width: "device-width", initialScale: 1 },
  title: "Ayodeji Atanda - Software Engineer Portfolio",
  verification: {
    google: "ltfOnPx-NMzt2vBROfh-jAQr5R-U7ynE-3t3kmMTJGo",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  description:
    "Ayodeji Atanda - Software Engineer Portfolio: Creating professional, scalable, and SEO-friendly websites that establish a robust online presence for small businesses through innovative web and blockchain solutions.",
  keywords: [
    "Ayodeji Atanda",
    "Deji ice",
    "Lagos",
    "Nigeria",
    "JavaScript",
    "React",
    "Frontend Engineer",
    "Smart Contracts",
    "blockchain",
    "Web3",
    "Solidity",
    "Ethers.js",
    "Hardhat",
    "Tailwind CSS",
    "Web development",
    "Frontend development",
    "Frontend developer",
    "Fullstack developer",
    "Graphic designer",
    "typescipt",
    "Next.js",
    "Web Development Portfolio",
    "Web Performance Optimization",
    "Portfolio Showcase",
    "SEO-Friendly Websites",
    "Software developer",
    "Freelance",
    "Portfolio website",
    "HTML/CSS",
    "Technical Skills",
    "SEO Optimization",
    "Web Developer",
  ],
  robots: {
    googleBot: {
      index: true,
    },
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayodeji Atanda - Software Engineer Portfolio",
    description:
      "Ayodeji Atanda - Software Engineer Portfolio: Creating professional, scalable, and SEO-friendly websites that establish a robust online presence for small businesses through innovative web and blockchain solutions.",
    creator: "@dejiXice",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${programme.variable} ${montecatiniPro.variable}  font-sans`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-2PKP3NR2VS"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2PKP3NR2VS');
        `}
      </Script>
      <body>
        <NowPlaying />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
