import SideBarNav from "@/components/SideBarNav";
import SearchBar from "@/components/SearchBar";
import { useAppDispatch } from "@/redux/hooks";
import { increment as openModal } from "@/redux/ToggleModalSlice";

export default function Player() {
  const dispatch = useAppDispatch();

  return (
    <div className="relative flex flex-col ml-[200px] w-[calc(100% - 200px)]">
      <SideBarNav />
      <SearchBar />

      <div className="summary relative w-full overflow-y-auto h-[calc(100% - 160px)]">
        <div className="audio__book--summary p-[24px] max-w-[800px] my-0 mx-auto whitespace-pre-line">
          <div className="audio__book--summary-title text-[#032b41] text-2xl border-b border-b-[#e1e7ea] mb-[32px] pb-[16px] leading-[1.5]">
            How to Win Friends and Influence People in the Digital Age
          </div>
          <div className="settings__login--wrapper max-w-[460px] flex flex-col items-center my-0 mx-auto">
            <img
              className="w-full h-full"
              src="https://summarist.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin.e313e580.png&w=1080&q=75"
              alt=""
            />
            <div className="settings__login--text text-2xl font-[700] text-[] text-center mb-[16px]">
              Log in to your account to read and listen to the book
            </div>
            <button
              className="btn text-[#032b41] bg-[#2bd97c] hover:bg-[#20ba68]"
              onClick={(e) => {
                e.preventDefault;
                dispatch(openModal());
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="audio__wrapper w-full h-[80px] mt-auto flex items-center justify-between bg-[#042330] py-0 px-[40px] fixed bottom-0 left-0"></div>
    </div>
  );
}
