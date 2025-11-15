import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function LoadScreen() {
  return (
    <div className="fixed w-full h-full z-100000 bg-white">
      <div className="wrapper w-full h-full flex items-center justify-center">
        <AiOutlineLoading3Quarters className="loader w-[200px] h-[200px] text-[#032b41]" />
      </div>
    </div>
  );
}
