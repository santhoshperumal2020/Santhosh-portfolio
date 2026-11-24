import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santhoshperumal J | Digital Marketing Executive",
  description: "Digital marketing portfolio showcasing Meta Ads, Google Ads, SEO, campaign performance, social content and app growth work.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
