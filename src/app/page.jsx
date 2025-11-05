"use client";

import HeroSection from "@/components/ui/HeroSection";
import Navbar from "@/components/ui/menus/Navbar";

export default function Home() {
  return (
    <>
      <Navbar className={"fixed left-0 top-0 w-full"} />
      <div className="max-w-[1480px] mx-auto">
        <HeroSection />
      </div>
    </>
  );
}
