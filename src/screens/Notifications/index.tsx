import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type NotificationsProps = {
  title?: string;
};

export default function Notifications({ title = "Default Text" }: NotificationsProps) {
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
