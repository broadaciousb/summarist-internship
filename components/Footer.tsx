export default function Footer() {
  return (
    <section id="footer" className="bg-[#f1f6f4]">
      <div className="w-full py-[40px]">
        <div className="row">
          <div className="footer__top--wrapper flex justify-between relative text-sm mt-[32px] mx-auto mb-[64px]">
            <div className="footer__block z-1">
              <div className="footer__link--title font-[600] mb-[16px] text-lg text-[#032b41]">Actions</div>
              <div>
                <div className="footer__link--wrapper flex items-center gap-[16px] mb-[16px]">
                  <a className="footer__link mb-[12px] leading-[1] cursor-not-allowed">Summarist Magazine</a>
                </div>
                <div className="footer__link--wrapper flex items-center gap-[16px] mb-[16px]">
                  <a className="footer__link mb-[12px] leading-[1] cursor-not-allowed">Cancel Subscription</a>
                </div>
                <div className="footer__link--wrapper flex items-center gap-[16px] mb-[16px]">
                  <a className="footer__link mb-[12px] leading-[1] cursor-not-allowed">Help</a>
                </div>
                <div className="footer__link--wrapper flex items-center gap-[16px] mb-[16px]">
                  <a className="footer__link mb-[12px] leading-[1] cursor-not-allowed">Contact us</a>
                </div>
              </div>
            </div>
            <div className="footer__block z-1">
              <div className="footer__link--title font-[600] mb-[16px] text-lg text-[#032b41]">Useful Links</div>
              <div>
                <div className="footer__link--wrapper flex items-center gap-[16px] mb-[16px]">
                  <a className="footer__link mb-[12px] leading-[1] cursor-not-allowed">Pricing</a>
                </div>
                <div className="footer__link--wrapper flex items-center gap-[16px] mb-[16px]">
                  <a className="footer__link mb-[12px] leading-[1] cursor-not-allowed">Summarist Business</a>
                </div>
                <div className="footer__link--wrapper flex items-center gap-[16px] mb-[16px]">
                  <a className="footer__link mb-[12px] leading-[1] cursor-not-allowed">Gift Cards</a>
                </div>
                <div className="footer__link--wrapper flex items-center gap-[16px] mb-[16px]">
                  <a className="footer__link mb-[12px] leading-[1] cursor-not-allowed">Authors & Publishers</a>
                </div>
              </div>
            </div>
            <div className="footer__block z-1">
              <div className="footer__link--title font-[600] mb-[16px] text-lg text-[#032b41]">Company</div>
              <div>
                <div className="footer__link--wrapper flex items-center gap-[16px] mb-[16px]">
                  <a className="footer__link mb-[12px] leading-[1] cursor-not-allowed">About</a>
                </div>
                <div className="footer__link--wrapper flex items-center gap-[16px] mb-[16px]">
                  <a className="footer__link mb-[12px] leading-[1] cursor-not-allowed">Careers</a>
                </div>
                <div className="footer__link--wrapper flex items-center gap-[16px] mb-[16px]">
                  <a className="footer__link mb-[12px] leading-[1] cursor-not-allowed">Partners</a>
                </div>
                <div className="footer__link--wrapper flex items-center gap-[16px] mb-[16px]">
                  <a className="footer__link mb-[12px] leading-[1] cursor-not-allowed">Code of Conduct</a>
                </div>
              </div>
            </div>
            <div className="footer__block z-1">
              <div className="footer__link--title font-[600] mb-[16px] text-lg text-[#032b41]">Other</div>
              <div>
                <div className="footer__link--wrapper flex items-center gap-[16px] mb-[16px]">
                  <a className="footer__link mb-[12px] leading-[1] cursor-not-allowed">Sitemap</a>
                </div>
                <div className="footer__link--wrapper flex items-center gap-[16px] mb-[16px]">
                  <a className="footer__link mb-[12px] leading-[1] cursor-not-allowed">Legal Notice</a>
                </div>
                <div className="footer__link--wrapper flex items-center gap-[16px] mb-[16px]">
                  <a className="footer__link mb-[12px] leading-[1] cursor-not-allowed">Terms of Service</a>
                </div>
                <div className="footer__link--wrapper flex items-center gap-[16px] mb-[16px]">
                  <a className="footer__link mb-[12px] leading-[1] cursor-not-allowed">Privacy Policies</a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright--wrapper flex justify-center items-center">
            <div className="footer__copyright text-[#032b41] font-[500]">
              Copyright &copy; 2023 Summarist.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
