import imagepath from '@/src/constants/imagePath';
import { moderateScale } from '@/src/theme/scaling';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type SplashProps = {
  title?: string;
};

export default function Splash({ title = "splash Screen" }: SplashProps) {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.logoImg}
      source={imagepath.logo}/>
      <Text style={styles.text}>{title}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  logoImg:{
    width:moderateScale(160),
    height:moderateScale(160),

  }
});
