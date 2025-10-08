import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/Firebase/firebase.config";
import { login, logout } from "@/redux/LoggedInSlice";

export default function AuthListener({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authStatus = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login());
        console.log("authstate changed to true");
      } else {
        dispatch(logout());
        console.log("authstate changed to false");
      }
    });

    return authStatus;

  }, [dispatch]);

  return <>{children}</>;
}
