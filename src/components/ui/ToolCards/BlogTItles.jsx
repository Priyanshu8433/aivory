"use client";

import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { InputCard, OutputCard } from "@/components/ui/cards/index";
import { Hash } from "lucide-react";
import LabelList from "../label/LabelList";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

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

const BlogTItles = () => {
  const [category, setCategory] = useState("general");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedTitle, setGeneratedTitle] = useState("");
  const [keyword, setKeyword] = useState("");

  /////////////////// FUNCTIONS ///////////////////

  const submitAction = async () => {
    if (!keyword) {
      toast("Please enter a keyword", { type: "warning" });
      return;
    }
    console.log("Generating title for:", { keyword, category });

    setIsLoading(true);
    try {
      const response = await axios.post("/api/v1/generate-blog-title", {
        keyword,
        category,
      });
      setGeneratedTitle(response.data.title);
      console.log(response.data);
    } catch (error) {
      toast("Error generating title. Please try again later", {
        type: "error",
      });
    }
    setIsLoading(false);
  };

  /////////////////// FUNCTIONS ///////////////////

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
          <Label htmlFor="keyword">Keyword</Label>
          <Input
            type="text"
            placeholder="Unicorns are better than mermaids..."
            id="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        {/* Tag select */}
        <div className="flex flex-col gap-3">
          <Label>Category</Label>
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
        content={generatedTitle}
        type={"text"}
        isLoading={isLoading}
      >
        {!isLoading && generatedTitle && <p>{generatedTitle}</p>}
      </OutputCard>
    </div>
  );
};

export default BlogTItles;
