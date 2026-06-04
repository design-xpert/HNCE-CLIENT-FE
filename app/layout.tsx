import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { FloatingActions } from "@/components/floating-actions";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HCNE — Heritage Centre for Nursing Excellence",
  description:
    "Heritage Centre for Nursing Excellence (HCNE) — premier nursing college offering B.Sc. Nursing and GNM Diploma programs. INC recognized, 100% placement record.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <FloatingActions />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
