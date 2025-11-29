// NEXT
import Link from "next/link";
// REACT
import { useEffect, useState } from "react";
// REDUX
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { startLoading, stopLoading } from "@/redux/LoadingSlice";
import { increment as openModal } from "@/redux/ToggleModalSlice";
// FIREBASE
import {
  getFirestore,
  setDoc,
  addDoc,
  collection,
  doc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
// COMPONENTS
import SideBarNav from "@/components/SideBarNav";
import SearchBar from "@/components/SearchBar";
import { db, auth } from "@/Firebase/firebase.config";
import MobileSideBarNav from "@/components/MobileSideBar";
import LoadScreen from "@/components/LoadScreen";

interface BookProps {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRating: number;
  averageRating: number;
  keyIdeas: number;
  type: string;
  status: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
}

type Data = BookProps;

export default function Book() {
  const user = auth.currentUser;
  const dispatch = useAppDispatch();
  const currentBook = useAppSelector((state) => state.myBook.currentBook);
  const isSideBarOpen: boolean = useAppSelector(
    (state) => state.toggleSideBar.isSideBarOpen
  );
  const [myBooks, setMybooks] = useState<string[]>([]);
  const [bookInLibrary, setBookInLibrary] = useState(false);
  const loading = useAppSelector((state) => state.loading.loading);

  async function addToLibrary(book: Data | null, user: any) {
    if (!user || !book || !currentBook) return;

    try {
      await setDoc(
        doc(collection(db, "users", user.uid, "library"), currentBook.id),
        book
      );
      console.log("Book added to library successfully.");
    } catch (error) {
      console.error("Error adding book to library:", error);
    }
  }

  async function removeFromLibrary() {
    if (!user || !currentBook) return;

    try {
      await deleteDoc(
        doc(collection(db, "users", user.uid, "library"), currentBook?.id)
      );
      console.log("Book removed from library successfully.");
    } catch (error) {
      console.error("Error removing book from library:", error);
    }
  }

  useEffect(() => {
    if (!user) return;
    const unsubscribe = onSnapshot(
      collection(db, "users", user?.uid, "library"),
      (snapshot) => {
        const books = snapshot.docs.map((doc) => doc.data().id);

        if (books.includes(currentBook?.id)) {
          setBookInLibrary(true);
        } else {
          setBookInLibrary(false);
        }
      }
    );
  }, []);

  useEffect(() => {}, [currentBook]);
  useEffect(() => {
    dispatch(stopLoading());
  }, [dispatch]);
  return (
    <div className="flex flex-col m-[0] md:ml-[200px] w-[calc(100% - 200px)]">
      {loading && <LoadScreen />}
      <div className="sidebar bg-[#f7faf9] w-[200px] invisible md:visible fixed top-[0] bottom-[60px] left-[0] z-[1000]">
        <SideBarNav />
      </div>
      {/* SMALL SCREEN SIDEBAR */}
      {isSideBarOpen && <MobileSideBarNav />}
      {/* SEARCH BAR */}
      <SearchBar />
      <div className="row">
        {!user ? (
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
              onClick={() => {
                dispatch(openModal());
              }}
              className="btn max-w-[180px] text-[#032b41] bg-[#2bd97c] hover:bg-[#20ba68]"
            >
              Login
            </button>
          </div>
        ) : (
          <div className="w-full py-[40px]">
            <div className="inner_wrapper flex flex-col-reverse lg:flex-row gap-[16px] lg:gap-[32px]">
              <div className="inner__book w-full">
                <div className="inner_book--title text-[#032b41] text-[24px] md:text-[32px] mb-[16px] font-[600]">
                  {currentBook?.title}
                </div>
                <div className="inner__book--author text-[#032b41] mb-[16px] font-[600]">
                  {currentBook?.author}
                </div>
                <div className="inner__book--sub-title text-[#032b41] text-xl mb-[16px] font-[300]">
                  {currentBook?.subTitle}
                </div>
                <div className="inner__book--wrapper mb-[24px] border-[#e1e7ea] border-y py-[16px]">
                  <div className="inner__book-description--wrapper flex flex-wrap max-w-[400px] gap-y-[12px]">
                    <div className="inner__book--description flex items-center w-[50%] text-sm text-[#032b41] font-[500]">
                      <div className="inner__book--icon flex h-[24px] w-[24px] mr-[4px]">
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
                      <div className="inner__book--overall-rating">
                        {currentBook?.averageRating}&nbsp;
                      </div>
                      <div className="inner__book--total-rating">
                        &#40;{currentBook?.totalRating}&#41;
                      </div>
                    </div>
                    <div className="inner__book--description flex items-center w-[50%] text-sm text-[#032b41] font-[500]">
                      <div className="inner__book--icon flex h-[24px] w-[24px] mr-[4px]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 1024 1024"
                          height="100%"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                          <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                        </svg>
                      </div>
                      <div className="inner__book--duration">04:52</div>
                    </div>
                    <div className="inner__book--description flex items-center w-[50%] text-sm text-[#032b41] font-[500]">
                      <div className="inner__book--icon flex h-[24px] w-[24px] mr-[4px]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 1024 1024"
                          height="100%"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"></path>
                        </svg>
                      </div>
                      <div className="inner__book--type">
                        {currentBook?.type}
                      </div>
                    </div>
                    <div className="inner__book--description flex items-center w-[50%] text-sm text-[#032b41] font-[500]">
                      <div className="inner__book--icon flex h-[24px] w-[24px] mr-[4px]">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="100%"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          ></path>
                        </svg>
                      </div>
                      <div className="inner__book--ideas">
                        {currentBook?.keyIdeas}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inner__book--read-btn-wrapper flex gap-[16px] mb-[24px]">
                  <button className="inner__book--read--btn flex items-center justify-center w-[144px] h-[48px] bg-[#032b41] text-white text-base cursor-pointer gap-[8px] rounded-sm">
                    <div className="inner__book--read-icon flex">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="24px"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3 6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5 48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z"></path>
                      </svg>
                    </div>
                    <div className="inner__book--read-text">Read</div>
                  </button>
                  <Link
                    href={"/player/" + currentBook?.id}
                    onClick={() => {
                      dispatch(startLoading());
                    }}
                  >
                    <button className="inner__book--read--btn flex items-center justify-center w-[144px] h-[48px] bg-[#032b41] text-white text-base cursor-pointer gap-[8px] rounded-sm">
                      <div className="inner__book--read-icon flex">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 1024 1024"
                          height="24px"
                          width="24px"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"></path>
                        </svg>
                      </div>

                      <div className="inner__book--read-text">Listen</div>
                    </button>
                  </Link>
                </div>
                {!bookInLibrary ? (
                  <div className="inner__book--bookmark flex items-center gap-[8px] text-[#0365f2] font-[500] cursor-pointer mb-[40px] text-lg">
                    <div className="inner__book--bookmark-icon flex w-[20px] h-[20px]">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="100%"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
                      </svg>
                    </div>
                    <div className="inner__book--bookmark-text">
                      <Link
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          addToLibrary(currentBook, user);
                        }}
                      >
                        Add title to My Library
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="inner__book--bookmark flex items-center gap-[8px] text-[#0365f2] font-[500] cursor-pointer mb-[40px] text-lg">
                    <div className="inner__book--bookmark-icon flex w-[20px] h-[20px]">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="100%"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
                      </svg>
                    </div>
                    <div className="inner__book--bookmark-text">
                      <Link
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          removeFromLibrary();
                        }}
                      >
                        Remove From My Library
                      </Link>
                    </div>
                  </div>
                )}

                <div className="inner__book--secondary-title text-lg text-[#032b41] mb-[16px] font-[600]">
                  What's it about?
                </div>
                <div className="inner__book--tags-wrapper flex flex-wrap gap-[16px] mb-[16px]">
                  {currentBook?.tags.map((tag: string) => (
                    <div
                      key={tag}
                      className="inner__book--tag bg-[#f1f6f4] px-[16px] h-[48px] flex items-center cursor-not-allowed text-[#032b41] font-[500] rounded-sm"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="inner__book--about text-[#032b41] mb-[16px] leading-[1.5]">
                  {currentBook?.bookDescription}
                </div>
                <div className="inner__book--secondary-title text-lg text-[#032b41] mb-[16px] font-[600]">
                  About the author
                </div>
                <div className="inner__book--author text-[#032b41] leading-[1.5]">
                  {currentBook?.authorDescription}
                </div>
              </div>
              <div className="inner__book-img--wrapper flex justify-center">
                <figure className="book__image--wrapper h-[300px] w-[300px] min-w-[300px]">
                  <img
                    className="book__image w-full h-full"
                    src={currentBook?.imageLink}
                    alt="book image"
                  />
                </figure>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
