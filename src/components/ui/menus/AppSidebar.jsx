import React from "react";
import {
  House,
  SquarePen,
  Hash,
  Image,
  Eraser,
  Scissors,
  FileText,
  Users,
  Loader2,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/shadcn/ui/sidebar";
import { Separator } from "@/components/shadcn/ui/separator";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarImage } from "@/components/shadcn/ui/avatar";
import ProfileTrigger from "../ProfileTrigger";
import { Skeleton } from "@/components/shadcn/ui/skeleton";

const menuItems = [
  {
    title: "Dashboard",
    value: "dashboard",
    icon: House,
  },
  {
    title: "Write Article",
    value: "write-article",
    icon: SquarePen,
  },
  {
    title: "Blog Titles",
    value: "blog-titles",
    icon: Hash,
  },
  {
    title: "Generate Images",
    value: "generate-image",
    icon: Image,
  },
  {
    title: "Remove Background",
    value: "remove-background",
    icon: Eraser,
  },
  {
    title: "Remove Object",
    value: "remove-object",
    icon: Scissors,
  },
  {
    title: "Review Resume",
    value: "review-resume",
    icon: FileText,
  },
  {
    title: "Community",
    value: "community",
    icon: Users,
  },
];

const SidebarLoading = () => {
  return (
    <div className="flex">
      <Sidebar collapsible="none" className={"w-[280px]"}>
        <SidebarHeader className={"flex flex-col gap-3 items-center p-6"}>
          <Skeleton className="h-20 w-20 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </SidebarHeader>
        <Separator />
        <SidebarContent className={"mx-auto py-4 w-[90%]"}>
          <SidebarMenu className={"w-full"}>
            {menuItems.map((item, index) => (
              <SidebarMenuItem key={index} className={"w-full"}>
                <div className="flex gap-4 py-4 px-2">
                  <Skeleton className="h-5 w-5" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <Separator />
        <SidebarFooter className={"px-6 py-4"}>
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="text-sm text-muted-foreground">Loading...</span>
          </div>
        </SidebarFooter>
      </Sidebar>
      <Separator orientation="vertical" />
    </div>
  );
};

function AppSidebar({ value, onChange }) {
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) {
    return <SidebarLoading />;
  }

  return (
    <div className="flex">
      <Sidebar collapsible="none" className={"w-[280px]"}>
        <SidebarHeader className={"flex flex-col gap-3 items-center p-6"}>
          <Avatar className={"h-20 w-20"}>
            <AvatarImage src={user.imageUrl} />
          </Avatar>
          <span className="text-lg text-foreground">{user.fullName}</span>
        </SidebarHeader>
        <Separator />
        <SidebarContent className={"mx-auto py-4 w-[90%]"}>
          <SidebarMenu className={"w-full"}>
            {menuItems.map((item) => (
              <SidebarMenuItem
                key={item.title}
                className={"w-full"}
                onClick={() => {
                  onChange(item.value);
                  console.log("clicked");
                }}
              >
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "h-10 hover:cursor-pointer",
                    value == item.value &&
                      "bg-primary text-secondary hover:bg-primary hover:text-secondary"
                  )}
                >
                  <div className="flex gap-4 py-4">
                    <item.icon className="!h-5 !w-5" />
                    <span>{item.title}</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <Separator />
        <SidebarFooter className={"px-6 py-4"}>
          <ProfileTrigger />
        </SidebarFooter>
      </Sidebar>
      <Separator orientation="vertical" />
    </div>
  );
}

export default AppSidebar;
