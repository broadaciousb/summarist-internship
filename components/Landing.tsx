import Image from "next/image";
import LandingImg from "/assets/landing.png";
import { useAppDispatch } from "@/redux/hooks";
import { increment as openModal } from "@/redux/ToggleModalSlice";

export default function Landing() {
  const dispatch = useAppDispatch();


  return (
    <section id="landing">
      <div className="w-full py-[40px]">
        <div className="row">
          <div className="landing__wrapper flex m-[0px]">
            <div className="landing__content w-full text-center md:text-left flex flex-col items-center md:items-start">
              <div
                className="
                landing__content__title
                text-[#032b41]
                text-[24px]
                md:text-[40px]
                font-bold
                mb-[24px]
                "
              >
                Gain more knowledge
                <br className="remove--tablet" />
                in less time
              </div>
              <div
                className="
                landing__content__subtitle
                text-[#394547]
                text-[20px]
                font-light
                mb-[24px]
                leading-[1.5]
                "
              >
                Great summaries for busy people,
                <br className="remove--tablet" />
                individuals who barely have time to read,
                <br className="remove--tablet" />
                and even people who don't like to read.
              </div>
              <button className="btn home__cta--btn text-[#032b41] bg-[#2bd97c] hover:bg-[#20ba68]"
                onClick={(e) => {
                  e.preventDefault;
                  dispatch(openModal());
                }}>
                Login
              </button>
            </div>
            <figure className="flex justify-end w-[800px] h-[400px] relative hidden md:flex">
              <Image
                src={LandingImg}
                className="absolute w-[400px]"
                alt="landing"
                layout="fill"
                objectFit="contain"
                width={0}
                height={0}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
