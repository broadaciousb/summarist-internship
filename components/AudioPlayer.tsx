import { useState, useRef, useEffect, useCallback } from "react";
import { useAppSelector } from "@/redux/hooks";
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

export default function AudioPlayer() {
  const currentBook = useAppSelector((state) => state.myBook.currentBook);

  // AUDIO PLAY/PAUSE
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

  const startAnimation = useCallback(() => {
    if (audioRef.current && progressBarRef.current && duration) {
      const animate = () => {
        updateProgress();
        playAnimationRef.current = requestAnimationFrame(animate);
      };
      playAnimationRef.current = requestAnimationFrame(animate);
    }
  });

  const updateProgress = useCallback(() => {
    if (audioRef.current && progressBarRef.current && duration) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime.toString();
      setAudioProgress(currentTime);
    }
  });

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
  const [audioProgress, setAudioProgress] = useState(0);
  const progressBarRef = useRef<HTMLInputElement>(null);

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
                <BsFillRewindFill size={30} color="white" />
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
                <BsFillFastForwardFill size={30} color="white" />
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
