import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type MoreProps = {
  title?: string;
};

export default function More({ title = "Default Text" }: MoreProps) {
  return (
    <View style={styles.container}>
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
});
