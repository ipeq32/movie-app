import { prisma } from "@lib/prisma";
import { NextResponse } from "next/server";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const formdata = await request.formData();
    const email = formdata.get("email") as string;
    const password = formdata.get("password") as string;

    const userData = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!userData) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isPasswordValid = await compare(password, userData.hashedPassword);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const { hashedPassword, deletedAt, ...returnUser } = userData;

    const token = jwt.sign(
      {
        user: returnUser,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );

    if (!token) {
      return NextResponse.json(
        { message: "An error occurred while generating token" },
        { status: 500 }
      );
    }

    request.headers.set("Authorization", `Bearer ${token}`);

    return NextResponse.json(
      { message: "Login successful", session: returnUser, token },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
