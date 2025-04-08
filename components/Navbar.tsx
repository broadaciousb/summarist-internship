import Image from "next/image";
import Logo from "/assets/logo.png";

export default function Navbar() {
  return (
    <nav className="h-[80px]">
      <div
        className="
        h-full
        w-full
        flex
        justify-between
        items-center
        max-w-[1070px]
        my-[0]
        mx-auto
        px-[24px]"
      >
        <figure className="max-w-[200px] w-full h-full relative">
          <Image
            src={Logo}
            alt="logo"
            layout="fill"
            objectFit="contain"
            className="absolute"
            width={0}
            height={0}
          />
        </figure>
        <ul className="flex gap-[24px]">
          <li
            className="text-[#032b41]
          cursor-pointer
          transition-colors
          duration-100
          hover:text-[#2bd97c]"
          >
            Login
          </li>
          <li className="text-[#032b41] cursor-not-allowed">About</li>
          <li className="text-[#032b41] cursor-not-allowed">Contact</li>
          <li className="text-[#032b41] cursor-not-allowed">Help</li>
        </ul>
      </div>
    </nav>
  );
}
