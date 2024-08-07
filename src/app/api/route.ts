import { NextResponse } from "next/server";
import { authGuard } from "./authGuard";

export async function GET(request: Request) {
  const response = await authGuard(request);

  if (response.status !== 200) {
    return response;
  }

  return NextResponse.json(
    { message: "You are authenticated" },
    { status: 200 }
  );
}
