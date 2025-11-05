"use client";

import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { InputCard, OutputCard } from "@/components/ui/cards/index";
import { FileText } from "lucide-react";

const submitAction = () => {
  console.log("Resume analyzed");
};

const ReviewResume = () => {
  return (
    <div className="flex gap-4">
      <InputCard
        title={"AI Resume Analyzer"}
        buttonText="Analyze Resume"
        buttonIcon={FileText}
        colorScheme="chart3"
        submitAction={submitAction}
      >
        <div className="flex flex-col gap-3">
          <Label>Upload resume</Label>
          <Input
            type="file"
            accept="application/pdf"
            className={"cursor-pointer mb-2"}
          />
        </div>
        <span className="text-[12px] text-muted-foreground">
          Supports PDFs only
        </span>
      </InputCard>
      <OutputCard
        icon={FileText}
        colorScheme="chart3"
        title={"Analysis Result"}
        desc={`Upload a PDF and click "Analyze Resume" to get started`}
      ></OutputCard>
    </div>
  );
};

export default ReviewResume;
