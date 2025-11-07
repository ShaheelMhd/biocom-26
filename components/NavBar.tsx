import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
}

const NavBar = ({ className }: Props) => {
  return (
    <nav
      className={`mx-auto w-[95%] md:w-[80%] mt-5 py-4 px-7 z-50 backdrop-blur-md rounded-full
        bg-white/10 border border-white/20 text-white ${className}`}
    >
      <div className="flex justify-between font-bold">
        <Link href="/">
          <Image
            src="/biocom_logo.png"
            alt="Biocom '26 logo"
            height={25}
            width={37.5}
          />
        </Link>
        <Link href="/register" className="font-normal">
          <span className="flex">
            Register
            <ArrowRight className="-ml-0.5 scale-60" />
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
