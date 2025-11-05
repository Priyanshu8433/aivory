import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Creation from "@/models/creation.model";
import { asyncHandler } from "@/middlewares/errorHandler";

// Get all creations
export const getAllCreations = asyncHandler(async (request) => {
  await dbConnect();
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");
  const _id = url.searchParams.get("_id");
  const filter = {};

  if (userId) filter.userId = userId;
  if (_id) filter._id = _id;

  const creations = await Creation.find(filter).sort({ createdAt: -1 });
  return NextResponse.json({ status: "success", data: creations });
});

// Get creation
export const getCreation = asyncHandler(async (request, context) => {
  await dbConnect();
  const { id } = (await context.params) ?? {};

  if (!id) {
    return NextResponse.json(
      { status: "fail", message: "Missing id parameter" },
      { status: 400 }
    );
  }

  const creation = await Creation.findById(id);

  if (!creation) {
    return NextResponse.json(
      { status: "fail", message: "Creation not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ status: "success", data: creation });
});

// Create a new creation
export const createCreation = asyncHandler(async (request) => {
  await dbConnect();
  const body = await request.json();
  const newCreation = await Creation.create(body);
  return NextResponse.json(
    { status: "success", data: newCreation },
    { status: 201 }
  );
});

// Delete a creation by ID
export const deleteCreation = asyncHandler(async (request, context) => {
  await dbConnect();
  const { id } = (await context.params) ?? {};

  if (!id) {
    return NextResponse.json(
      { status: "fail", message: "Missing id parameter" },
      { status: 400 }
    );
  }

  const creation = await Creation.findByIdAndDelete(id);
  if (!creation) {
    return NextResponse.json(
      { status: "fail", message: "Creation not found" },
      { status: 404 }
    );
  }
  return NextResponse.json({
    status: "success",
    message: "Creation deleted successfully",
  });
});

// Update a creation by ID
export const updateCreation = asyncHandler(async (request, context) => {
  await dbConnect();
  const { id } = (await context.params) ?? {};

  if (!id) {
    return NextResponse.json(
      { status: "fail", message: "Missing id parameter" },
      { status: 400 }
    );
  }

  const body = await request.json();
  const updatedCreation = await Creation.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  if (!updatedCreation) {
    return NextResponse.json(
      { status: "fail", message: "Creation not found" },
      { status: 404 }
    );
  }
  return NextResponse.json({
    status: "success",
    data: updatedCreation,
  });
});

export const likeCreation = asyncHandler(async (request, context) => {
  await dbConnect();
  const { id } = (await context.params) ?? {};
  const body = await request.json();
  const { userId } = body;
  if (!id || !userId) {
    return NextResponse.json(
      { status: "fail", message: "Missing id or userId parameter" },
      { status: 400 }
    );
  }

  const creation = await Creation.findById(id);

  if (!creation) {
    return NextResponse.json(
      { status: "fail", message: "Creation not found" },
      { status: 404 }
    );
  }

  if (creation.likedBy.includes(userId)) {
    return NextResponse.json(
      { status: "fail", message: "User has already liked this creation" },
      { status: 400 }
    );
  }

  creation.likedBy.push(userId);
  await creation.save();

  return NextResponse.json({
    status: "success",
    data: creation,
  });
});

export const unlikeCreation = asyncHandler(async (request, context) => {
  await dbConnect();
  const { id } = (await context.params) ?? {};
  const body = await request.json();
  const { userId } = body;
  if (!id || !userId) {
    return NextResponse.json(
      { status: "fail", message: "Missing id or userId parameter" },
      { status: 400 }
    );
  }

  const creation = await Creation.findById(id);

  if (!creation) {
    return NextResponse.json(
      { status: "fail", message: "Creation not found" },
      { status: 404 }
    );
  }

  creation.likedBy = creation.likedBy.filter((uid) => uid !== userId);
  await creation.save();
  return NextResponse.json({
    status: "success",
    data: creation,
  });
});
