import { Button } from "@/components/shadcn/ui/button";
import ThemeToggleButton from "@/components/ui/Buttons/ThemeToggleButton";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Navbar = ({ className }) => {
  return (
    <nav
      className={cn("flex justify-between items-center py-6 px-16", className)}
    >
      <span className="text-4xl font-bold text-foreground">
        A<span className="text-primary">i</span>vory
      </span>
      <div className="flex gap-4 items-center">
        <ThemeToggleButton />
        <Button size={"lg"} className="rounded-full text-base">
          Get Started <ArrowRight className="h-8 w-8" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
