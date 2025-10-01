import React from "react";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";
import { Separator } from "@/components/shadcn/ui/separator";

const SecNavbar = () => {
  return (
    <>
      <div className="px-8 py-3 bg-sidebar flex justify-between items-center">
        <span className="text-3xl font-bold">
          A<span className="text-primary">i</span>vory
        </span>
        <ThemeToggleButton />
      </div>
      <Separator />
    </>
  );
};

export default SecNavbar;
