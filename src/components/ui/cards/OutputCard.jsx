import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import React from "react";
import { cn } from "@/lib/utils";
import { SquarePen } from "lucide-react";

const colorSchemes = {
  chart1: {
    text: "text-chart-1",
    bg: "bg-chart-1",
    hoverBg: "hover:bg-chart-1/90",
  },
  chart2: {
    text: "text-chart-2",
    bg: "bg-chart-2",
    hoverBg: "hover:bg-chart-2/90",
  },
  chart3: {
    text: "text-chart-3",
    bg: "bg-chart-3",
    hoverBg: "hover:bg-chart-3/90",
  },
  chart4: {
    text: "text-chart-4",
    bg: "bg-chart-4",
    hoverBg: "hover:bg-chart-4/90",
  },
  chart5: {
    text: "text-chart-5",
    bg: "bg-chart-5",
    hoverBg: "hover:bg-chart-5/90",
  },
};

function OutputCard({
  children,
  className,
  title,
  desc,
  icon: Icon,
  colorScheme,
}) {
  const colors = colorSchemes[colorScheme] || colorSchemes.chart1;
  return (
    <Card className={cn(className, "w-md h-[480px] aspect-square")}>
      <CardHeader>
        <div className={"flex items-center gap-4"}>
          <Icon className={cn(colors.text)} />
          <CardTitle className={"text-xl"}>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className={"h-full"}>
        {children ? (
          children
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 h-full  text-muted-foreground">
            <Icon className="!h-8 !w-8" />
            <span className="text-sm">{desc}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default OutputCard;
