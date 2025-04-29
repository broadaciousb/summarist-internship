import Image from "next/image";
import LandingImg from "/assets/landing.png";
import { BsStar, BsStarFill } from "react-icons/bs";

export default function Reviews() {
  return (
    <section id="reviews">
      <div className="row">
        <div className="w-full py-[40px]">
          <div className="text-[32px] text-[#032b41] text-center mb-[32px] font-bold">
            What our members say
          </div>
          <div className="reviews__wrapper max-w-[600px] mt-[0px] mx-auto">
            <div className="review bg-[#fff3d7] p-[16px] mb-[32px] rounded-sm font-[300]">
              <div className="review__header text-[#032b41] flex gap-[8px] mb-[8px]">
                <div className="review__name">Hanna M.</div>
                <div className="review__stars flex"><BsStarFill className="fill-[#0564f1] w-[16px] h-[16px]" /></div>
              </div>
              <div className="review__body text-[#394547] tracking-[0.3px] leading-[1.4]">
                This app has been a <b>game-changer</b> for me! It's saved me so
                much time and effort in reading and comprehending books. Highly
                recommend it to all book lovers.
              </div>
            </div>
            <div className="review bg-[#fff3d7] p-[16px] mb-[32px] rounded-sm font-[300]">
              <div className="review__header text-[#032b41] flex gap-[8px] mb-[8px]">
                <div className="review__name">David B.</div>
                <div className="review__stars flex"><BsStarFill className="fill-[#0564f1] w-[16px] h-[16px]" /></div>
              </div>
              <div className="review__body text-[#394547] tracking-[0.3px] leading-[1.4]">
                I love this app! It provides
                <b> concise and accurate summaries</b> of books in a way that is
                easy to understand. It's also very user-friendly and intuitive.
              </div>
            </div>
            <div className="review bg-[#fff3d7] p-[16px] mb-[32px] rounded-sm font-[300]">
              <div className="review__header text-[#032b41] flex gap-[8px] mb-[8px]">
                <div className="review__name">Nathan S.</div>
                <div className="review__stars flex"><BsStarFill className="fill-[#0564f1] w-[16px] h-[16px]" /></div>
              </div>
              <div className="review__body text-[#394547] tracking-[0.3px] leading-[1.4]">
                This app is a great way to get the main takeaways from a book
                without having to read the entire thing.
                <b>The summaries are well-written and informative. </b>
                Definitely worth downloading.
              </div>
            </div>
            <div className="review bg-[#fff3d7] p-[16px] mb-[32px] rounded-sm font-[300]">
              <div className="review__header text-[#032b41] flex gap-[8px] mb-[8px]">
                <div className="review__name">Ryan R.</div>
                <div className="review__stars flex"><BsStarFill className="fill-[#0564f1] w-[16px] h-[16px]" /></div>
              </div>
              <div className="review__body text-[#394547] tracking-[0.3px] leading-[1.4]">
                If you're a busy person who
                <b> loves reading but doesn't have the time</b> to read every
                book in full, this app is for you! The summaries are thorough
                and provide a great overview of the book's content.
              </div>
            </div>
          </div>
          <div className="reviews__btn--wrapper flex justify-center">
            <button className="btn home__cta--btn text-[#032b41] bg-[#2bd97c] hover:bg-[#20ba68]">
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
