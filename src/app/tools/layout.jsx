"use client";

import { SidebarProvider } from "@/components/shadcn/ui/sidebar";
import AppSidebar from "@/components/ui/menus/AppSidebar";
import { useContext } from "react";
import ToolContext from "@/components/providers/ToolContext";
import SecNavbar from "@/components/ui/menus/SecNavbar";

export default function ToolsLayout({ children }) {
  const { tool, setTool } = useContext(ToolContext);
  return (
    <div>
      <SidebarProvider className={"flex flex-col h-dvh"}>
        <SecNavbar />
        <div className="flex items-stretch flex-1">
          <AppSidebar value={tool} onChange={setTool} />
          <div className="w-full">
            {/* <SidebarTrigger /> */}
            {children}
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
