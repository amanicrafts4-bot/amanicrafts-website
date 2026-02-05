// actions/onboarding.ts
"use server";

import { prisma } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function completeOnboarding(formData: FormData) {
  const { userId } = await auth();
  const phoneNumber = formData.get("phoneNumber") as string;

  if (!userId) throw new Error("Unauthorized");

  // 1. Update Supabase via Prisma
  await prisma.user.update({
    where: { id: userId },
    data: { phoneNumber },
  });

  // 2. Update Clerk Metadata so middleware knows we are done
  const client = await clerkClient();
  await client.users.updateUserMetadata(userId, {
    publicMetadata: { onboardingComplete: true },
  });

  redirect("/");
}
