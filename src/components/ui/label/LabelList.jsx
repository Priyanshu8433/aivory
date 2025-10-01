import { Button } from "@/components/shadcn/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

const colorSchemes = {
  chart1: {
    border: "border-chart-1",
    bg: "bg-chart-1/20",
    hoverBg: "hover:bg-chart-1/20",
  },
  chart2: {
    border: "border-chart-2",
    bg: "bg-chart-2/20",
    hoverBg: "hover:bg-chart-2/20",
  },
  chart3: {
    border: "border-chart-3",
    bg: "bg-chart-3/20",
    hoverBg: "hover:bg-chart-3/20",
  },
  chart4: {
    border: "border-chart-4",
    bg: "bg-chart-4/20",
    hoverBg: "hover:bg-chart-4/20",
  },
  chart5: {
    border: "border-chart-5",
    bg: "bg-chart-5/20",
    hoverBg: "hover:bg-chart-5/20",
  },
};

const LabelList = ({
  Labels = [],
  value,
  onChange,
  colorScheme = "chart1",
}) => {
  const colors = colorSchemes[colorScheme] || colorSchemes.chart1;
  return (
    <div className="flex gap-2 flex-wrap">
      {Labels.map((label) => (
        <Button
          onClick={() => {
            onChange(label.value);
          }}
          variant={value == label.value ? "" : "outline"}
          size={"sm"}
          className={cn(
            "rounded-full hover:text-foreground hover:bg-background text-[12px] h-fit py-1 px-4 min-w-[120px]",
            value == label.value &&
              cn(
                `border text-foreground hover:text-foreground`,
                colors.border,
                colors.bg,
                colors.hoverBg
              )
          )}
          key={label.value}
        >
          {label.name}
        </Button>
      ))}
    </div>
  );
};

export default LabelList;
