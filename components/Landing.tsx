import Image from "next/image";
import LandingImg from "/assets/landing.png";

export default function Landing() {
  return (
    <section id="landing">
      <div className="w-full">
        <div className="row">
          <div className="landing__wrapper flex m-[0px]">
            <div className="landing__content w-full">
              <div
                className="
                landing__content__title
                text-[#032b41]
                text-[40px]
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
              <button className="btn home__cta--btn text-[#032b41] bg-[#2bd97c] hover:bg-[#20ba68]">Login</button>
            </div>
            <figure className="flex justify-end w-[800px] h-[400px] relative">
              <Image
                src={LandingImg}
                className="absolute max-w-[400px]"
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
