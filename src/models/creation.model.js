import mongoose from "mongoose";

const CreationSchema = new mongoose.Schema(
  {
    prompt: { type: String, required: [true, "Prompt is required"] },
    type: {
      type: String,
      enum: ["text", "image"],
      required: [true, "A creation must have a type"],
    },
    content: { type: String, required: [true, "Content is required"] },
    userId: { type: String, required: [true, "User ID is required"] },
    likedBy: { type: [String], default: [] },
    published: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Prevents duplicate likes from the same user
CreationSchema.pre("save", function (next) {
  this.likedBy = Array.from(new Set(this.likedBy));
  next();
});

const Creation =
  mongoose.models.Creation || mongoose.model("Creation", CreationSchema);

export default Creation;
