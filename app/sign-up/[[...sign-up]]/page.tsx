import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <SignUp 
        
        appearance={{
          elements: {
            formButtonPrimary: 'bg-black hover:bg-gray-800 text-sm normal-case',
          },
        }}
      />
    </div>
  );
}


