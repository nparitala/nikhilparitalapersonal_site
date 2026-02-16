import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikhil Chowdary - Senior Software Engineer | Full Stack .NET | Cloud/DevOps",
  description: "Senior Software Engineer focused on cloud-native microservices, secure APIs, GitLab CI/CD, AKS deployments, and data engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
