import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="h-[80px]">
      <div
        className="
        flex
        justify-between
        items-center
        max-w-[1070px]
        h-full
        w-full
        mx-auto
        px-[24px]"
      >
        <figure className="m-w-[200px]">
          <Image className="h-full w-full" src="/assets/logo.png" alt="logo"/>
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
