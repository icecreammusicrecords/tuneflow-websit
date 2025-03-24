import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Application from "@/models/Application";

export async function POST(req: NextRequest) {
  try {
    console.log("API request received...");

    await dbConnect();
    console.log("Database connected...");

    const data = await req.json();
    console.log("Received application data:", data);

    // Store in MongoDB
    const newApp = await Application.create(data);
    console.log("Data saved to database!");

    return NextResponse.json(
      { success: true, message: "Data saved!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}
