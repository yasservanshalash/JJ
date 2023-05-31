export const dynamic = 'force-dynamic'

import HamburgerIcon from "@/components/icons/HamburgerIcon";
import SettingsIco from "@/components/icons/SettingsIcon";
import Link from "next/link";
import Logo1 from "../../../../public/logo1.png"
import Logo2 from "../../../../public/logo2.png"
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-3 bg-white lg:w-[60%] lg:m-auto">
      <div className="flex items-center gap-1">
        <Image src={Logo1} width={32} height={32} alt="logo" />
        <h1 className="text-lg font-extrabold">JustJuniors</h1>
      </div>
      <div className="sm:inline md:hidden">
        <ul className="flex items-center gap-2">
          <li>
            <Link href={"/settings"}>
              <SettingsIco />
            </Link>
          </li>
          <li>
            <Link href={"/settings"}>
              <HamburgerIcon />
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:inline lg:inline ">
        <ul className="flex items-center gap-3">
          <li>
            <Link href={"/settings"}>
                <button style={{border: "1px solid gray", padding: "5px 15px", borderRadius: "10px"}} className="font-semibold hover:bg-[#a2a7ac44]">Log in</button>
            </Link>
          </li>
          <li>
            <Link href={"/settings"}>
            <button style={{border: "1px solid gray", padding: "5px 15px", borderRadius: "10px"}} className="bg-black text-white font-semibold hover:bg-white hover:text-black hover:border-solid hover:border-black">Sign up</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
