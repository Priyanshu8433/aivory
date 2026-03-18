import { NextResponse } from "next/server";
import { asyncHandler } from "@/middlewares/errorHandler";
import { ai } from "@/lib/gemini";

// Generate article
export const generateArticle = asyncHandler(async (request) => {
  const { topic, length } = await request.json();
  // Logic to generate article based on topic and length
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Write a ${length} words article on the topic: ${topic}`,
    config: {
      thinkingConfig: {
        thinkingBudget: 0,
      },
      systemInstructions: `You are an expert content writer specializing in creating engaging, well-structured Markdown articles. 
                            You always write in Markdown format using clear section headings, subheadings, bullet points, and code blocks when needed. 
                            Avoid any meta text (like “Here’s your article”). Only output the article itself.
                            `,
    },
  });
  return NextResponse.json({
    status: "success",
    article: response.text,
  });
});

// Generate blog titles
export const generateBlogTitles = asyncHandler(async (request) => {
  const { keyword, category } = await request.json();
  // Logic to generate blog titles based on keyword and category
  console.log({ keyword, category });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Generate 5 blog post titles for a blog in the category ${category} for the keyword: ${keyword}. And don't start with "Here are five blog titles..."`,
    config: {
      thinkingConfig: {
        thinkingBudget: 0,
      },
      // systemInstructions: ``,
    },
  });
  console.log(response.text);
  return NextResponse.json({
    status: "success",
    title: response.text,
  });
});

// Generate images
export const generateImages = asyncHandler(async (request) => {
  const { prompt } = await request.json();
  // Logic to generate images based on prompt
  return NextResponse.json({
    message: `Images generated for prompt: ${prompt}`,
  });
});

// Remove background
export const removeBackground = asyncHandler(async (request) => {
  const { image } = await request.json();
  // Logic to remove background from image
  return NextResponse.json({
    message: `Background removed from image`,
  });
});

// Remove objects
export const removeObjects = asyncHandler(async (request) => {
  const { image } = await request.json();
  // Logic to remove objects from image
  return NextResponse.json({
    message: `Objects removed from image`,
  });
});

// Review Resume
export const reviewResume = asyncHandler(async (request) => {
  const { resume } = await request.json();
  // Logic to review resume
  return NextResponse.json({
    message: `Resume reviewed`,
  });
});
