import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export const POST = async ( request ) => {

    try {
          const reqBody = await request.json();
          const { title , content } = reqBody

          const newPost = await prisma.post.create({
            data: {
              title,
              content
            }
          })
          
      return NextResponse.json(newPost);

    } catch (error) {
      return NextResponse.json({ message: 'POST error' , error } , { status: 500})
    }
}