import Logo from "../assets/logo.png";
import Image from "next/image";

export default function SideBarLogo() {
  return (
    <div className="sidebar__logo h-[60px] max-w-[160px] pt-[16px] my-[0] mx-auto">
      <Image
            src={Logo}
            alt="logo"
            className="absolute w-full h-[40px] max-w-[160px]"
            width={0}
            height={0}
          />
    </div>
  );
}
