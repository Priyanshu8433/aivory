import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { InputCard, OutputCard } from "@/components/ui/cards/index";
import { Hash } from "lucide-react";
import LabelList from "../label/LabelList";
import { useState } from "react";

const Labels = [
  {
    name: "General",
    value: "general",
  },
  {
    name: "Technology",
    value: "technology",
  },
  {
    name: "Business",
    value: "business",
  },
  {
    name: "Health",
    value: "health",
  },
  {
    name: "Lifestyle",
    value: "lifestyle",
  },
  {
    name: "Education",
    value: "education",
  },
  {
    name: "Travel",
    value: "travel",
  },
  {
    name: "Food",
    value: "food",
  },
];

const submitAction = () => {
  console.log("Title generated");
};

const BlogTItles = () => {
  const [category, setCategory] = useState("general");
  return (
    <div className="flex gap-4">
      <InputCard
        title={"AI Title Generator"}
        buttonText="Generate Title"
        buttonIcon={Hash}
        colorScheme="chart2"
        submitAction={submitAction}
      >
        {/* Input field */}
        <div className="flex flex-col gap-3 mb-6">
          <Label htmlFor="article-topic">Article Topic</Label>
          <Input
            type="text"
            placeholder="Unicorns are better than mermaids..."
            id="article-topic"
          />
        </div>
        {/* Tag select */}
        <div className="flex flex-col gap-3">
          <Label>Article Length</Label>
          <div className="flex gap-2">
            <LabelList
              Labels={Labels}
              value={category}
              onChange={setCategory}
              colorScheme="chart2"
            />
          </div>
        </div>
      </InputCard>
      <OutputCard
        icon={Hash}
        colorScheme="chart2"
        title={"Generated Title"}
        desc={"Enter a topic and click “Generate title to get started"}
      ></OutputCard>
    </div>
  );
};

export default BlogTItles;
