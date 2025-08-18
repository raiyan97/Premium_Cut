import imagepath from '@/src/constants/imagePath';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue',headerShown:false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="productList"
        options={{
          title: 'ProductList',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} />,
        }}
      />
        <Tabs.Screen
  name="favourite"
  options={{
    title: "Favourite",
    tabBarIcon: ({ focused }) => (
      <Image
        source={imagepath.favourite}
        style={{
          width: 28,
          height: 28,
          tintColor: focused ? "blue" : "gray",
        }}
      />
    ),
  }}
/>
       <Tabs.Screen
        name="notification"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="bell" color={color} />,
        }}
      />
      
  <Tabs.Screen
  name="more"
  options={{
    title: "More",
    tabBarIcon: ({ focused }) => (
      <Image
        source={imagepath.more}
        style={{
          width: 28,
          height: 28,
          tintColor: focused ? "blue" : "gray",
        }}
      />
    ),
  }}
/>
    </Tabs>
  );
}
