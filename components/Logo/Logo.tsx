import Link from "next/link";
import { styled } from "styled-components";
const LogoImage = styled.img.attrs({
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png",
  alt: "Logo Marvel",
})`
  width: 100px;
  height: 50px;
`;
export default function Logo() {
  return (
    <Link href={"/"}>
      <LogoImage />
    </Link>
  );
}
