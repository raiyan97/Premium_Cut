import imagepath from "@/src/constants/imagePath";
import colors from "@/src/theme/colors";
import { moderateScale } from "@/src/theme/scaling";
import { router } from "expo-router";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import styles from '../onBoarding/style';

export default function OnBoarding() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.PRIMARYRED,
        paddingHorizontal: moderateScale(50),
      }}
    >
      <View style={styles.container}>
         <View style={styles.meatConatin}>
        <Text style={styles.meatText}>SHOP YOUR POULTRY WITH <Text style={{color:colors.DARKTEXT}}>MEATOMARKET</Text></Text>     
     </View>
    
     <View  style={styles.nequeConatin}>
    <Text style={styles.meatDescribeText}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,</Text>

      </View>

        <View style={styles.containImg}>
      <View style={styles.halfContainer}></View>
          <View style={styles.leftside}></View>
          <View style={styles.rightside}></View>
          <View style={styles.onContainer}>
            <Image style={styles.onboardingImg} source={imagepath.meatPng01} />
          </View>
          <View style={styles.quoteeConatiner}>
            <Image style={styles.quotes} source={imagepath.doubleQuotes} />
             <View style={styles.textConatin}>
            <Text style={styles.describe}>
              Exquisite
              <Text style={styles.text}>
                {" "}
                Varlety{"\n"} of Products{"\n"}
              </Text>
            </Text>
          </View>
          </View>
              <View style={styles.matterContain}>
            <Text style={styles.matterText}>
              {" "}
              Consectetur adipiscing elit,sed do tempor {"\n"} incididunt ut
              labore el dolore magna oil.
            </Text>
            <View style={styles.dobleContain}>
              <Image style={styles.dbleImg} source={imagepath.double} />
            </View>
          </View>
      </View>
       <View style={styles.skipConatin}>
          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View> 
        </View>
       

        {/* </View>  */}
   </SafeAreaView>
  );
}
 
