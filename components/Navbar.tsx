import Image from "next/image";
import Logo from "/assets/logo.png";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { increment as openModal } from "@/redux/ToggleModalSlice";
import { logout } from "@/redux/LoggedInSlice";
import { signUserOut } from "@/Firebase/firebase.config";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const isModalOpen: boolean = useAppSelector(
    (state) => state.toggleModal.isModalOpen
  );
  const isOnline: boolean = useAppSelector((state) => state.online.loggedIn);
  const dispatch = useAppDispatch();

  return (
    <nav className="h-[80px]">
      {isModalOpen && <LoginModal />}
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
        <figure className="max-w-[200px] min-w-[200px] w-full h-full relative">
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
          {!isOnline ? (
            <li
              className="text-[#032b41]
          cursor-pointer
          transition-colors
          duration-100
          hover:text-[#2bd97c]"
              onClick={(e) => {
                e.preventDefault;
                dispatch(openModal());
              }}
            >
              Login
            </li>
          ) : (
            <li
              className="text-[#032b41]
          cursor-pointer
          transition-colors
          duration-100
          hover:text-[#2bd97c]"
              onClick={(e) => {
                e.preventDefault;
                signUserOut();
                dispatch(logout());
                console.log(isOnline);
              }}
            >
              Logout
            </li>
          )}

          <li className="text-[#032b41] cursor-not-allowed hidden sm:block">About</li>
          <li className="text-[#032b41] cursor-not-allowed hidden sm:block">Contact</li>
          <li className="text-[#032b41] cursor-not-allowed hidden sm:block">Help</li>
        </ul>
      </div>
    </nav>
  );
}
