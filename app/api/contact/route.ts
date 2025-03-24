import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";  // the same dbConnect you used before
import ContactMessage from "@/models/ContactMessage";

export async function POST(req: NextRequest) {
  try {
    // 1) Connect to MongoDB
    await dbConnect();

    // 2) Parse the incoming JSON data
    const data = await req.json();

    // 3) Insert a new document in "contactmessages" collection
    const newMessage = await ContactMessage.create(data);

    // 4) Return success
    return NextResponse.json({ success: true, message: newMessage }, { status: 201 });
  } catch (error) {
    console.error("Error saving contact message:", error);
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}
