import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import HowToWinFriends from "../assets/how-to-win-friends.png";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setBook } from "@/redux/bookSlice";

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

export default function BookTemplate({
  id,
  author,
  title,
  subTitle,
  imageLink,
  audioLink,
  totalRating,
  averageRating,
  keyIdeas,
  type,
  status,
  subscriptionRequired,
  summary,
  tags,
  bookDescription,
  authorDescription,
}: Book) {

  const dispatch = useAppDispatch();
  const [duration, setDuration] = useState<number | null>(null);
  
  
  useEffect(() => {
    if (!audioLink) return;

    const audio = new Audio(audioLink);

    const handleLoadedMetaData = () => {
      setDuration(audio.duration);
    }

    audio.addEventListener("loadedmetadata", handleLoadedMetaData);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetaData);
    }
  }, [audioLink]);
  
  const formatTime = (time: number | undefined): string => {
    if (typeof time === 'number' && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);

      const formatMinutes = minutes.toString().padStart(2, '0');
      const formatSeconds = seconds.toString().padStart(2, '0');
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  }

  return (
    <Link
      href={"/book/" + id}
      className="for-you__recommended--books-link relative pt-[32px] pb-[12px] px-[12px] rounded-sm max-w-[200px] w-full snap-start"
      onClick={(e) => {
        e.preventDefault;
        dispatch(
          setBook({
            id: id,
            author: author,
            title: title,
            subTitle: subTitle,
            imageLink: imageLink,
            audioLink: audioLink,
            totalRating: totalRating,
            averageRating: averageRating,
            keyIdeas: keyIdeas,
            type: type,
            status: status,
            subscriptionRequired: subscriptionRequired,
            summary: summary,
            tags: tags,
            bookDescription: bookDescription,
            authorDescription: authorDescription,
          })
        );
      }}
    >
      {subscriptionRequired && (
        <div className="premium__pill bg-[#032b41] size-fit h-[18px] p-[8px] absolute top-[0] right-[0] text-[#fff] text-[10px] flex items-center rounded-[20px]">
          Premium
        </div>
      )}
      <figure className="book__image--wrapper relative mb-[8px] w-[172px] h-[172px]">
        <img
          className="book__image w-full h-full absolute"
          src={imageLink}
          alt="book"
        />
      </figure>
      <div className="recommended__book--title text-base text-[#032b41] font-[700] mb-[8px]">
        {title}
      </div>
      <div className="recommended__book--author text-sm text-[#6b757b] font-[300] mb-[8px]">
        {author}
      </div>
      <div className="recommended__book--sub-title text-sm text-[#394547] mb-[8px]">
        {subTitle}
      </div>
      <div className="recommended__book--details-wrapper flex gap-[8px]">
        <div className="recommended__book--details flex items-center gap-[4px] text-sm font-[300] text-[#6b757b]">
          <div className="recommended__book--details-icon flex w-[16px] h-[16px]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
              <path d="M13 7h-2v6h6v-2h-4z"></path>
            </svg>
          </div>
          <div className="recommended__book--details-text">{formatTime(duration)}</div>
        </div>
        <div className="recommended__book--details flex items-center gap-[4px] text-sm font-[300] text-[#6b757b]">
          <div className="recommended__book--details-icon flex w-[16px] h-[16px]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
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
  );
}
