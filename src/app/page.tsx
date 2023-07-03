"use client";
import { db } from "@/db";
import { countries } from "@/db/schema";
import Image from "next/image";

export default function Home() {
  const countries = 1;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(countries)}
    </main>
  );
}
