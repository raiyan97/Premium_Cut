import colors from "@/src/theme/colors";
import { moderateScale, scale } from "@/src/theme/scaling";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "flex-start",
  },

  SignText: {
    fontSize: scale(30),
    fontFamily: "DancingScript",
    fontWeight: "700",
    color: colors.ACCENTRED,
  },
  describe: {
    fontSize: scale(23),
    color: colors.DARKTEXT,
    fontFamily: "DancingScript",
    fontWeight: "600",
  },
  meatText: {
    fontSize: scale(23),
    color: colors.ACCENTRED,
    fontFamily: "DancingScript",
    fontWeight: "700",
  },
  inputFild: {
    marginTop: moderateScale(50),
  },
  inputFild2: {
    marginTop: moderateScale(30),
  },
  forgetText: {
    fontSize: scale(14),
    fontFamily: "DancingScript",
    fontWeight: "600",
    top: moderateScale(10),
  },
  googlebtn: {
    bottom: moderateScale(40),
  },
  userConatin: {
    top: moderateScale(26),
  },
  userText: {
    fontSize: scale(15),
    fontFamily: "DancingScript",
    fontWeight: "600",
    textAlign: "center",
  },
  uptext: {
    fontSize: scale(16),
    color: colors.ACCENTRED,
  },
});
export default styles;