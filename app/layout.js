import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from './images/abLogoWhite.png'



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 w-full h-screen">
        <div className="w-full h-[20vh] bg-gradient-to-b from-red-900 to-red-500 flex items-center justify-center">
          <Image src={logo} alt="A&B Logo" className="w-1/3 md:w-1/12"/> 
          
        </div>
        {children}
      </body>
    </html>
  );
}
