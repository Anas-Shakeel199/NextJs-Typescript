import { NextRequest, NextResponse } from "next/server";

interface parmsType {
    params: {
        id: number
    }
}

export async function GET(request:NextRequest, {params}: parmsType){
    const {id} = params
    return NextResponse.json({
        postID:id
    })

}