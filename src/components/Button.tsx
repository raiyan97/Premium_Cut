import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../theme/colors";
import { moderateScale, scale } from "../theme/scaling";

type SignInProps = {
  title?: string;
  color?: string | number;
  onPress?: ()=> void
};

const CustomButton: React.FC<SignInProps> = ({ title,color,onPress}) => {
  return (
    <TouchableOpacity style={[styles.btn, {backgroundColor:color}]}onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    paddingVertical:moderateScale(12),
    paddingHorizontal:moderateScale(24),
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop:moderateScale(55),
    // marginVertical:moderateScaleVertical (10),
  },
  text: {
    color:colors.WHITE,
    fontSize:scale(16),
    fontFamily:"DancingScript",
    fontWeight: "700",
  },
});
