import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
// import { publishableKey } from "../expo-env";
import * as SecureStore from "expo-secure-store";
const tokenCache = {
  async getToken(key) { 
    try{
      const item = await SecureStore.getItemAsync(key);
      if(item){
        console.log(`${key} was used \n`)
      }
      else{
        console.log('No values stored under key :' + key)
      }
      return item;
    } catch (error) {
      console.error('SecureStore get item error:', error);
      await SecureStore.deleteItemAsync(key);
      return null;  
  }
},
  async setToken(key, value){
    try {
      await SecureStore.setItemAsync(key, value);
      console.log(`${key} was set \n`);
    } catch (error) {
      return
    }
  },
}
export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
  useFonts({
    Baloo2: require("./../assets/fonts/Baloo2-Regular.ttf"),
    "Baloo2-Medium": require("./../assets/fonts/Baloo2-Medium.ttf"),
    "Baloo2-SemiBold": require("./../assets/fonts/Baloo2-SemiBold.ttf"),
    "Baloo2-Bold": require("./../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo2-ExtraBold": require("./../assets/fonts/Baloo2-ExtraBold.ttf"),
  });
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen 
          name="login/index"
          options={{
            headerShown: false,
          }}
          />
      </Stack>
    </ClerkProvider>
  );
}
