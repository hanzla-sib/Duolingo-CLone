"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
type Props = {
  label: string;
  iconSrc: string;
  href: string;
};

export const SidebarItem = ({ label, iconSrc, href }: Props) => {
  const Pathname = usePathname();
  const active = Pathname === href;
  return (
    <Button
      className="justify-start h-[52px]"
      asChild
      variant={active ? "sidebarOutline" : "sidebar"}
    >
      <Link href={href}>
        <Image
          className="mr-5"
          alt={label}
          src={iconSrc}
          width={32}
          height={32}
        />

        {label}
      </Link>
    </Button>
  );
};
