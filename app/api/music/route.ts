// app/api/music/route.ts
import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import MusicSubmission from "@/models/MusicSubmission";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const artistEmail = searchParams.get("artistEmail");
    if (!artistEmail) {
      return NextResponse.json(
        { success: false, error: "Missing artistEmail" },
        { status: 400 }
      );
    }

    // fetch all submissions for this user
    const submissions = await MusicSubmission.find({ artistEmail });
    return NextResponse.json({ success: true, releases: submissions });
  } catch (error) {
    console.error("GET /api/music error:", error);
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}
