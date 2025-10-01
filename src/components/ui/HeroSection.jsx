"use client";

import React from "react";
import { Button } from "../shadcn/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  return (
    <section className="flex items-center justify-center h-dvh ">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-1 text-foreground">
          Create amazing content <br />
          with <span className="text-primary">AI tools</span>
        </h1>
        <p className="text-md tracking-wide m-w-[200px] mb-10 font-medium text-muted-foreground">
          Transform your content creation with our suite of premium AI tools.
          Write articles, <br />
          generate images, and enhance your workflow.
        </p>
        <div className="flex gap-6 w-full">
          <Button
            size={"lg"}
            className={"text-lg mx-auto"}
            onClick={() => {
              router.push("/tools");
            }}
          >
            Start creating now <ArrowRight className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
