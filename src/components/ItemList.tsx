// Card.tsx
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../theme/colors";
import { moderateScale, scale } from "../theme/scaling";

type CardProps = {
  image: any; // local require() OR { uri: "" }
  title: string;
  label: string;
};

export default function Card({ image, title, label }: CardProps) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.labelConatiner}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.labelConatiner2}>
      <Text style={styles.label}>{label}</Text>
    </View>
    // </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: "48%",
    margin: moderateScale(3),
    borderRadius: 3,
    backgroundColor:colors.WHITE,
    // padding: moderateScale(10),
    elevation: 2,


  },
  image: {
    width:moderateScale(186),
    height: moderateScale(140),
    resizeMode: "cover",
    // marginBottom:moderateScale(10),
  },
  title: {
    fontSize: scale(16),
    fontWeight: "600",
    color: colors.DARKTEXT,
    textAlign: "center",
  },
  label: {
    fontSize: scale(14),
    fontWeight: "600",
    color: colors.WHITE,
    textAlign: "center",
  },
  labelConatiner: {
    width: moderateScale(140),
    height: moderateScale(70),
    justifyContent: "center",
    position: "relative",
    top: -10,
  },

  labelConatiner2: {
    backgroundColor: colors.ACCENTRED,
    width: moderateScale(140),
    height: moderateScale(20),
    alignItems: "center",
    borderRadius: 5,
    top: 10,
  },
});
