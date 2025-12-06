// REACT
import { useState, useRef, useEffect, useCallback } from "react";
import {
  BsFillFastForwardFill,
  BsFillPauseFill,
  BsFillPlayFill,
  BsFillRewindFill,
  BsSkipEndFill,
  BsSkipStartFill,
  BsShuffle,
  BsRepeat,
} from "react-icons/bs";
// REDUX
import { useAppSelector } from "@/redux/hooks";
// FIREBASE
import { db, auth } from "@/Firebase/firebase.config";
import {
  getFirestore,
  setDoc,
  addDoc,
  collection,
  doc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";

export default function AudioPlayer() {
  const user = auth.currentUser;
  const currentBook = useAppSelector((state) => state.myBook.currentBook);

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

  async function addToFinishedCollection(book: Data | null, user: any) {
      if (!user || !book || !currentBook) return;
  
      try {
        await setDoc(
          doc(collection(db, "users", user.uid, "finished"), currentBook.id),
          book
        );
        console.log("Book added to finished collection successfully.");
      } catch (error) {
        console.error("Error adding book to finished collection:", error);
      }
    }


  // AUDIO REFERENCE AND ANIMATION
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAnimationRef = useRef<number | null>(null);

  function togglePlay() {
    if (!audioRef.current) return;

    if (!isPlaying) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }

  function startAnimation() {
    if (audioRef.current && progressBarRef.current && duration) {
      const animate = () => {
        updateProgress();
        playAnimationRef.current = requestAnimationFrame(animate);
      };
      playAnimationRef.current = requestAnimationFrame(animate);
    }
  };

  function updateProgress() {
    if (audioRef.current && progressBarRef.current && duration) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime.toString();
      setAudioProgress(currentTime);
    }
  };

  function skipForward() {
    if (audioRef.current && progressBarRef.current && duration) {
      const newTime = audioRef.current.currentTime + 15;
      audioRef.current.currentTime = newTime;
      setTimeProgress(newTime);
      setAudioProgress(newTime);
    }
  };

  function skipBackward() {
    if (audioRef.current && progressBarRef.current && duration) {
      const newTime = audioRef.current.currentTime - 15;
      audioRef.current.currentTime = newTime;
      setTimeProgress(newTime);
      setAudioProgress(newTime);
    }
  };

  // This useEffect controls the start/stop of the audio with the play button
  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      startAnimation();
    } else {
      audioRef.current?.pause();
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
        playAnimationRef.current = null;
      }
      updateProgress();
    }
    return () => {
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
      }
    };
  }, [isPlaying, audioRef]);

  // AUDIO PROGRESS BAR
  // This controls the audio bar UI, making it change as it plays
  const progressBarRef = useRef<HTMLInputElement>(null);
  const [audioProgress, setAudioProgress] = useState(0);
  const [duration, setDuration] = useState<number>(0);
  const [timeProgress, setTimeProgress] = useState<number>(0);

  const onLoadedMetaData = () => {
    const newDuration: number | undefined = audioRef.current?.duration;
    if (newDuration !== undefined) {
      setDuration(newDuration);
    }

    if (progressBarRef.current && newDuration) {
      progressBarRef.current.max = newDuration?.toString();
    }
  };

  const formatTime = (time: number | undefined): string => {
    if (typeof time === "number" && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);

      const formatMinutes = minutes.toString().padStart(2, "0");
      const formatSeconds = seconds.toString().padStart(2, "0");
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  function handleProgressChange() {
    if (audioRef.current && progressBarRef.current) {
      const newTime = Number(progressBarRef.current.value);
      audioRef.current.currentTime = newTime;
      setTimeProgress(newTime);
      setAudioProgress(newTime);
    }
    console.log("handlProgress called");
  }

  const progressPercent = (audioProgress / duration) * 100;

  useEffect(() => {
    if (progressPercent == 100) {
      console.log("finished book");
      addToFinishedCollection(currentBook, user);
    }
  }, [progressPercent]);

  return (
    <div className="audio__wrapper w-full z-1500 h-[180px] md:h-[80px] mt-auto flex flex-col md:flex-row items-center justify-between bg-[#042330] py-[16px] md:py-0 px-[24px] md:px-[40px] fixed bottom-0 right-0">
      {!currentBook?.subscriptionRequired && (
        <>
          <audio
            ref={audioRef}
            src={currentBook?.audioLink}
            onLoadedMetadata={onLoadedMetaData}
          />
          <div className="audio__track--wrapper w-full md:w-[calc(100%/3)] flex justify-center items-center gap-[12px]">
            <figure className="audio__track--image-mask flex max-w[48px]">
              <figure className="book__img--wrapper w-[48px] h-[48px] min-w-[48px]">
                <img
                  src={currentBook?.imageLink}
                  alt=""
                  className="book__image w-full h-full"
                />
              </figure>
            </figure>
            <div className="audio__track--details-wrapper text-white text-sm flex flex-col gap-[4px] justify-center">
              <div className="audio__track--title">{currentBook?.title}</div>
              <div className="audio__track--author text-[#bac8ce]">
                {currentBook?.author}
              </div>
            </div>
          </div>
          <div className="audio__controls--wrapper w-full md:w-[calc(100%/3)]">
            <div className="audio__controls flex justify-center items-center gap-[24px]">
              <div className="rewind__btn rounded-[50%] cursor-pointer flex justify-center items-center">
                <button onClick={skipBackward}>
                  <BsFillRewindFill size={30} color="white" />
                </button>
              </div>
              <div className="play__btn rounded-[50%] cursor-pointer flex justify-center items-center h-[40px] w-[40px] bg-white">
                <button onClick={togglePlay}>
                  {!isPlaying ? (
                    <BsFillPlayFill size={30} />
                  ) : (
                    <BsFillPauseFill size={30} />
                  )}
                </button>
              </div>
              <div className="fast-forward__btn rounded-[50%] cursor-pointer flex justify-center items-center">
                <button onClick={skipForward}>
                  <BsFillFastForwardFill size={30} color="white" />
                </button>
              </div>
            </div>
          </div>
          <div className="audio__progress--wrapper w-full md:w-[calc(100%/3)] flex justify-center items-center gap-[16px]">
            <div className="audio__time text-[#fff] text-sm">
              {formatTime(timeProgress)}
            </div>
            <input
              type="range"
              className="audio__progress--bar"
              ref={progressBarRef}
              defaultValue={0}
              value={timeProgress}
              onChange={handleProgressChange}
              style={{
                background: `linear-gradient(to right, rgb(43, 217, 124) ${progressPercent}%, rgb(109, 120, 125) ${progressPercent}%)`,
              }}
            ></input>
            <div className="audio__time text-[#fff] text-sm">
              {formatTime(duration)}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
