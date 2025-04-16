import { AiFillFileText, AiFillBulb, AiFillAudio } from "react-icons/ai";

export default function Features() {
  return (
    <section id="features">
      <div className="w-full">
        <div className="row">
          <div className="section__title text-[32px] text-[#032b41] text-center mb-[32px] font-bold">
            Understand books in a few minutes
          </div>
          <div className="features__wrapper grid grid-cols-3 gap-[40px] mb-[96px]">
            <div className="features flex flex-col items-center text-center">
              <div className="features__icon flex justify-center mb-[8px] text-[#032b41]">
                <AiFillFileText className="w-[60px] h-[60px]" />
              </div>
              <div className="features__title text-2xl text-[#032b41] mb-[16px] font-[500]">
                Read or listen
              </div>
              <div className="features__sub--title text-lg text-[#394547] font-[300]">
                Save time by getting the core ideas from the best books.
              </div>
            </div>
            <div className="features flex flex-col items-center text-center">
              <div className="features__icon flex justify-center mb-[8px] text-[#032b41]">
                <AiFillBulb className="w-[60px] h-[60px]" />
              </div>
              <div className="features__title text-2xl text-[#032b41] mb-[16px] font-[500]">
                Read or listen
              </div>
              <div className="features__sub--title text-lg text-[#394547] font-[300]">
                Save time by getting the core ideas from the best books.
              </div>
            </div>
            <div className="features flex flex-col items-center text-center">
              <div className="features__icon flex justify-center mb-[8px] text-[#032b41]">
                <AiFillAudio className="w-[60px] h-[60px]" />
              </div>
              <div className="features__title text-2xl text-[#032b41] mb-[16px] font-[500]">
                Read or listen
              </div>
              <div className="features__sub--title text-lg text-[#394547] font-[300]">
                Save time by getting the core ideas from the best books.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
