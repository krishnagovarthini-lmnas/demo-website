import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, notes, option } = await req.json();

  try {
    const response = await fetch(
      "https://lumi.lmnaslens.com/api/method/erpnext.templates.utils.send_message",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie:
            "full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=",
        },
        body: JSON.stringify({
          sender: email,
          message: notes,
          subject: `From Website - enquiry type: ${option}`,
        }),
      }
    );
    const data = await response.json();
    return NextResponse.json({ message: "Message sent", data });
  } catch (error) {
    console.error("Error while sending message:", error);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
