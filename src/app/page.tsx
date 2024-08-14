import prisma from "@/lib/db";
import Image from "next/image";

export default async function Home() {
  const taks = await prisma.task.findMany({})
  console.log(taks)
  return (
    <h1>ola mundo </h1>
  );
}
