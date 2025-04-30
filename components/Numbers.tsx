import { BiCrown } from "react-icons/bi";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiLeafLine } from "react-icons/ri";

export default function Numbers() {
  return (
    <section id="numbers">
      <div className="w-full py-[40px]">
        <div className="row">
          <div className="section__title text-[32px] text-[#032b41] text-center mb-[32px] font-bold">Start growing with Summarist now</div>
          <div className="numbers__wrapper grid grid-cols-3 gap-[40px]">
            <div className="numbers bg-[#d7e9ff] flex flex-col items-center text-center p-[24px] pb-[40px] rounded-xl">
              <div className="numbers__icon flex items-center h-[60px] gap-[4px]">
                <BiCrown className="w-[48px] h-[48px] text-[#0365f2]"/>
              </div>
              <div className="numbers__title text-[40px] text-[#032b41] font-[600] mb-[16px]">3 Million</div>
              <div className="numbers__sub--title text-[#394547] font-[300]">Downloads on all platforms</div>
            </div>
            <div className="numbers bg-[#d7e9ff] flex flex-col items-center text-center p-[24px] pb-[40px] rounded-xl">
              <div className="numbers__icon numbers__star--icon flex items-center h-[60px] gap-[4px]">
                <BsStarFill className="w-[20px] h-[20px] text-[#0365f2]"/>
                <BsStarFill className="w-[20px] h-[20px] text-[#0365f2]"/>
                <BsStarFill className="w-[20px] h-[20px] text-[#0365f2]"/>
                <BsStarFill className="w-[20px] h-[20px] text-[#0365f2]"/>
                <BsStarHalf className="w-[20px] h-[20px] text-[#0365f2]"/>
              </div>
              <div className="numbers__title text-[40px] text-[#032b41] font-[600] mb-[16px]">4.5 Stars</div>
              <div className="numbers__sub--title text-[#394547] font-[300]">
                Average ratings on iOS and Google Play
              </div>
            </div>
            <div className="numbers bg-[#d7e9ff] flex flex-col items-center text-center p-[24px] pb-[40px] rounded-xl">
              <div className="numbers__icon flex items-center h-[60px] gap-[4px]">
                <RiLeafLine className="w-[48px] h-[48px] text-[#0365f2]"/>
              </div>
              <div className="numbers__title text-[40px] text-[#032b41] font-[600] mb-[16px]">97%</div>
              <div className="numbers__sub--title text-[#394547] font-[300]">
                Of Summarist members create a better reading habit
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
