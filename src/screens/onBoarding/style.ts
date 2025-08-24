import colors from "@/src/theme/colors";
import { height, moderateScale, scale } from "@/src/theme/scaling";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containImg: {
    alignItems: "flex-end",
    marginTop: moderateScale(70),
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.WHITE,
    height: height / 2,
    width: moderateScale(350),
    borderRadius: 10,
   
  },
  meatConatin:{
 bottom:moderateScale(50),
   alignSelf:"center"
  },
  nequeConatin:{
  bottom:20
  },
  meatDescribeText:{
 fontSize:scale(15),
   fontFamily:"DancingScript",
   fontWeight:'700',
   color:colors.LIGHTTEXT,
   textAlign:"center"
  },
  meatText:{
   fontSize:scale(11),
   fontFamily:"DancingScript",
   fontWeight:'700',
   color:colors.LIGHTTEXT
  },
  ticketImg: {
    width: moderateScale(390),
    height: height / 3,
  },
  leftside: {
    width: moderateScale(30),
    height: moderateScale(30),
    backgroundColor: colors.PRIMARYRED,
    borderRadius: 50,
    position: "absolute",
    left: -17,
    right: 0,
    bottom: 0,
    top: 170,
  },
  rightside: {
    width: moderateScale(30),
    height: moderateScale(30),
    backgroundColor: colors.PRIMARYRED,
    borderRadius: 50,
    position: "relative",
    left: 35,
    right: 0,
    bottom: 0,
    top: 170,
  },
  onContainer: {
    justifyContent: "center",
    alignSelf: "center",
    position: "relative",
    left: 0,
    right: 0,
    bottom: 0,
    top: -90,
  },
  onboardingImg: {
    width: moderateScale(300),
    height: moderateScale(200),
    borderRadius: 10,
     shadowColor:colors.DARKTEXT,
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset:{width:0,height:3},
    elevation:8
  },
  quoteeConatiner: {
    flexDirection: "row",
    alignSelf: "flex-start",
    position: "fixed",
    left: 20,
    right: 0,
    bottom: 10,
    top: -30,
  },
  quotes: {
    width: moderateScale(17),
    height: moderateScale(15),
    tintColor: colors.PRIMARYRED,
 right:moderateScale(10)
  },
  textConatin: {
    justifyContent: "center",
    alignSelf: "center",
    // bottom: moderateScale(40),
  },
  describe: {
    fontSize: scale(30),
    fontFamily: "DancingScript",
    fontWeight: "600",
    color: colors.ACCENTRED,
  },
  text: {
    fontSize: scale(19),
  },
  matterText: {
    fontSize: scale(16),
    color: colors.DARKTEXT,
    fontFamily: "DancingScript",
    fontWeight: "500",
  },
  matterContain: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    bottom: moderateScale(60),
  },
  dobleContain: {
    alignSelf: "flex-end",
    marginTop: moderateScale(9),
    left: moderateScale(20),
  },

  dbleImg: {
    width: moderateScale(29),
    height: moderateScale(17),
    tintColor: colors.PRIMARYRED,
  },
  skipConatin: {
    justifyContent: "center",
    alignSelf: "center",
 top:moderateScale(50)

  },
  skipText: {
    fontSize: scale(16),
    fontFamily: "DancingScript",
    fontWeight: "700",
    color: colors.WHITE,
  },
  halfContainer:{
    backgroundColor:colors.LIGHTTEXT,
    width:moderateScale(350),
    height:moderateScale(182),
    // borderRadius:40,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    position:"absolute",
    top:0,
    right:0,
    left:0,
    bottom:0
  }
});

export default styles