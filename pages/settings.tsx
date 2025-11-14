import { auth, db } from "@/Firebase/firebase.config";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import MobileSideBarNav from "@/components/MobileSideBar";
import SearchBar from "@/components/SearchBar";
import SideBarNav from "@/components/SideBarNav";

export default function settings() {
  const user = useAppSelector((state) => state.user.currentUser);
  const isSideBarOpen: boolean = useAppSelector(
    (state) => state.toggleSideBar.isSideBarOpen
  );

  return (
    <div className="flex flex-col m-[0] md:ml-[200px] w-[calc(100% - 200px)]">
      <div className="sidebar bg-[#f7faf9] w-[200px] invisible md:visible fixed top-[0] bottom-[60px] left-[0] z-[1000]">
        <SideBarNav />
      </div>
      {/* SMALL SCREEN SIDEBAR */}
      {isSideBarOpen && <MobileSideBarNav />}
      {/* SEARCH BAR */}
      <SearchBar />
      <div className="container">
        <div className="row">
          <div className="settings_title text-[32px] font-[700] pb-[16px] mb-[32px] border-b border-[#e1e7ea]">
            Settings
          </div>
          <div className="settings_content flex flex-col gap-[8px] pb-[16px] mb-[32px] border-b border-[#e1e7ea]">
            <div className="settings__sub-title text-lg font-[700]">
              Your Subscription Plan
            </div>
            <div className="settings_text">Basic</div>
            <div className="w-[180px]">
              <button
                className="btn text-[#032b41] bg-[#2bd97c] hover:bg-[#20ba68]"
                onClick={(e) => {
                  e.preventDefault;
                }}
              >
                Upgrade to Premium
              </button>
            </div>
          </div>
          <div className="settings_content flex flex-col gap-[8px] pb-[16px] mb-[32px]">
            <div className="settings__sub-title text-lg font-[700]">Email</div>
            <div className="settings_text">{user?.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
