import { ShoppingCart, UserIcon, CookingPot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
// import { APP_NAME } from '@/lib/constants';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              // get a warning in console if don't set this.. I didn't.
              // priority={true}
              // src='/images/logo.svg'
              // Picture of a hoodie
              // / is in the public folder
              src="/images/promo.jpg"
              width={48}
              height={48}
              alt="Cooking logo"
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              Family Cooking Recipes
            </span>
          </Link>
        </div>

        <div className="space-x-2">
          {/* Just want a link inside the button, so not a click handler. 
              So use asChild. */}
          <Button asChild variant="ghost">
            <Link href="/cart">
              {/* Icon to the left of the text */}
              {/* <ShoppingCart /> */}
              <CookingPot />
              {/* Text */}
              {/* All Recipes */}
              Not Found
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/sample-error">
              <CookingPot />
            SampleError
            </Link>
          </Button>
          {/* A darker button for login */}
          <Button asChild>
            <Link href="/sign-in">
              <UserIcon />
              Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

// export default Header = () => {
//   return <>Header</>;
// };

export default Header;
