import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function authGuard(request: Request) {
  const token = request.headers.get("Authorization");

  const checkToken = token?.split(" ")[1];

  if (!checkToken) {
    return NextResponse.json({ message: "No token provided" }, { status: 401 });
  }

  try {
    jwt.verify(checkToken, process.env.JWT_SECRET_KEY);

    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}
