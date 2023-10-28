import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { LogIn } from "lucide-react";
import fileUpload from "@/components/fileUpload";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!(await auth());

  return (
    
    <div className="w-screen min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-sky-500 via-orange-200 to-yellow-600">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-4xl font-semibold">
              ElliotePDF.ai - Chat with PDF </h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="flex mt-2">
            {isAuth && <Button>Start the Chat</Button>}
          </div>

          <p className="max-w-xl mt-1 text-lg text-gray-700">
            For students, researchers and professionals to instantly answer
            questions and understand research with AI
          </p>

          <div className="w-full mt-4">
            {isAuth ? (

             <fileUpload/>
            )
             : (
              <Link href="/signin">
                <Button>
                  Login to get Started!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
    </div>
    </div>
  );
}
