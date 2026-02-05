import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma'; // Ensure this matches your singleton path

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env');
  }

  // Get the headers for verification
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', { status: 400 });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  // Verify the payload
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', { status: 400 });
  }

  const { id } = evt.data;
  const eventType = evt.type;

  // Handle User Created or Updated
  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { email_addresses, phone_numbers, first_name, last_name } = evt.data;
    
    // Find primary email and phone
    const email = email_addresses[0]?.email_address;
    const phone = phone_numbers[0]?.phone_number || null;

    await prisma.user.upsert({
      where: { id: id },
      update: {
        email: email,
        phoneNumber: phone,
        name: `${first_name || ''} ${last_name || ''}`.trim() || null,
      },
      create: {
        id: id,
        email: email,
        phoneNumber: phone,
        name: `${first_name || ''} ${last_name || ''}`.trim() || null,
      },
    });
  }

  // Handle User Deleted
  if (eventType === 'user.deleted') {
    await prisma.user.delete({
      where: { id: id },
    });
  }

  return new Response('', { status: 200 });
}
