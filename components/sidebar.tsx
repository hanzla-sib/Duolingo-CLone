import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ClerkLoaded, UserButton, ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";

import { SidebarItem } from "./sidebar-item";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href={"/learn"}>
        <div className="flex items-center p-4  gap-x-3">
          <div className="bg-green-600 p-3 rounded ">
            <Image src="/face_c.png" width={40} height={40} alt="logo" />
          </div>
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-y-2">
          <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
          <SidebarItem
            label="Leaderboard"
            href="/leaderboard"
            iconSrc="/leaderboard.svg"
          />
          <SidebarItem label="Quests" href="/quests" iconSrc="/quest.svg" />
          <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" />
        </div>
        <div className="p-4 sm:mb-20 lg:mb-0">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin"></Loader>
          </ClerkLoading>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
};
