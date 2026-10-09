"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "@/app/types/navigation";

export default function NavigationLink({ href, label }: NavigationItem) {
  const pathname = usePathname();
  const isExternal = href.startsWith("http");
  const isActive =
    !isExternal &&
    (pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)));

  const className = `
    whitespace-nowrap
    rounded-md
    px-2
    py-1
    transition-colors
    ${
      isActive
        ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200"
        : "hover:text-cyan-600 dark:hover:text-cyan-400"
    }
  `;

  return (
    <Link href={href} className={className} aria-current={isActive ? "page" : undefined}>
      {label}
    </Link>
  );
}
