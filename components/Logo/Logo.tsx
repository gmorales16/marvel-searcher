import Link from "next/link";
import { LogoImage } from "./styledLogo";
export default function Logo() {
  return (
    <Link href={"/"}>
      <LogoImage />
    </Link>
  );
}
