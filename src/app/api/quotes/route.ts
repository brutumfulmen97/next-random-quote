import { NextResponse } from "next/server";
import getAllQuotes from "@/lib/getAllQuotes";

export async function GET(req: Request) {
    const results = await getAllQuotes();

    return NextResponse.json(results);
}
