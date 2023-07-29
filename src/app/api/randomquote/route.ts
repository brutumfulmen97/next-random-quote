import { NextResponse } from "next/server";
import getRandomQuote from "@/lib/getRandomQuote";

export async function GET(req: Request) {
    const result = await getRandomQuote();

    return NextResponse.json(result);
}
