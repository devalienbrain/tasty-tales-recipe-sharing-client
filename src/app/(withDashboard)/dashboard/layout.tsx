import Sidebar from "@/components/shared/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Auth Dashboard",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-[20%] md:h-screen bg-cyan-500 rounded-2xl md:rounded-r-none flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full md:w-[80%] bg-base-200 p-4 md:p-6 flex-grow overflow-y-auto md:h-screen">
        {children}
      </div>
    </div>
  );
}
