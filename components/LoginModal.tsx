import Image from "next/image";
import googleImg from "../assets/google.png";
import { BsPersonFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { decrement as closeModal } from "@/redux/ToggleModalSlice";
import { useEffect, useState } from "react";
import { CreateAccount, signIn } from "@/Firebase/firebase.config";
import { login } from "@/redux/LoggedInSlice";
import { useRouter } from "next/router";



export default function LoginModal() {
  const isOnline: boolean = useAppSelector((state) => state.online.loggedIn);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [needUserSignUp, setneedUserSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signUp() {
    !needUserSignUp ? setneedUserSignUp(true) : setneedUserSignUp(false);
  }

  async function handleCreateAccount() {
    try {
      await CreateAccount(email, password);
      dispatch(closeModal());
      setEmail("");
      setPassword("");
      signUp();

    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating account:", errorCode, errorMessage);
      alert(`Error creating account: ${errorMessage}`); // Display more informative error
      // Handle specific error codes (e.g., weak-password, email-already-in-use) for better UI feedback
    }
  }

  async function handleLogin() {
    try {
      await signIn(email, password);
      dispatch(login());
      dispatch(closeModal());
      router.push('/for-you');

    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating account:", errorCode, errorMessage);
      alert(`Error creating account: ${errorMessage}`); // Display more informative error
      // Handle specific error codes (e.g., weak-password, email-already-in-use) for better UI feedback
    }
  }

  useEffect(() => {
    console.log(isOnline);
  }, [isOnline]);

  return (
    <div className="auth__wrapper fixed flex flex-col justify-center items-center h-full inset-0 z-10 bg-black/[0.75]">
      <div className="auth relative max-w-[400px] w-full bg-white rounded-[8px]">
        <div className="auth__close--btn absolute top-[12px] right-[12px] flex cursor-pointer transition-opacity transition-[0.2s] hover:opacity-[0.5]">
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(closeModal());
            }}
          >
            <RxCross2 className="w-[24px] h-[24px] relative" />
          </button>
        </div>
        <div className="auth__content pt-[48px] px-[32px] pb-[24px]">
          <div className="text-center text-xl font-bold text-[#032b41] mb-[24px]">
            {!needUserSignUp ? (
              <div>Log in to Summarist</div>
            ) : (
              <div>Sign up to Summarist</div>
            )}
          </div>
          {!needUserSignUp && (
            <div>
              <button className="btn relative text-white bg-[#3a579d] hover:bg-[#25396b]">
                <div>Login as a Guest</div>
                <figure className="icon--mask bg-transparent flex items-center justify-center w-[36px] h-[36px] left-[2px] absolute">
                  <BsPersonFill className="w-full h-full" />
                </figure>
              </button>
              <div className="auth__or flex items-center my-[16px] mx-[0]">
                <span className="block grow h-[1px] bg-[#bac8ce] content-['']"></span>
                <div className="auth__or--text text-sm text-[#394547] font-[500] my-[0] mx-[24px]">
                  or
                </div>
                <span className="block grow h-[1px] bg-[#bac8ce] content-['']"></span>
              </div>
            </div>
          )}

          {!needUserSignUp ? (
            <div>
              <button className="btn relative text-white bg-[#4285f4] hover:bg-[#3367d6]">
                <div>Login with Google</div>
                <figure className="icon--mask bg-transparent flex items-center justify-center max-w-[200px] left-[2px] absolute">
                  <Image
                    src={googleImg}
                    className="bg-white rounded-sm"
                    fill={true}
                    style={{ objectFit: "contain" }}
                    alt="google img"
                  />
                </figure>
              </button>
            </div>
          ) : (
            <div>
              <button className="btn relative text-white bg-[#4285f4] hover:bg-[#3367d6]">
                <div>Sign up with Google</div>
                <figure className="icon--mask bg-transparent flex items-center justify-center w-[36px] h-[36px] left-[2px] absolute">
                  <Image
                    src={googleImg}
                    className="bg-white rounded-sm"
                    layout="fill"
                    objectFit="contain"
                    alt="google img"
                  />
                </figure>
              </button>
            </div>
          )}
          <div className="auth__or flex items-center my-[16px] mx-[0]">
            <span className="block grow h-[1px] bg-[#bac8ce] content-['']"></span>
            <div className="auth__or--text text-sm text-[#394547] font-medium my-[0] mx-[24px]">
              or
            </div>
            <span className="block grow h-[1px] bg-[#bac8ce] content-['']"></span>
          </div>
          <form
            id="sign-in"
            className="auth__main--form flex flex-col gap-[16px]"
            onSubmit={(e) => {
              e.preventDefault();
            }}
            //TODO1: add onSubmit function to handle form submission and prevent the default action
            // onSubmit={(e) => {
            //   e.preventDefault();
            // }}
          >
            <input
              type="email"
              className="auth__main--input h-[40px] py-[0] px-[12px] text-[#394547] border-[2px] border-[#bac8ce] rounded-sm"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="auth__main--input h-[40px] py-[0] px-[12px] text-[#394547] border-[2px] border-[#bac8ce] rounded-sm"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {!needUserSignUp ? (
              <button
                className="btn text-[#032b41] bg-[#2bd97c] hover:bg-[#20ba68]"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                Login
              </button>
            ) : (
              <button
                className="btn text-[#032b41] bg-[#2bd97c] hover:bg-[#20ba68]"
                onClick={(e) => {
                  e.preventDefault();
                  handleCreateAccount();
                }}
              >
                Create Account
              </button>
            )}
          </form>
        </div>
        <div className="auth__forgot--password text-center text-[#116be9] font-[300] text-sm mt-[0] mx-auto mb-[16px]">
          Forgot your password?
        </div>
        <button
          className="auth__switch--btn h-[40px] w-full text-base font-[300] text-center text-[#116be9] bg-[#f1f6f4]"
          onClick={signUp}
        >
          {!needUserSignUp ? (
            <div>Don't have an account?</div>
          ) : (
            <div>Already have an account?</div>
          )}
        </button>
      </div>
    </div>
  );
}
