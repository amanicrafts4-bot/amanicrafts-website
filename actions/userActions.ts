"use server";

import { prisma } from "@/lib/prisma";
import { UserSchema } from "@/lib/zodSchemas";

export async function updateUserPhone(clerkUserId: string, phone: string) {
  const validated = UserSchema.pick({ phoneNumber: true }).safeParse({ phoneNumber: phone });

  if (!validated.success) return { error: "Invalid phone format" };

  return await prisma.user.update({
    where: { id: clerkUserId },
    data: { phoneNumber: validated.data.phoneNumber },
  });
}
