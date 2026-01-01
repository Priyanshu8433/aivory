"use client";

import { Label } from "@/components/shadcn/ui/label";
import { Input } from "@/components/shadcn/ui/input";
import { SquarePen } from "lucide-react";
import LabelList from "../label/LabelList";
import { useState } from "react";
import { InputCard, OutputCard } from "@/components/ui/cards/index";
import { toast } from "sonner";
import { Spinner } from "@/components/shadcn/ui/spinner";
import axios from "axios";

const Labels = [
  {
    name: "Short (500-800 words)",
    value: "500-800",
  },
  {
    name: "Medium (800-1200 words)",
    value: "800-1200",
  },
  {
    name: "Long (1200+ words)",
    value: "1200+",
  },
];

const WriteArticle = () => {
  const [articleLength, setArticleLength] = useState("500-800");
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedArticle, setGeneratedArticle] = useState("");

  /////////////////// FUNCTIONS ///////////////////

  const submitAction = async () => {
    // TODO: Integrate with backend API
    
    if (!article) {
      toast("Please enter an article topic", { type: "warning" });
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post("/api/v1/generate-article", {
        topic: article,
        length: articleLength,
      });
      setGeneratedArticle(response.data.article);
      console.log(response.data);
    } catch (error) {
      toast("Error generating article. Please try again later", { type: "error" });
    } 
    setIsLoading(false);

  };

  /////////////////// FUNCTIONS ///////////////////

  return (
    <div className="flex gap-4">
      <InputCard
        title={"Article Configuration"}
        buttonText="Generate Article"
        buttonIcon={SquarePen}
        colorScheme="chart3"
        submitAction={submitAction}
        disabled={isLoading}
      >
        {/* Input field */}
        <div className="flex flex-col gap-3 mb-6">
          <Label htmlFor="article-topic">Article Topic</Label>
          <Input
            type="text"
            placeholder="Chickens are cute dinosaurs with..."
            id="article-topic"
            value={article}
            onChange={(e) => setArticle(e.target.value)}
          />
        </div>
        {/* Tag select */}
        <div className="flex flex-col gap-3">
          <Label className={"mb-1"}>Article Length</Label>
          <div className="flex gap-2">
            <LabelList
              Labels={Labels}
              value={articleLength}
              onChange={setArticleLength}
              colorScheme="chart3"
            />
          </div>
        </div>
      </InputCard>

      <OutputCard
        icon={SquarePen}
        colorScheme="chart3"
        title={"Generated Article"}
        desc={"Enter a topic and click “Generate article” to get started"}
        content={generatedArticle}
        type={"text"}
        isLoading={isLoading}
      >
        {!isLoading && generatedArticle && (
          <p>{generatedArticle}</p>
        )}
        {/* {isLoading && (
          <div className="h-full flex justify-center items-center">
            <Spinner className={"size-8 text-muted-foreground"} />
          </div>
        )} */}
      </OutputCard>
    </div>
  );
};

export default WriteArticle;
