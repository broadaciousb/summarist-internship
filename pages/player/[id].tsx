import Link from "next/link";
import SideBarNav from "@/components/SideBarNav";
import SearchBar from "@/components/SearchBar";
import SideBarLogo from "@/components/SideBarLogo";
import AudioPlayer from "@/components/AudioPlayer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increment as openModal } from "@/redux/ToggleModalSlice";
import { useState } from "react";
import MobileSideBarNav from "@/components/MobileSideBar";
import LoadScreen from "@/components/LoadScreen";
import { stopLoading } from "@/redux/LoadingSlice";

export default function Player() {
  const dispatch = useAppDispatch();
  const currentBook = useAppSelector((state) => state.myBook.currentBook);
  const textSize = useAppSelector((state) => state.toggleFontSize.fontSize);
  const isSideBarOpen: boolean = useAppSelector(
    (state) => state.toggleSideBar.isSideBarOpen
  );
  const loading = useAppSelector((state) => state.loading.loading);

  console.log(textSize);

  // AUDIO PROGRESS BAR
  const max = 204.048;
  const [audioProgress, setAudioProgress] = useState(0);
  const progressPercent = (audioProgress / max) * 100;

  function AudioProgressBar(prog: number) {
    setAudioProgress(prog);
  }

  dispatch(stopLoading());
  return (
    <div className="relative flex flex-col md:ml-[200px] w-[calc(100% - 200px)]">
      {loading && <LoadScreen />}
      <div className="sidebar bg-[#f7faf9] w-[200px] invisible md:visible fixed top-[0] bottom-[140px] left-[0] z-[1000]">
        <SideBarNav />
      </div>
      {/* SMALL SCREEN SIDEBAR */}
      {isSideBarOpen && <MobileSideBarNav />}
      {/* SEARCH BAR */}
      <SearchBar />
      <div className="summary relative w-full overflow-y-auto h-[calc(100% - 160px)]">
        <div className="audio__book--summary p-[24px] max-w-[800px] my-0 mx-auto whitespace-pre-line">
          {currentBook?.subscriptionRequired ? (
            <div className="settings__login--wrapper max-w-[460px] flex flex-col items-center my-0 mx-auto">
              <img
                className="w-full h-full"
                src="https://summarist.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin.e313e580.png&w=1080&q=75"
                alt=""
              />
              <div className="settings__login--text text-2xl font-[700] text-[] text-center mb-[16px]">
                Log in to your account to read and listen to the book
              </div>
              <Link
                href="/choose-plan"
                className="btn max-w-[180px] text-[#032b41] bg-[#2bd97c] hover:bg-[#20ba68]"
              >
                Upgrade to Premium
              </Link>
            </div>
          ) : (
            <div className="">
              <div className="audio__book--summary-title text-[#032b41] text-3xl border-b border-b-[#e1e7ea] mb-[32px] pb-[16px] leading-[1.5] font-[700]">
                {currentBook?.title}
              </div>
              <div
                className={`inner__book--description flex items-center w-full text-${textSize} text-[#032b41] font-[500] leading-[1.5]`}
              >
                {currentBook?.summary}
              </div>
            </div>
          )}
        </div>
      </div>

      <AudioPlayer />
    </div>
  );
}
