import colors from "@/src/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:colors.PRIMARYRED,
        tabBarInactiveTintColor:colors.DARKTEXT,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="More"
        options={{
          title: "Product",
          tabBarIcon: ({ color, size }) => (
<Ionicons name="list-outline" size={24} color="black" />
          ),
        }}
      />
        <Tabs.Screen
        name="Favourite"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ color, size }) => (
<MaterialIcons name="favorite-border" size={24} color="black" />
          ),
        }}
      />
     
       <Tabs.Screen
        name="Notifications"
        options={{
          title: "Notification",
          tabBarIcon: ({ color, size }) => (
<Ionicons name="notifications-outline" size={24} color="black" />
          ),
        }}
      />
       <Tabs.Screen
        name="List"
        options={{
          title: "More",
          tabBarIcon: ({ color, size }) => (
           <MaterialIcons name="more-horiz" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
