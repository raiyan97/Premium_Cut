import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/logo.png')} // replace with your logo path
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to My App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // splash background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
