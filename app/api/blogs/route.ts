import { NextResponse } from "next/server";

import prisma from '../../lib/prismadb'
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
  request: Request, 
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return console.log('Hi');
    
  }

  const body = await request.json();
  const { 
    name,
    description,
    imageSrc
   } = body;



  const listing = await prisma.listing.create({
    data: {
      name,
      imageSrc,
      description,
      userId:currentUser.id
   
    }
  });

  return NextResponse.json(listing);
}