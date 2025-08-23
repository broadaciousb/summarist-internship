import { useState, useRef, useEffect } from "react";
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
  function togglePlay() {
    if (!audioRef.current) return;

    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }

  // AUDIO PROGRESS BAR
  const max = Number(audioRef.current?.duration)
  const [audioProgress, setAudioProgress] = useState(0);
  const progressBarRef = useRef<HTMLAudioElement>(null);

  function handleProgressChange() {
    if (audioRef.current && progressBarRef) {
      const newTime = Number(progressBarRef.current.value);
      audioRef.current.currentTime = newTime;
      setAudioProgress(newTime);
      
    }
  }

  const progressPercent = (audioProgress / max) * 100;

  useEffect(() => {
    handleProgressChange();
  }, [audioRef.current?.currentTime])

  


  return (
    <div className="audio__wrapper w-full z-1500 h-[80px] mt-auto flex items-center justify-between bg-[#042330] py-0 px-[40px] fixed bottom-0 right-0">
      <audio ref={audioRef} src={currentBook?.audioLink} />
      <div className="audio__track--wrapper w-[calc(100%/3)] flex gap-[12px]">
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
      <div className="audio__controls--wrapper w-[calc(100%/3)]">
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
      <div className="audio__progress--wrapper w-[calc(100%/3)] flex items-center gap-[16px]">
        <div className="audio__time text-[#fff] text-sm">00:00</div>
        <input
          type="range"
          className="audio__progress--bar"
          ref={progressBarRef}
          value={audioRef?.current?.currentTime}
          max={max}
          onChange={handleProgressChange}
          style={{
            background: `linear-gradient(to right, rgb(43, 217, 124) ${progressPercent}%, rgb(109, 120, 125) ${progressPercent}%)`,
          }}
        ></input>
        <div className="audio__time text-[#fff] text-sm">03:24</div>
      </div>
    </div>
  );
}
