import { useEffect, useState } from "react";

export default function Statistics() {
  const [highlight, setHighlight] = useState(1);

  useEffect(() => {
  const interval = setInterval(() => {
    setHighlight(prev => (prev === 6 ? 1 : prev + 1));
  }, 3000);
 
  return () => clearInterval(interval);
}, []);

  return (
    <div className="w-full">
      <div className="row">
        <div className="statistics__wrapper flex flex-col md:flex-row gap-[80px] mb-[96px]">
          <div className="statistics__content--header w-full flex justify-center flex-col">
            <div className={`heading1 text-[32px] text-[#6b757b] font-[500] mb-[16px] ${highlight === 1 ? "active__heading" : ""}`}>
              <div id="1">Enhance your knowledge</div>
            </div>
            <div
              id="2"
              className={`heading2 text-[32px] text-[#6b757b] font-[500] mb-[16px] ${highlight === 2 ? "active__heading" : ""}`}
            >
              Achieve greater success
            </div>
            <div
              id="3"
              className={`heading3 text-[32px] text-[#6b757b] font-[500] mb-[16px] ${highlight === 3 ? "active__heading" : ""}`}
            >
              Improve your health
            </div>
            <div
              id="4"
              className={`heading4 text-[32px] text-[#6b757b] font-[500] mb-[16px] ${highlight === 4 ? "active__heading" : ""}`}
            >
              Develop better parenting skills
            </div>
            <div
              id="5"
              className={`heading5 text-[32px] text-[#6b757b] font-[500] mb-[16px] ${highlight === 5 ? "active__heading" : ""}`}
            >
              Increase happiness
            </div>
            <div
              id="6"
              className={`heading6 text-[32px] text-[#6b757b] font-[500] mb-[16px] ${highlight === 6 ? "active__heading" : ""}`}
            >
              Be the best version of yourself!
            </div>
          </div>
          <div className="statistics__content--details w-full flex flex-col justify-center gap-[24px] bg-[#f1f6f4] py-[40px] px-[24px]">
            <div className="statistics__data flex gap-[16px]">
              <div className="statistics__data--number text-[#0365f2] text-xl font-[600] mt-[4px]">
                93%
              </div>
              <div className="statistics__data--title text-base md:text-xl font-[300] text-[#394547]">
                of Summarist members <b>significantly increase</b> reading
                frequency.
              </div>
            </div>
            <div className="statistics__data flex gap-[16px]">
              <div className="statistics__data--number text-[#0365f2] text-xl font-[600] mt-[4px]">
                96%
              </div>
              <div className="statistics__data--title text-base md:text-xl font-[300] text-[#394547]">
                of Summarist members <b>establish better</b> habits.
              </div>
            </div>
            <div className="statistics__data flex gap-[16px]">
              <div className="statistics__data--number text-[#0365f2] text-xl font-[600] mt-[4px]">
                90%
              </div>
              <div className="statistics__data--title text-base md:text-xl font-[300] text-[#394547]">
                have made <b>significant positive</b> change to their lives.
              </div>
            </div>
          </div>
        </div>
        <div className="statistics__wrapper flex flex-col-reverse md:flex-row gap-[80px] mb-[96px]">
          <div className="statistics__content--details statistics__content--details-second w-full flex flex-col justify-center gap-[24px] bg-[#f1f6f4] py-[40px] px-[24px]">
            <div className="statistics__data flex gap-[16px]">
              <div className="statistics__data--number text-[#0365f2] text-xl font-[600] mt-[4px]">
                91%
              </div>
              <div className="statistics__data--title text-base md:text-xl font-[300] text-[#394547]">
                of Summarist members <b>report feeling more productive</b>
                after incorporating the service into their daily routine.
              </div>
            </div>
            <div className="statistics__data flex gap-[16px]">
              <div className="statistics__data--number text-[#0365f2] text-xl font-[600] mt-[4px]">
                94%
              </div>
              <div className="statistics__data--title text-base md:text-xl font-[300] text-[#394547]">
                of Summarist members have <b>noticed an improvement</b> in their
                overall comprehension and retention of information.
              </div>
            </div>
            <div className="statistics__data flex gap-[16px]">
              <div className="statistics__data--number text-[#0365f2] text-xl font-[600] mt-[4px]">
                88%
              </div>
              <div className="statistics__data--title text-base md:text-xl font-[300] text-[#394547]">
                of Summarist members <b>feel more informed</b> about current
                events and industry trends since using the platform.
              </div>
            </div>
          </div>
          <div className="statistics__content--header statistics__content--header-second  w-full flex justify-center flex-col items-start md:items-end">
            <div
              id="1"
              className={`heading1 text-[32px] text-[#6b757b] font-[500] mb-[16px] ${highlight === 1 ? "active__heading" : ""}`}
            >
              Expand your learning
            </div>
            <div
              id="2"
              className={`heading2 text-[32px] text-[#6b757b] font-[500] mb-[16px] ${highlight === 2 ? "active__heading" : ""}`}
            >
              Accomplish your goals
            </div>
            <div
              id="3"
              className={`heading3 text-[32px] text-[#6b757b] font-[500] mb-[16px] ${highlight === 3 ? "active__heading" : ""}`}
            >
              Strengthen your vitality
            </div>
            <div
              id="4"
              className={`heading4 text-[32px] text-[#6b757b] font-[500] mb-[16px] ${highlight === 4 ? "active__heading" : ""}`}
            >
              Become a better caregiver
            </div>
            <div
              id="5"
              className={`heading5 text-[32px] text-[#6b757b] font-[500] mb-[16px] ${highlight === 5 ? "active__heading" : ""}`}
            >
              Improve your mood
            </div>
            <div
              id="6"
              className={`heading6 text-[32px] text-[#6b757b] font-[500] mb-[16px] ${highlight === 6 ? "active__heading" : ""}`}
            >
              Maximize your abilities
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
