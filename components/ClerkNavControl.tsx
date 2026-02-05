"use client"
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


export function ClerkNavControl() {
  return (
    <>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
    </>
  )
}