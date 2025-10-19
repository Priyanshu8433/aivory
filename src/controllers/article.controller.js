import dbConnect from "@/lib/db";
import Article from "@/models/article.model";
import { NextResponse } from "next/server";
import { asyncHandler } from "@/middlewares/errorHandler";

// Get all articles
export const getAllArticles = asyncHandler(async (request) => {
  await dbConnect();

  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");

  let filter = {};
  if (userId) {
    filter = { userId };
  }

  const articles = await Article.find(filter).sort({ createdAt: -1 });
  return NextResponse.json(
    { status: "success", data: articles },
    { status: 200 }
  );
});

// Create a new article
export const createArticle = asyncHandler(async (request) => {
  const { title, content, userId } = await request.json();

  await dbConnect();

  const article = await Article.create({
    title,
    content,
    userId,
  });

  return NextResponse.json(
    { status: "success", data: article },
    { status: 201 }
  );
});
