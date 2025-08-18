import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import Splash from "./splash";

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);

  const [fontsLoaded] = useFonts({
    DancingScript: require("../assets/fonts/DancingScript-Bold.ttf"),
    "DancingScript-Regular.ttf": require("../assets/fonts/DancingScript-Regular.ttf"),
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
 

   if (isLoading || !fontsLoaded) {
    return <Splash />; 
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
        
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ 
        title: "Home"
        
        }} />
      <Stack.Screen name="Tab" options={{ title: "Tab" }} />
    </Stack>
  );
}
