import Navbar from "@/app/components/navbar/Navbar";
import Link from "next/link";
import ThemeToggle from "@/app/components/themeToggle/ThemeToggle";

export default function RoutingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <Link className="row-start-1 justify-self-start" href="/">Back to home</Link>
      <div className="flex justify-around items-center p-4">
        <Navbar />
        <ThemeToggle />
      </div>
      
      {children}
    </div>
  );
}
