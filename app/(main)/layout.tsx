type Props = {
  children: React.ReactNode;
};

import { Sidebar } from "@/components/sidebar";
const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Sidebar />
      <main className="pl-[256px] h-full">
        <div className="bg-red-500 h-full">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
