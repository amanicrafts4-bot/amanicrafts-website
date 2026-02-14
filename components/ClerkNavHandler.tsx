import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import { User } from "lucide-react"


export default function ClerNavHandler() {
  return (
    <>
        <SignedOut>
            <SignInButton mode="modal">
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm">Sign In</button>
            </SignInButton>
            </SignedOut>
        <SignedIn>
            <div className="flex gap-4">
              <Link
                href="/admin"
                aria-label="Account"
                className={`p-2 hidden bg-amber-800 text-sm px-2 text-white rounded-full sm:block transition-colors duration-500`}
              >
                <p className='flex'>Admin <User className="h-5 w-5 stroke-[1.5]" /></p>
              </Link>
            
            <UserButton  />
            </div>
        </SignedIn>
      
    </>
  )
}