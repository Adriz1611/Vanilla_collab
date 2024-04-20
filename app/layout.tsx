import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins as PoppinsFont } from "next/font/google";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const Poppins = PoppinsFont({
  subsets: ["latin"],
  weight: "200",
  style: "normal", // Add this line to include the normal font style
});

export const metadata: Metadata = {
  title: "Vanilla",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/logo.svg",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#343c59",
            colorBackground: "#030424",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },
        }}
      >
        <body
          className={`${Poppins.className} bg-dark-2`}
          style={{ letterSpacing: "1.2px" }} // Add the desired letter spacing here
        >
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}