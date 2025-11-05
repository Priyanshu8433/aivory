import {
  deleteCreation,
  getCreation,
  updateCreation,
} from "@/controllers/creation.controller";

export const GET = getCreation;
export const PUT = updateCreation;
export const DELETE = deleteCreation;
