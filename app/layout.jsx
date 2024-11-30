import "./globals.css";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SaiberNext | Official",
  description: "SaiberNext the most beautiful Saas platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.className} antialiased bg-primary-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
