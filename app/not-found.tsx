import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Image
        priority={true}
        // src='/images/logo.svg'
        src="/images/promo.jpg"
        width={48}
        height={48}
        alt={`Cooking Family Recipes logo`}
      />
      <div className="p-6 rounded-lg shadow-md w-1/3 text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        {/* destructive is red */}
        <p className="text-destructive">Could not find requested resource</p>

        <div className="mt-4 ml-0">
          {/* <Button asChild variant="ghost"> */}
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>

        {/* <Button
          variant='outline'
          className='mt-4 ml-2'
          onClick={() => (window.location.href = '/')}
        >
          Back to home
        </Button> */}
      </div>
    </div>
  );
};

export default NotFound;
