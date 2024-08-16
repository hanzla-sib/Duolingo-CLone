import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button  className="flex gap-3 w-full" variant={"ghost"}>
          <Image src="/hn.svg" width={30} height={42} alt="hungry flag" className="rounded-md" />
          Hungry
        </Button>
        <Button className="flex gap-3 w-full" variant={"ghost"}>
          <Image src="/gr.svg" width={30} height={42} alt="Germany flag" className="rounded-md" />
          Germany
        </Button>
        <Button className="flex gap-3 w-full" variant={"ghost"}>
          <Image
            src="/uk.svg"
            width={30}
            height={42}
            alt=" United Kingdom flag"
            className="rounded-md"
          />
          United Kingdom
        </Button>
        <Button className="flex gap-3 w-full" variant={"ghost"}>
          <Image src="/ml.svg" width={30} height={42} alt="Malta flag" className="rounded-md" />
          Malta
        </Button>
        <Button className="flex gap-3 w-full" variant={"ghost"}>
          <Image src="/cr.svg" width={30} height={42} alt="Crotia flag" className="rounded-md" />
          Crotia
        </Button>
      </div>
    </footer>
  );
};
