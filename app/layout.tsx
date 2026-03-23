import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "David Howe - Portfolio",
  description: "Everything you need to know about me in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      data-theme="light"
    >
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"></link>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
