import ActiveHeading from "./ActiveHeading";
import { useEffect } from "react";

export default function Statistics() {
  return (
    <div className="w-full">
      <div className="row">
        <div className="statistics__wrapper flex gap-[80px] mb-[96px]">
          <div className="statistics__content--header w-full flex justify-center flex-col">
            <div className="statistics__heading text-[32px] text-[#6b757b] font-[500] mb-[16px]">
               <div id="1">Enhance your knowledge</div>
            </div>
            <div id="2" className="statistics__heading text-[32px] text-[#6b757b] font-[500] mb-[16px]">
              Achieve greater success
            </div>
            <div id="3" className="statistics__heading text-[32px] text-[#6b757b] font-[500] mb-[16px]">
              Improve your health
            </div>
            <div id="4" className="statistics__heading text-[32px] text-[#6b757b] font-[500] mb-[16px]">
              Develop better parenting skills
            </div>
            <div id="5" className="statistics__heading text-[32px] text-[#6b757b] font-[500] mb-[16px]">
              Increase happiness
            </div>
            <div id="6" className="statistics__heading text-[32px] text-[#6b757b] font-[500] mb-[16px]">
              Be the best version of yourself!
            </div>
          </div>
          <div className="statistics__content--details w-full flex flex-col justify-center gap-[24px] bg-[#f1f6f4] py-[40px] px-[24px]">
            <div className="statistics__data flex gap-[16px]">
              <div className="statistics__data--number text-[#0365f2] text-xl font-[600] mt-[4px]">
                93%
              </div>
              <div className="statistics__data--title text-xl font-[300] text-[#394547]">
                of Summarist members <b>significantly increase</b> reading
                frequency.
              </div>
            </div>
            <div className="statistics__data flex gap-[16px]">
              <div className="statistics__data--number text-[#0365f2] text-xl font-[600] mt-[4px]">
                96%
              </div>
              <div className="statistics__data--title text-xl font-[300] text-[#394547]">
                of Summarist members <b>establish better</b> habits.
              </div>
            </div>
            <div className="statistics__data flex gap-[16px]">
              <div className="statistics__data--number text-[#0365f2] text-xl font-[600] mt-[4px]">
                90%
              </div>
              <div className="statistics__data--title text-xl font-[300] text-[#394547]">
                have made <b>significant positive</b> change to their lives.
              </div>
            </div>
          </div>
        </div>
        <div className="statistics__wrapper flex gap-[80px] mb-[96px]">
          <div className="statistics__content--details statistics__content--details-second w-full flex flex-col justify-center gap-[24px] bg-[#f1f6f4] py-[40px] px-[24px]">
            <div className="statistics__data flex gap-[16px]">
              <div className="statistics__data--number text-[#0365f2] text-xl font-[600] mt-[4px]">
                91%
              </div>
              <div className="statistics__data--title text-xl font-[300] text-[#394547]">
                of Summarist members <b>report feeling more productive</b>
                after incorporating the service into their daily routine.
              </div>
            </div>
            <div className="statistics__data flex gap-[16px]">
              <div className="statistics__data--number text-[#0365f2] text-xl font-[600] mt-[4px]">
                94%
              </div>
              <div className="statistics__data--title text-xl font-[300] text-[#394547]">
                of Summarist members have <b>noticed an improvement</b> in their
                overall comprehension and retention of information.
              </div>
            </div>
            <div className="statistics__data flex gap-[16px]">
              <div className="statistics__data--number text-[#0365f2] text-xl font-[600] mt-[4px]">
                88%
              </div>
              <div className="statistics__data--title text-xl font-[300] text-[#394547]">
                of Summarist members <b>feel more informed</b> about current
                events and industry trends since using the platform.
              </div>
            </div>
          </div>
          <div className="statistics__content--header statistics__content--header-second  w-full flex justify-center flex-col items-end">
            <div id="1" className="statistics__heading text-[32px] text-[#6b757b] font-[500] mb-[16px]">
              Expand your learning
            </div>
            <div id="2" className="statistics__heading text-[32px] text-[#6b757b] font-[500] mb-[16px]">
              Accomplish your goals
            </div>
            <div id="3" className="statistics__heading text-[32px] text-[#6b757b] font-[500] mb-[16px]">
              Strengthen your vitality
            </div>
            <div id="4" className="statistics__heading text-[32px] text-[#6b757b] font-[500] mb-[16px]">
              Become a better caregiver
            </div>
            <div id="5" className="statistics__heading text-[32px] text-[#6b757b] font-[500] mb-[16px]">
              Improve your mood
            </div>
            <div id="6" className="statistics__heading text-[32px] text-[#6b757b] font-[500] mb-[16px]">
              Maximize your abilities
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
