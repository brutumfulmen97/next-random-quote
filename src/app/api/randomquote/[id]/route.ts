import { NextResponse } from "next/server";
import getRandomQuote from "@/lib/getRandomQuote";

type Props = {
    params: {
        id: string;
    }
}

export async function GET(req: Request, {params: {id}} : Props) {

    const result = await getRandomQuote(id);

    return NextResponse.json(result);
}
