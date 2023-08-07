import Link from "next/link";
import { LogoImage } from "./styledLogo";
const Logo = () => {
  return (
    <Link href={"/"}>
      <LogoImage />
    </Link>
  );
};

export default Logo;
