import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/Firebase/firebase.config";
import { login, logout } from "@/redux/LoggedInSlice";
import { setUser, clearUser } from "@/redux/userSlice";

export default function AuthListener({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const route = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const authStatus = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
        dispatch(login());
        console.log("authstate changed to true");
      } else {
        dispatch(clearUser());
        dispatch(logout());
        route.replace("/");
        console.log("authstate changed to false");
      }
    });

    return authStatus;

  }, [dispatch]);

  return <>{children}</>;
}
