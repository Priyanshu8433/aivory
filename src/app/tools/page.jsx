"use client";
import ToolContext from "@/components/providers/ToolContext";
import {
  BlogTitles,
  ReviewResume,
  RemoveBackground,
  RemoveObject,
  WriteArticle,
  GenerateImage,
} from "@/components/ui/ToolCards/index";
import Dashboard from "@/components/ui/Dashboard";
import Community from "@/components/ui/Community";
import { useContext } from "react";
import { useUser } from "@clerk/nextjs";

const tools = {
  dashboard: Dashboard,
  "blog-titles": BlogTitles,
  "review-resume": ReviewResume,
  "remove-background": RemoveBackground,
  "remove-object": RemoveObject,
  "write-article": WriteArticle,
  "generate-image": GenerateImage,
  community: Community,
};

const Tools = () => {

  const { tool } = useContext(ToolContext);
  const SelectedTool = tools[tool];
  return (
    <div className="w-full p-4">
      <SelectedTool />
    </div>
  );
};

export default Tools;
