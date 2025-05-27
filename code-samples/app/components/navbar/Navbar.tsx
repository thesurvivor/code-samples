"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";
import LikeButton from "@/app/components/likebutton/Likebutton";

const links = [
  { label: "Home", href: "/routing" },
  { label: "About", href: "/routing/about" },
  { label: "Projects", href: "/routing/projects" },
  { label: "Contact", href: "/routing/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center items-center gap-4">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`${
            pathname === link.href ? "text-blue-500" : "text-gray-500"
          }`}
        >
          {link.label}
        </Link>
      ))}

      <LikeButton />
    </nav>
  );
}
