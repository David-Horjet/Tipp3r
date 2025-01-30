import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import AppkitProvider from "@/context/AppkitProvider";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react"

const bricolage_GrotesqueFont = Bricolage_Grotesque({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Tipp3er - In-App Donation Portal for Content Creators',
  description: 'Empower creators with direct crypto donations and reduced platform fees.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage_GrotesqueFont.className} antialiased`}
      >
        <AppkitProvider>
          {children}
        </AppkitProvider>
        <Toaster
          richColors
        />
      </body>
      <Analytics/>
    </html>
  );
}
