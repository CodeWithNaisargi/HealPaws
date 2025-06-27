import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

export default function Index() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded) return;
    if (isSignedIn) {
      router.replace("/helloworld"); // dashboard
    } else {
      router.replace("/home"); // login/landing
    }
  }, [isSignedIn, isLoaded, router]);

  return null;
}
