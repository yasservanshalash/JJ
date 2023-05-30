import HamburgerIcon from "@/components/icons/HamburgerIcon";
import SettingsIco from "@/components/icons/SettingsIcon";
import Link from "next/link";
import Logo1 from "../../../../public/logo1.png"
import Logo2 from "../../../../public/logo2.png"
import Image from "next/image";
const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-3 bg-white">
      <div className="flex items-center gap-1">
        <Image src={Logo1} width={32} height={32} alt="logo" />
        <h1 className="text-lg font-extrabold">JustJuniors</h1>
      </div>
      <div>
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
    </nav>
  );
};

export default NavBar;
