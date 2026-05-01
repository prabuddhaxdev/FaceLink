import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FaceLink",
  description: "Video Conferencing web application",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-2 `}>
        <ClerkProvider
          appearance={{
            variables: {
              colorPrimary: "#0062ff",
              colorBackground: "#111827",
              colorForeground: "#ffffff",
              colorPrimaryForeground: "#ffffff",
              colorMutedForeground: "#cbd5e1",
              colorInputForeground: "#ffffff",
              colorInput: "#1e293b",
              colorNeutral: "#BDC1CC",
              colorDanger: "#ef4444",
              borderRadius: "14px",
            },

            layout: {
              logoImageUrl: "/logo.png",
              socialButtonsVariant: "iconButton",
            },
          }}
        >
          {children}

          <Toaster />
        </ClerkProvider>
      </body>
    </html>
  );
}
