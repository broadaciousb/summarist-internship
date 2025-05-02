import Image from "next/image";
import Logo from "/assets/logo.png";

export default function SideBarNav() {
  return (
    <div className="sidebar bg-[#f7faf9] w-[200px] fixed top-[0] left-[0] h-screen z-[1000]">
      <div className="sidebar__logo h-[60px] max-w-[160px] pt-[16px] my-[0] mx-auto">
        <Image
          src={Logo}
          alt="logo"
          className="absolute w-full h-[40px] max-w-[160px]"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
}
