import { api } from "@/lib/apiCalls";
import dbConnect from "@/lib/db";

export async function GET() {
  await dbConnect();
  return await api();
}
