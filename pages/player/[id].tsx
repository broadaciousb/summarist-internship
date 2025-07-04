import SideBarNav from "@/components/SideBarNav";
import SearchBar from "@/components/SearchBar";
import SideBarLogo from "@/components/SideBarLogo"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increment as openModal } from "@/redux/ToggleModalSlice";
import { useState } from "react";



export default function Player() {
  const dispatch = useAppDispatch();
  const currentBook = useAppSelector((state) => state.myBook.currentBook);
  const [audioProgress, setAudioProgress] = useState(0);
  const max = 204.048;
  const progressPercent = (audioProgress/max) * 100;

  function AudioProgressBar(prog: number) {
    setAudioProgress(prog);
  }


  return (
    <div className="relative flex flex-col ml-[200px] w-[calc(100% - 200px)]">
      <div className="sidebar bg-[#f7faf9] w-[200px] fixed top-[0] h-[calc(100vh-60px)] left-[0] pb-[70px] z-[1000]">
        <SideBarLogo />
        <SideBarNav />
      </div>

      <SearchBar />

      <div className="summary relative w-full overflow-y-auto h-[calc(100% - 160px)]">
        <div className="audio__book--summary p-[24px] max-w-[800px] my-0 mx-auto whitespace-pre-line">
          <div className="audio__book--summary-title text-[#032b41] text-2xl border-b border-b-[#e1e7ea] mb-[32px] pb-[16px] leading-[1.5]">
            {currentBook?.title}
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
              className="btn max-w-[180px] text-[#032b41] bg-[#2bd97c] hover:bg-[#20ba68]"
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

      <div className="audio__wrapper w-full z-1500 h-[80px] mt-auto flex items-center justify-between bg-[#042330] py-0 px-[40px] fixed bottom-0 right-0">
        <div className="audio__track--wrapper w-[calc(100%/3)] flex gap-[12px]">
          <figure className="audio__track--image-mask flex max-w[48px]">
            <figure className="book__img--wrapper w-[48px] h-[48px] min-w-[48px]">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fcant-hurt-me.png?alt=media&token=026646b0-40f8-48c4-8d32-b69bd5b8f700"
                alt=""
                className="book__image w-full h-full"
              />
            </figure>
          </figure>
          <div className="audio__track--details-wrapper text-white text-sm flex flex-col gap-[4px] justify-center">
            <div className="audio__track--title">Can't Hurt Me</div>
            <div className="audio__track--author text-[#bac8ce]">
              David Goggins
            </div>
          </div>
        </div>
        <div className="audio__controls--wrapper w-[calc(100%/3)]">
          <div className="audio__controls flex justify-center items-center gap-[24px]">
            <div className="rewind__btn rounded-[50%] cursor-pointer flex justify-center items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="28px"
                width="28px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  d="M3.11111111,7.55555556 C4.66955145,4.26701301 8.0700311,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 L12,22 C6.4771525,22 2,17.5228475 2,12 M2,4 L2,8 L6,8 M9,16 L9,9 L7,9.53333333 M17,12 C17,10 15.9999999,8.5 14.5,8.5 C13.0000001,8.5 12,10 12,12 C12,14 13,15.5000001 14.5,15.5 C16,15.4999999 17,14 17,12 Z M14.5,8.5 C16.9253741,8.5 17,11 17,12 C17,13 17,15.5 14.5,15.5 C12,15.5 12,13 12,12 C12,11 12.059,8.5 14.5,8.5 Z"
                ></path>
              </svg>
            </div>
            <div className="play__btn rounded-[50%] cursor-pointer flex justify-center items-center h-[40px] w-[40px] bg-white">
              <svg
                stroke="#042330"
                fill="#042330"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="audio__controls--play-icon ml-[4px]"
                height="28px"
                width="28px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="#fff" d="M96 448l320-192L96 64v384z"></path>
              </svg>
            </div>
            <div className="fast-forward__btn rounded-[50%] cursor-pointer flex justify-center items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="28px"
                width="28px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  d="M20.8888889,7.55555556 C19.3304485,4.26701301 15.9299689,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 L12,22 C17.5228475,22 22,17.5228475 22,12 M22,4 L22,8 L18,8 M9,16 L9,9 L7,9.53333333 M17,12 C17,10 15.9999999,8.5 14.5,8.5 C13.0000001,8.5 12,10 12,12 C12,14 13,15.5000001 14.5,15.5 C16,15.4999999 17,14 17,12 Z M14.5,8.5 C16.9253741,8.5 17,11 17,12 C17,13 17,15.5 14.5,15.5 C12,15.5 12,13 12,12 C12,11 12.059,8.5 14.5,8.5 Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="audio__progress--wrapper w-[calc(100%/3)] flex items-center gap-[16px]">
          <div className="audio__time text-[#fff] text-sm">00:00</div>
          <input
            type="range"
            className="audio__progress--bar"
            value={audioProgress}
            max={max}
            onChange={(e) => setAudioProgress(Number(e.target.value))}
            style={{background: `linear-gradient(to right, rgb(43, 217, 124) ${progressPercent}%, rgb(109, 120, 125) ${progressPercent}%)`}}
          ></input>
          <div className="audio__time text-[#fff] text-sm">03:24</div>
        </div> 
      </div>
    </div>
  );
}
