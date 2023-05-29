import HamburgerIcon from "@/components/icons/HamburgerIcon";
import SettingsIco from "@/components/icons/SettingsIcon";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-white">
      <div>
        <h1 className="text-lg">Logo</h1>
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
