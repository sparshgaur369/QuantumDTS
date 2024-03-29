import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { ThemeProvider } from "@/providers/theme-provider";
import Navigation from '@/components/site/navigation';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuantumDTS",
  description: "Make your presence online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navigation/>
        {children}
    
        </ThemeProvider>
        </body>
        </html>
    
  );
}
