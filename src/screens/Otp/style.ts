import colors from "@/src/theme/colors";
import { moderateScale, scale } from "@/src/theme/scaling";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    marginTop: moderateScale(50),
  },
  logoPNG: {
    width: moderateScale(100),
    height: moderateScale(100),
  },
  logoText: {
    fontSize: scale(17),
    fontFamily: "DancingScript",
    fontWeight: "600",
    color: colors.ACCENTRED,
  },
  veriftText: {
    fontSize: scale(23),
    fontFamily: "DancingScript",
    fontWeight: "700",
  },
  smsText: {
    fontSize: scale(17),
    fontFamily: "DancingScript",
    fontWeight: "600",
  },
  sentText: {
    fontSize: scale(17),
    fontFamily: "DancingScript",
    fontWeight: "600",
    textAlign: "center",
  },
  numText: {
    fontSize: scale(22),
    fontFamily: "DancingScript",
    fontWeight: "700",
    color: colors.ACCENTRED,
  },
  pinText: {
    fontSize: scale(16),
    fontFamily: "DancingScript",
    fontWeight: "700",
    color: colors.ACCENTRED,
  },
  num: {
    fontSize: scale(28),
    fontFamily: "DancingScript",
    fontWeight: "700",
    color: colors.DARKTEXT,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    marginBottom: 15,
  },
  codeInput: {
    borderBottomWidth: 2,
    borderColor: "#ccc",
    fontSize: 22,
    textAlign: "center",
    width: 40,
    padding: 5,
  },
  googlebtn: {
    width: moderateScale(320),
  },

  resend: {
    fontSize: scale(16),
    color: colors.ACCENTRED,
    marginTop: moderateScale(10),
  },
});
export default styles