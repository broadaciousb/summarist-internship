import SideBarNav from "./SideBarNav";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrement as closeSideBar, increment as openSideBar } from "@/redux/ToggleSideBarSlice"

export default function MobileSideBarNav() {
  const dispatch = useAppDispatch();

  return (
    <div className="fixed h-full w-full z-10 bg-black/[0.75]">
      <div className="sidebar bg-[#f7faf9] w-[80%] hidden: md:visible fixed top-[0] h-[100vh] left-[0] z-[1000]">
        <SideBarNav />
      </div>
      <button className="h-full w-full" onClick={(e) => {
        e.preventDefault();
        dispatch(closeSideBar());
      }}></button>
    </div>
  );
}
