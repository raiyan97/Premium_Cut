import CustomButton from '@/src/components/Button';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: params.name,
        }}
      />
      <Text
        onPress={() => {
          router.setParams({ name: 'Updated' });
        }}>
      </Text>
      <Text>hello</Text>
      <CustomButton
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
