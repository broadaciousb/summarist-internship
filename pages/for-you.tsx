// NEXT
import Link from "next/link";
import Image from "next/image";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
// REACT
import { useState, useEffect } from "react";
// REDUX
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { startLoading, stopLoading } from "@/redux/LoadingSlice";
// COMPONENTS
import SideBarNav from "@/components/SideBarNav";
import SearchBar from "@/components/SearchBar";
import BookTemplate from "@/components/BookTemplate";
import MobileSideBarNav from "@/components/MobileSideBar";
import LoadScreen from "@/components/LoadScreen";
// ASSETS
import LeanStartup from "../assets/the-lean-startup.png";

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

type Data = BookProps[];

export const getServerSideProps = (async () => {
  const res1 = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
  );
  const data1: Data = await res1.json();

  const res2 = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
  );
  const data2: Data = await res2.json();

  return {
    props: {
      recBooks: data1,
      sugBooks: data2,
    },
  };
}) satisfies GetServerSideProps<{
  recBooks: BookProps[];
  sugBooks: BookProps[];
}>;

export default function forYou({
  recBooks,
  sugBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const isOnline: boolean = useAppSelector((state) => state.online.loggedIn);
  const isSideBarOpen: boolean = useAppSelector(
    (state) => state.toggleSideBar.isSideBarOpen
  );
  // const [loading, setLoading] = useState(false);
  const loading = useAppSelector((state) => state.loading.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(stopLoading());
  }, [dispatch]);

  console.log(recBooks);
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
        <div className="container m-[0]">
          <div className="for-you__wrapper">
            <div className="for-you__title text-[22px] text-[#032b41] font-[700] mb-[16px]">
              Selected just for you
            </div>
            <Link
              href=""
              className="selected__book flex flex-col md:flex-row md:justify-between bg-[#fbefd6] p-[24px] rounded-sm mb-[24px] gap-[24px] w-full xl:w-[67%]"
            >
              <div className="selected__book--sub-title text-[#032b41] sm:w-full md:w-[40%]">
                How Constant Innovation Creates Radically Successful Business
              </div>
              <div className="selected__book--line w-[1px] bg-[#bac8ce]"></div>
              <div className="selected__book--content flex gap-[16px] sm:w-full md:w-[60%]">
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
                        strokeWidth="0"
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
              <div className="for-you__title text-[22px] text-[#032b41] font-[700] mb-[16px]">
                Recommended For You
              </div>
              <div className="for-you__sub--title text-[#394547] mb-[16px] font-[300]">
                We think you’ll like these
              </div>
              <div className="for-you__recommended--books flex overflow-x-auto gap-[16px] mb-[32px] snap-x">
                {recBooks?.map((book: BookProps) => (
                  <BookTemplate
                    id={book.id}
                    author={book.author}
                    title={book.title}
                    subTitle={book.subTitle}
                    imageLink={book.imageLink}
                    audioLink={book.audioLink}
                    totalRating={book.totalRating}
                    averageRating={book.averageRating}
                    keyIdeas={book.keyIdeas}
                    type={book.type}
                    status={book.status}
                    subscriptionRequired={book.subscriptionRequired}
                    summary={book.summary}
                    tags={book.tags}
                    bookDescription={book.bookDescription}
                    authorDescription={book.authorDescription}
                    key={book.title}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="for-you__title text-[22px] text-[#032b41] font-[700] mb-[16px]">
                Suggested Books
              </div>
              <div className="for-you__sub--title text-[#394547] mb-[16px] font-[300]">
                Browse those books
              </div>
              <div className="for-you__recommended--books flex overflow-x-auto gap-[16px] mb-[32px] snap-x">
                {sugBooks?.map((book: BookProps) => (
                  <BookTemplate
                    id={book.id}
                    author={book.author}
                    title={book.title}
                    subTitle={book.subTitle}
                    imageLink={book.imageLink}
                    audioLink={book.audioLink}
                    totalRating={book.totalRating}
                    averageRating={book.averageRating}
                    keyIdeas={book.keyIdeas}
                    type={book.type}
                    status={book.status}
                    subscriptionRequired={book.subscriptionRequired}
                    summary={book.summary}
                    tags={book.tags}
                    bookDescription={book.bookDescription}
                    authorDescription={book.authorDescription}
                    key={book.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
