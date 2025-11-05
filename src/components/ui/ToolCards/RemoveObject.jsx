"use client";

import { Scissors } from "lucide-react";
import { InputCard, OutputCard } from "@/components/ui/cards/index";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { Textarea } from "@/components/shadcn/ui/textarea";

const submitAction = () => {
  console.log("Object removed");
};

const RemoveObject = () => {
  return (
    <div className="flex gap-4">
      <InputCard
        title={"AI Object Remover"}
        buttonText="Remove Object"
        buttonIcon={Scissors}
        colorScheme="chart2"
        submitAction={submitAction}
      >
        <div className="flex flex-col gap-3">
          <Label>Upload image</Label>
          <Input
            type="file"
            accept="image/*"
            className={"cursor-pointer mb-2"}
          />
        </div>
        <span className="text-[12px] text-muted-foreground mb-6">
          Supports JPG, PNG, and other image formats
        </span>

        <div className="flex flex-col gap-3">
          <Label>Describe the object to remove</Label>
          <Textarea placeholder="e.g., velociraptor or tung tung sahoo" />
        </div>
      </InputCard>
      <OutputCard
        icon={Scissors}
        colorScheme="chart2"
        title={"Processed Image"}
        desc={`Upload an image and click "Remove Object" to get started`}
      ></OutputCard>
    </div>
  );
};

export default RemoveObject;
