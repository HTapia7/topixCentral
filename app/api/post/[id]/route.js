import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export const GET = async(request, { params }) => {
  try {
    const { id } = params

    const post = await prisma.post.findUnique({
      where: {
        id
      }
    })

    if(!post){
      return NextResponse.json({
        message: "Post id does not exist", error},
        {status: 404} )
    }
    return NextResponse.json(post)

  } catch (error) {
   return NextResponse.json({ message: "GET error" , error} , { status: 500 })
  }
}

export const PUT = async(request, { params }) => {
  try {
    const reqBody = await request.json()
    const { title , content } = reqBody

    const { id } = params

    const updatePost = await prisma.post.update({
      where: {
        id
      },
      data: {
        title,
        content
      }
    })

    if(!updatePost){
      return NextResponse.json({
        message: "Post id does not exist", error},
        {status: 404} )
    }
    return NextResponse.json(updatePost)

  } catch (error) {
   return NextResponse.json({ message: "GET error" , error} , { status: 500 })
  }
}

export const DELETE = async(request, { params }) => {
  try {
    
    const { id } = params

    const deletePost = await prisma.post.delete({
      where: {
        id
      }
    })
    console.log(deletePost)
    return NextResponse.json({ message: 'Post has been deleted'})
  } catch (error) {
   return NextResponse.json({ message: "DELETE error" , error} , { status: 500 })
  }
}