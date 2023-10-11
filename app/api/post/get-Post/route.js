import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export const GET = async () => {
  try {
    const allPosts = await prisma.post.findMany()

    return NextResponse.json(allPosts);
    
  } catch (error) {
    return NextResponse.json({ message: 'GET error' , error } , { status: 500})
  }
}