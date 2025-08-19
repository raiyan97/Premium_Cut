// Card.tsx
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { moderateScale, scale } from "../theme/scaling";

type CardProps = {
  image: any;   // local require() OR { uri: "" }
  title: string;
};

export default function Card({ image, title }: CardProps) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    margin: 5,
  },
  image: {
    width:moderateScale( 180),
    height:moderateScale( 140),
    resizeMode: "contain",
  },
  title: {
    // marginTop: 5,
    fontSize:scale( 16),
    fontWeight: "600",
  },
});
