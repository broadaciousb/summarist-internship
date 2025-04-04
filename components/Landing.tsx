import Image from "next/image";

export default function Landing() {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="landing__wrapper">
            <div className="landing__content">
              <div className="landing__content__title">
                Gain more knowledge
                <br className="remove--table" />
                in less time
              </div>
              <div className="landing__content__subtitle">
                Great summaries for busy people,
                <br className="remove--table" />
                individuals who barely have time to read,
                <br className="remove--table" />
                and even people who don't like to read.
              </div>
              <button className="btn home__cta--btn"></button>
            </div>
            <figure className="landing__image--mask">
              <Image src="" alt="landing" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}