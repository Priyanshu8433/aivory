import { NextResponse } from "next/server";

export function handleError(error) {
  if (error.isOperational) {
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode }
    );
  }

  if (error.name === "ValidationError") {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(
    { error: error.message || "Internal Server Error" },
    { status: 500 }
  );
}

export function asyncHandler(fn) {
  return async function (request) {
    try {
      return await fn(request);
    } catch (error) {
      return handleError(error);
    }
  };
}
