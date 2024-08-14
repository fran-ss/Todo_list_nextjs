import prisma from "@/lib/db";
import { NextResponse } from "next/server"

export async function GET() {
    const taks = await prisma.task.findMany({})
    return NextResponse.json(taks)
}
export async function POST() {
  return NextResponse.json({ sucess: true });
}
export async function PUT() {
  return NextResponse.json({ sucess: true });
}
export async function DELETE() {
  return NextResponse.json({ sucess: true });
}