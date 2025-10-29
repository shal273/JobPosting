// app/layout.js
import { Urbanist } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";
 

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata = {
  title: "HRMS JObs ",
  description: "Human resource management system Job Posting Site",
};

export default async function RootLayout({ children }) {
  
  return (
    <html lang="en" className={urbanist.variable}>
      <body className="antialiased overflow-y-auto scrollBarDash">
          <ClientWrapper>
              {children}
          </ClientWrapper>
            {/* <div id="addModal"></div> */}
      </body>
    </html>
  );
}

