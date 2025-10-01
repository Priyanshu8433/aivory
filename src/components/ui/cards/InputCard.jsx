import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

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

const InputCard = ({
  children,
  title,
  submitAction,
  className,
  buttonIcon: ButtonIcon,
  buttonText,
  colorScheme = "chart1",
}) => {
  const colors = colorSchemes[colorScheme] || colorSchemes.chart3;
  return (
    <Card className={cn(className, "w-md h-fit")}>
      <CardHeader>
        <div className={"flex items-center gap-4"}>
          <Sparkles className={colors.text} />
          <CardTitle className={"text-xl"}>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className={"flex flex-col mb-8"}>{children}</CardContent>
      <CardFooter>
        <Button
          className={cn("w-full", colors.bg, colors.hoverBg)}
          onClick={() => {
            submitAction();
          }}
        >
          <ButtonIcon />
          <span>{buttonText}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InputCard;
