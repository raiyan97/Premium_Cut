
import imagepath from "@/src/constants/imagePath";
import colors from "@/src/theme/colors";
import { moderateScale } from "@/src/theme/scaling";
import { Image, StyleSheet, Text, View } from "react-native";


export default function Splash() {
  return (
    <View style={styles.container}>
      <Image style={styles.logoText} source={imagepath.logo} />
      <Text style={styles.text}>MeatOmarket</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.WHITE,
  },
  text: { fontSize: 24, 
    fontWeight: "bold" 
},


logoText:{
    width:moderateScale(200),
    height:moderateScale(200)
}
});