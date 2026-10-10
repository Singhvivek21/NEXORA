import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = contactFormSchema.parse(body);

    return NextResponse.json({
      success: true,
      message: "Enquiry validated and recorded successfully.",
      referenceId: `NX-${Date.now().toString(36).toUpperCase()}`,
      receivedAt: new Date().toISOString(),
      data: {
        name: validatedData.name,
        company: validatedData.company,
        serviceNeeded: validatedData.serviceNeeded,
      }
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed.",
          errors: error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Invalid request payload." },
      { status: 400 }
    );
  }
}
