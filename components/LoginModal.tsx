import Image from "next/image";
import googleImg from "../assets/google.png";
import loginImg from "../assets/login.png";

export default function LoginModal() {
  return (
    <div className="auth__wrapper fixed flex flex-col justify-center items-center h-full inset-0 z-10 bg-black/[0.75]">
      <div className="auth relative max-w-[400px] w-full bg-white rounded-[8px]">
        <div className="auth__content pt-[48px] px-[32px] pb-[24px]">
          <div className="text-center text-xl font-bold text-[#032b41] mb-[24px]">
            Log in to Summarist
          </div>
          <button className="btn relative text-white bg-[#3a579d] hover:bg-[#25396b]">
            <div>Login as a Guest</div>
            <figure className="guest__icon--mask bg-transparent flex items-center w-[36px] h-[36px] left-[2px] absolute">
              <Image
                src={loginImg}
                className=""
              />
            </figure>
          </button>
          <div className="auth__or flex items-center my-[16px] mx-[0]">
            <span className="block grow h-[1px] bg-[#bac8ce] content-['']"></span>
            <div className="auth__or--text text-sm text-[#394547] font-[500] my-[0] mx-[24px]">
              or
            </div>
            <span className="block grow h-[1px] bg-[#bac8ce] content-['']"></span>
          </div>
          <button className="btn relative text-white bg-[#4285f4] hover:bg-[#3367d6]">
            <div>Login with Google</div>
          </button>
          <div className="auth__or flex items-center my-[16px] mx-[0]">
            <span className="block grow h-[1px] bg-[#bac8ce] content-['']"></span>
            <div className="auth__or--text text-sm text-[#394547] font-medium my-[0] mx-[24px]">
              or
            </div>
            <span className="block grow h-[1px] bg-[#bac8ce] content-['']"></span>
          </div>
          <form className="auth__main--form flex flex-col gap-[16px]">
            <input
              type="text"
              className="auth__main--input h-[40px] py-[0] px-[12px] text-[#394547] border-[2px] border-[#bac8ce] rounded-sm"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="auth__main--input h-[40px] py-[0] px-[12px] text-[#394547] border-[2px] border-[#bac8ce] rounded-sm"
              placeholder="Password"
            />
            <button className="btn text-[#032b41] bg-[#2bd97c] hover:bg-[#20ba68]">
              Login
            </button>
          </form>
        </div>
        <div className="auth__forgot--password text-center text-[#116be9] font-[300] text-sm mt-[0] mx-auto mb-[16px]">
          Forgot your password?
        </div>
        <button className="auth__switch--btn h-[40px] w-full text-base font-[300] text-center text-[#116be9] bg-[#f1f6f4]">
          Don't have an account?
        </button>
        <div className="auth__close--btn absolute t-[12px]">X</div>
      </div>
    </div>
  );
}
