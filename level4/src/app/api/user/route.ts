import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){

    return NextResponse.json({
        name: "Anas",
        age: 21
    })
}

export async function POST(request:NextRequest){
    let {name, age} = await request.json()
    return NextResponse.json({
        name, age
    })
}