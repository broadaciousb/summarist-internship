"use client";

import { usePathname } from "next/navigation";
import { RiFontSize } from "react-icons/ri";
import { setFontSize } from "@/redux/FontSizeSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

export default function FontSizeControl() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const textSize = useAppSelector((state) => state.toggleFontSize.fontSize);

  if (!pathname) return null;

  if (!pathname.startsWith("/player")) return null;

  return (
    <div className="sidebar_link--wrapper flex items-center gap-[8px] ml-[24px]">
            <button
              className={`size__option--button flex items-center justify-center w-[32px] border-b-3 ${
                textSize === "lg" ? "border-[#2bd97c]" : "border-transparent"
              }`}
              onClick={(e) => {
                e.preventDefault;
                dispatch(setFontSize("lg"));
              }}
            >
              <RiFontSize className="w-[18px] h-[18px]" />
            </button>
            <button
              className={`size__option--button flex items-center justify-center w-[32px] border-b-3 ${
                textSize === "xl" ? "border-[#2bd97c]" : "border-transparent"
              }`}
              onClick={(e) => {
                e.preventDefault;
                dispatch(setFontSize("xl"));
              }}
            >
              <RiFontSize className="w-[20px] h-[20px]" />
            </button>
            <button
              className={`size__option--button flex items-center justify-center w-[32px] border-b-3 ${
                textSize === "2xl" ? "border-[#2bd97c]" : "border-transparent"
              }`}
              onClick={(e) => {
                e.preventDefault;
                dispatch(setFontSize("2xl"));
              }}
            >
              <RiFontSize className="w-[24px] h-[24px]" />
            </button>
            <button
              className={`size__option--button flex items-center justify-center w-[32px] border-b-3 ${
                textSize === "3xl" ? "border-[#2bd97c]" : "border-transparent"
              }`}
              onClick={(e) => {
                e.preventDefault;
                dispatch(setFontSize("3xl"));
              }}
            >
              <RiFontSize className="w-[30px] h-[30px]" />
            </button>
          </div>
  );
}