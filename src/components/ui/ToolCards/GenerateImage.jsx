"use client";

import { Label } from "@/components/shadcn/ui/label";
import { Textarea } from "@/components/shadcn/ui/textarea";
import { InputCard, OutputCard } from "@/components/ui/cards/index";
import { Image } from "lucide-react";
import LabelList from "../label/LabelList";
import { useState } from "react";

const Labels = [
  {
    name: "Realistic",
    value: "realistic",
  },
  {
    name: "Ghibli style",
    value: "ghibli",
  },
  {
    name: "Anime style",
    value: "anime",
  },
  {
    name: "Cartoon style",
    value: "cartoon",
  },
  {
    name: "Fantasy style",
    value: "fantasy",
  },
  {
    name: "3D style",
    value: "3d",
  },
  {
    name: "Portrait style",
    value: "portrait",
  },
];

const submitAction = () => {
  console.log("Image generated");
};

const GenerateImage = () => {
  const [category, setCategory] = useState("realistic");
  return (
    <div className="flex gap-4">
      <InputCard
        title={"AI Image Generator"}
        buttonText="Generate Image"
        buttonIcon={Image}
        colorScheme="chart4"
        submitAction={submitAction}
      >
        {/* Input field */}
        <div className="flex flex-col gap-3 mb-6">
          <Label htmlFor="image-description">Describe your image</Label>
          <Textarea
            type="text"
            placeholder="A mammoth with dragon wings flying into hell..."
            id="image-description"
          />
        </div>

        {/* Tag select */}
        <div className="flex flex-col gap-3">
          <Label>Style</Label>
          <div className="flex gap-2">
            <LabelList
              Labels={Labels}
              value={category}
              onChange={setCategory}
              colorScheme="chart4"
            />
          </div>
        </div>
      </InputCard>
      <OutputCard
        icon={Image}
        colorScheme="chart4"
        title={"Generated Image"}
        desc={'Enter a topic and click “Generate title" to get started'}
      ></OutputCard>
    </div>
  );
};

export default GenerateImage;
