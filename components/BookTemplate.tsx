import Link from "next/link";
import { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setBook } from "@/redux/bookSlice";
import LoadingSkeleton from "./LoadingSkeleton";
import { startLoading } from "@/redux/LoadingSlice";

interface Book {
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

export default function BookTemplate(book: Book) {
  const dispatch = useAppDispatch();

  // Local image loading state
  const [imgLoaded, setImgLoaded] = useState(false);

  // AUDIO DURATION
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    if (!book.audioLink) return;

    const audio = new Audio(book.audioLink);
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });

    return () => audio.removeEventListener("loadedmetadata", () => {});
  }, [book.audioLink]);

  const formatTime = (time: number | null): string => {
    if (typeof time === "number" && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}`;
    }
    return "00:00";
  };

  return (
    <Link
      href={`/book/${book.id}`}
      className="for-you__recommended--books-link relative pt-[32px] pb-[12px] px-[12px] rounded-sm max-w-[200px] w-full snap-start hover__effect"
      onClick={() => {
        dispatch(
          setBook({
            ...book,
          })
        );
        dispatch(startLoading());
      }}
    >
      {book.subscriptionRequired && (
        <div className="premium__pill bg-[#032b41] size-fit h-[18px] p-[8px] absolute top-[0] right-[0] text-[#fff] text-[10px] flex items-center rounded-[20px]">
          Premium
        </div>
      )}

      <figure className="book__image--wrapper relative mb-[8px] w-[172px] h-[172px]">
        {!imgLoaded && <LoadingSkeleton />}
        <img
          className={`book__image w-full h-full absolute transition-opacity duration-300 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          src={book.imageLink}
          alt="book"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgLoaded(true)}
        />
      </figure>

      <div className="recommended__book--title text-base text-[#032b41] font-[700] mb-[8px]">
        {!imgLoaded ? <LoadingSkeleton /> : `${book.title}`}
      </div>

      <div className="recommended__book--author text-sm text-[#6b757b] font-[300] mb-[8px]">
        {!imgLoaded && <LoadingSkeleton />}
        {book.author}
      </div>

      <div className="recommended__book--sub-title text-sm text-[#394547] mb-[8px]">
        {!imgLoaded && <LoadingSkeleton />}
        {book.subTitle}
      </div>

      <div className="recommended__book--details-wrapper flex gap-[8px]">
        <div className="flex items-center gap-[4px] text-sm font-[300] text-[#6b757b]">
          <div className="flex w-[16px] h-[16px]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
              <path d="M13 7h-2v6h6v-2h-4z"></path>
            </svg>
          </div>
          <div>{formatTime(duration)}</div>
        </div>

        <div className="flex items-center gap-[4px] text-sm font-[300] text-[#6b757b]">
          <div className="flex w-[16px] h-[16px]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
            </svg>
          </div>
          <div>4.4</div>
        </div>
      </div>
    </Link>
  );
}
