import Link from "next/link";
import { useEffect, useState } from "react";
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

export default function SearchBookLink({
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
  
  // USEEFFECT FOR DISPLAYING AUDIO DURATION
  const dispatch = useAppDispatch();
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    if (!audioLink) return;

    const audio = new Audio(audioLink);

    const handleLoadedMetaData = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetaData);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetaData);
    };
  }, [audioLink]);

  // FORMAT DURATION
  const formatTime = (time: number | null): string => {
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
      className="book__link w-full flex items-center p-[16px] gap-[24px] h-[120px] border-b border-[#e1e7ea] hover__effect"
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
      <figure className="book__img--wrapper h-[80px] w-[80px] min-w-[80px]">
        <img
          src={imageLink}
          alt=""
          height="100%"
          width="100%"
        />
      </figure>
      <div className="book__info">
        <div className="book__title font-base text-[#032b41] font-[500] mb-[8px]">
          {title}
        </div>
        <div className="book__author text-sm text-[#6b757b] font-[300] mb-[8px]">
          {author}
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
            <div className="recommended__book--details-text">
              {formatTime(duration)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
