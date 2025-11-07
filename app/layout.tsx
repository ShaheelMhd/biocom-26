import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "BIOCOM '26 | Biomedical and Computing Conference",
  description:
    "Biomedical and Computing National Conference at TKM Institute of Technology",
};

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--instrumentSans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
