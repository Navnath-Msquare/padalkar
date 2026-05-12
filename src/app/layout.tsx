import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "पडळकर दूध संकलन केंद्र - बंडगरवाडी | Padalkar Dairy",
  description: "पडळकर दूध संकलन केंद्र बंडगरवाडी - ता: जत, जि: सांगली. दर्जेदार दूध संकलन आणि प्रक्रिया केंद्र.",
  keywords: ["Padalkar Dairy", "Milk Collection", "Dudh Sankalan", "Bandgarwadi", "Jath", "Sangli", "Milk Center"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr">
      <body>
        {children}
      </body>
    </html>
  );
}
