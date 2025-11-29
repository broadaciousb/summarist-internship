// REACT
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { app } from "@/Firebase/firebase.config";
import { getCheckoutUrl } from "@/Stripe Payments/stripePayment";
import { IoDocumentText } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
// COMPONENTS
import Footer from "@/components/Footer";

export default function settings() {
  const [plan, setPlan] = useState("yearly");
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const router = useRouter();

  const upgradeToYearly = async () => {
    const priceId= "price_1SYp7OPi81VILnPFzVj4N4Sg";
    const checkoutUrl = await getCheckoutUrl(app, priceId);
    router.push(checkoutUrl);
    console.log("Upgrade to Yearly");
  }

  const upgradeToMonthly = async () => {
    const priceId= "price_1SYp8DPi81VILnPFDQ6m8ikN";
    const checkoutUrl = await getCheckoutUrl(app, priceId);
    router.push(checkoutUrl);
    console.log("Upgrade to Yearly");
  }

  const toggleFAQ = (index: number) => {
    setOpenFAQs(
      (prev) =>
        prev?.includes(index)
          ? prev?.filter((i) => i !== index) // REMOVE index
          : [...prev, index] // ADD index (spread works here)
    );
  };

  const faqs = [
    {
      q: "How does the free 7-day trial work?",
      a: "Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial.",
    },
    {
      q: "Can I switch subscriptions from monthly to yearly, or yearly to monthly?",
      a: "While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.",
    },
    {
      q: "What's included in the Premium plan?",
      a: "Premium membership provides you with the ultimate Summaristexperience, including unrestricted entry to manybest-selling books high-quality audio, the ability todownload titles for offline reading, and the option to sendyour reads to your Kindle.",
    },
    {
      q: "Can I cancel during my trial or subscription?",
      a: "You will not be charged if you cancel your trial before itsconclusion. While you will not have complete access to theentire Summarist library, you can still expand yourknowledge with one curated book per day.",
    },
  ];

  return (
    <>
      <div className="plan w-full">
        <div className="plan__header--wrapper relative text-center w-full pt-[48px] mb-[24px]">
          <div className="plan__header max-w-[1000px] my-0 mx-auto text-[#fff] px-[24px]">
            <div className="plan__title text-[48px] font-[700] mb-[40px]">
              Get unlimited access to many amazing books to read
            </div>
            <div className="plan__sub--title text-[20px] mb-[32px]">
              Turn ordinary moments into amazing learning opportunities
            </div>
            <figure className="plan__img--mask flwx justify-center max-w-[340px] rounded-t-[180px] overflow-hidden mx-auto">
              <img
                alt="pricing"
                src="https://summarist.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpricing-top.4d86e93a.png&w=1080&q=75"
                loading="lazy"
                className="w-full h-full"
              ></img>
            </figure>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="plan__features--wrapper grid grid-cols-3 justify-center text-center gap-[24px] max-w-[800px] mx-auto mb-[56px]">
              <div className="plan__features">
                <figure className="plan__features--icon flex justify-center mb-[12px] text-[#032b41]">
                  <IoDocumentText className="w-[60px] h-[60px]" />
                </figure>
                <div className="plan__features--text text-[394547] leading-[1.5]">
                  <b>Key ideas in few min</b> with many books to read
                </div>
              </div>
              <div className="plan__features">
                <figure className="plan__features--icon flex justify-center mb-[12px] text-[#032b41]">
                  <RiPlantFill className="w-[60px] h-[60px]" />
                </figure>
                <div className="plan__features--text text-[394547] leading-[1.5]">
                  <b>3 million</b> people growing with Summarist everyday
                </div>
              </div>
              <div className="plan__features">
                <figure className="plan__features--icon flex justify-center mb-[12px] text-[#032b41]">
                  <FaHandshake className="w-[60px] h-[60px]" />
                </figure>
                <div className="plan__features--text text-[394547] leading-[1.5]">
                  <b>Precise recommended</b> collections curated by expoerts
                </div>
              </div>
            </div>
            <div className="section__title">Choose the plan that fits you</div>
            <div
              onClick={(e) => {
                e.preventDefault();
                setPlan("yearly");
              }}
              className={`plan__card flex gap-[24px] p-[24px] border-[4px] border-[#bac8ce] bg-[#f1f6f4] round-[4px] cursor-pointer max-w-[680px] mx-auto ${
                plan === "yearly" && "plan__card--active"
              }`}
            >
              <div className="plan__card--circle relative border-[2px] border-[#000] w-[24px] h-[24px] rounded-[50%] flex items-center justify-center">
                {plan === "yearly" && (
                  <div className="plan__card--dot absolute w-[6px] h-[6px] bg-[#000] rounded-[50%]"></div>
                )}
              </div>
              <div className="plan__card--content">
                <div className="plan__card--title text-[18px] font-[600] text-[#032b41] mb-[8px]">
                  Premium Plus Yearly
                </div>
                <div className="plan_-card--price text-[24px] font-[700] text-[#032b41] mb-[8px]">
                  $99.99/year
                </div>
                <div className="plan__card--text text-sm text-[#6b757b]">
                  7-day-free trial included
                </div>
              </div>
            </div>
            <div className="plan__card--separator text-sm text-[#6b757b] flex items-center gap-[8px] max-w-[240px] my-[24px] mx-auto">
              <div className="plan__separator">or</div>
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                setPlan("monthly");
              }}
              className={`plan__card flex gap-[24px] p-[24px] border-[4px] border-[#bac8ce] bg-[#f1f6f4] round-[4px] cursor-pointer max-w-[680px] mx-auto ${
                plan === "monthly" && "plan__card--active"
              }`}
            >
              <div className="plan__card--circle relative border-[2px] border-[#000] w-[24px] h-[24px] rounded-[50%] flex items-center justify-center">
                {plan === "monthly" && (
                  <div className="plan__card--dot absolute w-[6px] h-[6px] bg-[#000] rounded-[50%]"></div>
                )}
              </div>
              <div className="plan__card--content">
                <div className="plan__card--title text-[18px] font-[600] text-[#032b41] mb-[8px]">
                  Premium Monthly
                </div>
                <div className="plan_-card--price text-[24px] font-[700] text-[#032b41] mb-[8px]">
                  $9.99/year
                </div>
                <div className="plan__card--text text-sm text-[#6b757b]">
                  No trial included
                </div>
              </div>
            </div>
            <div className="plan__card--cta sticky bg-white bottom-[0] z-[1] py-[32px] flex flex-col items-center gap-[16px]">
              <div className="w-[300px]">
                {plan == "yearly" ? (
                  <button
                    className="btn text-[#032b41] bg-[#2bd97c] hover:bg-[#20ba68] w-[300px]"
                    onClick={() => {
                      upgradeToYearly();
                    }}
                  >
                    Start your free 7-day trial
                  </button>
                ) : (
                  <button
                    className="btn text-[#032b41] bg-[#2bd97c] hover:bg-[#20ba68] w-[300px]"
                    onClick={() => {
                      upgradeToMonthly();
                    }}
                  >
                    Start your first month
                  </button>
                )}
              </div>
              <div className="plan__disclaimer text-[12px] text-[#6b757b] text-center">
                Cancel your trial at any time before it ends, and you won't be
                charged.
              </div>
            </div>
            <div className="fq__wrapper">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className="accordian__card border-b-[#ddd] mb-[8px] overflow-hidden"
                >
                  <div
                    className="accordion__header flex justify-between items-center cursor-pointer py-[24px] gap-[8px]"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="accordion__title font-[500] text-[24px] text-[#032b41]">
                      {item.q}
                    </div>

                    <IoIosArrowDown
                      className={`transition-transform duration-300 ${
                        openFAQs?.includes(index) ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openFAQs?.includes(index) ? "max-h-[300px]" : "max-h-0"
                    }`}
                  >
                    <div className="accordion__body pb-[24px] text-[#394547] leading-[1.5]">
                      {item.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
