import {
  createCreation,
  getAllCreations,
} from "@/controllers/creation.controller";

export const GET = getAllCreations;
export const POST = createCreation;
