import SideBarNav from "@/components/SideBarNav";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import Image from "next/image";
import LeanStartup from "../assets/the-lean-startup.png";
import HowToWinFriends from "../assets/how-to-win-friends.png";

export default function forYou() {
  return (
    <div className="flex flex-col ml-[200px] w-[calc(100% - 200px)]">
      <SideBarNav />
      <SearchBar />
      <div className="row">
        <div className="w-full px-[40px]">
          <div className="for-you__wrapper">
            <div className="for-you__title text-[22px] text-[#032b41] font-[700] mb-[16px]">
              Selected just for you
            </div>
            <Link
              href=""
              className="selected__book flex justify-between bg-[#fbefd6] p-[24px] rounded-sm mb-[24px] gap-[24px] w-[calc(100% / 3) * 2]"
            >
              <div className="selected__book--sub-title text-[#032b41] w-[40%]">
                How Constant Innovation Creates Radically Successful Business
              </div>
              <div className="sselected__book--line w-[1px] bg-[#bac8ce]"></div>
              <div className="selected__book--content flex gap-[16px] w-[60%]">
                <figure className="book__image--wrapper relative h-[140px] w-[140px] min-w-[140px]">
                  <Image
                    className="book__image w-full h-full absolute"
                    src={LeanStartup}
                    alt="book"
                    layout="fill"
                    objectFit="contain"
                    width={0}
                    height={0}
                  />
                </figure>
                <div className="selected__book--text w-full">
                  <div className="selected__book--title text-[#032b41] mb-[8px] font-[600]">
                    The Lean Startup
                  </div>
                  <div className="selected__book--author text-sm text-[#394547] mb-[16px]">
                    Eric Ries
                  </div>
                  <div className="selected__book--duration-wrapper flex items-center gap-[8px]">
                    <div className="selected__book--icon flex items-center justify-center w-[40px] min-w-[40px] h-[40px] bg-[#000] rounded-[50%]">
                      <svg
                        className="w-full h-full pr-[4px] pl-[6px] py-[4px]"
                        stroke="#fff"
                        fill="#fff"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                      </svg>
                    </div>
                    <div className="selected__book--duration text-sm font-[500] text-[#032b41]">
                      3 mins 23 secs
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div>
              <div className="for-you__title text-[22px] text-[#032b41] gont-[700] mb-[16px]">
                Recommended For You
              </div>
              <div className="for-you__sub--title text-[#394547] mb-[16px] font-[300]">
                We think you’ll like these
              </div>
              <div className="for-you__recommended--books flex overflow-x-auto gap-[16px] mb-[32px] snap-x">
                <Link
                  href=""
                  className="for-you__recommended--books-link relative pt-[32px] pb-[12px] px-[12px] rounded-sm max-w-[200px] w-full snap-start"
                >
                  <figure className="book__image--wrapper relative mb-[8px] w-[172px] h-[172px]">
                    <Image
                      className="book__image w-full h-full absolute"
                      src={HowToWinFriends}
                      alt="book"
                      layout="fill"
                      objectFit="contain"
                      width={0}
                      height={0}
                    />
                  </figure>
                  <div className="recommended__book--title text-base text-[#032b41] font-[700] mb-[8px]">
                    How to Win Friends and Influence People in the Digital Age
                  </div>
                  <div className="recommended__book--author text-sm text-[#6b757b] font-[300] mb-[8px]">
                    Dale Carnegie
                  </div>
                  <div className="recommended__book--sub-title text-sm text-[#394547] mb-[8px]">
                    Time-tested advice for the digital age
                  </div>
                  <div className="recommended__book--details-wrapper flex gap-[8px]">
                    <div className="recommended__book--details flex items-center gap-[4px] text-sm font-[300] text-[#6b757b]">
                      <div className="recommended__book--details-icon flex w-[16px] h-[16px]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                          <path d="M13 7h-2v6h6v-2h-4z"></path>
                        </svg>
                      </div>
                      <div className="recommended__book--details-text">03:24</div>
                    </div>
                    <div className="recommended__book--details flex items-center gap-[4px] text-sm font-[300] text-[#6b757b]">
                      <div className="recommended__book--details-icon flex w-[16px] h-[16px]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 1024 1024"
                          height="100%"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                        </svg>
                      </div>
                      <div className="recommended__book--details-text">4.4</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
