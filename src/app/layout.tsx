import type { Metadata } from "next";
import { Anton, Kaushan_Script, Montserrat } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const kaushanScript = Kaushan_Script({
  variable: "--font-kaushan",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Soweto Meat Lovers",
  description:
    "Bar, restaurant and event venue in Protea Glen, Soweto. Open Friday to Sunday for grilled plates, live sets and Soweto's biggest nights out.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${kaushanScript.variable} ${montserrat.variable} antialiased`}
    >
      <body className="bg-cream text-ink font-sans">{children}</body>
    </html>
  );
}
