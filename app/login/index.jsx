import React, { useCallback } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import * as WebBrowser from "expo-web-browser";
import { Link } from "expo-router";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Preloads the browser for Android devices to reduce authentication load time
    // See: https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      // Cleanup: closes browser when component unmounts
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

// Handle any pending authentication sessions
WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = useCallback(async () => {
    try {
      const { createSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/home", { scheme: "myapp" }),
        });
      if (createSessionId) {
        // If createSessionId is returned, it means the user is signing up
        console.log("User signed up successfully");
      } else {
      }
    } catch (error) {
      console.error("Error during OAuth flow:", error);
    }
  }, []);
  return (
    <View>
      <Image
        source={require("./../../assets/images/HealPawLogo.png")}
        style={{
          height: 352,
          width: 352,
          display: "flex",
          alignSelf: "center",
          marginTop: 70,
        }}
      />

      <View
        style={{
          padding: 20,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Baloo2-extraBold",
            fontSize: 32,
            textAlign: "center",
          }}
        >
          Ready to make a new friend?
        </Text>
        <Text
          style={{
            fontFamily: "Baloo2-Medium",
            fontSize: 18,
            textAlign: "center",
            color: Colors.GRAY,
          }}
        >
          Let's adopt the pet which you like and make there life happy again.
        </Text>

        <Pressable
          onPress={onPress}
          style={{
            padding: 14,
            marginTop: 100,
            backgroundColor: "#dd7973",
            width: "100%",
            borderRadius: 14,
            alignSelf: "center",
            maxWidth: 300,
            ...(typeof window !== "undefined" && window.innerWidth > 500
              ? { width: 300 }
              : {}),
          }}
        >
          <Text
            style={{
              fontFamily: "Baloo2-Medium",
              fontSize: 22,
              textAlign: "center",
              color: Colors.WHITE,
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
