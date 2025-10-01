import { Eraser } from "lucide-react";
import { InputCard, OutputCard } from "@/components/ui/cards/index";
import { Label } from "@/components/shadcn/ui/label";
import { Input } from "@/components/shadcn/ui/input";

const submitAction = () => {
  console.log("Background Removed");
};

const RemoveBackground = () => {
  return (
    <div className="flex gap-4">
      <InputCard
        title={"AI Background Remover"}
        buttonText="Remove Background"
        buttonIcon={Eraser}
        colorScheme="chart5"
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
        <span className="text-[12px] text-muted-foreground">
          Supports JPG, PNG, and other image formats
        </span>
      </InputCard>
      <OutputCard
        icon={Eraser}
        colorScheme="chart5"
        title={"Processed Image"}
        desc={`Upload an image and click "Remove Background" to get started`}
      ></OutputCard>
    </div>
  );
};

export default RemoveBackground;
