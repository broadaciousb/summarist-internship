import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "@/redux/userSlice";
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
        dispatch(setUser({ uid: user.uid }));
        dispatch(login());
        console.log("authstate changed to true");
      } else {
        dispatch(setUser({ uid: null }));
        dispatch(logout());
        console.log("authstate changed to false");
      }
    });

    return authStatus;

  }, [dispatch]);

  return <>{children}</>;
}
