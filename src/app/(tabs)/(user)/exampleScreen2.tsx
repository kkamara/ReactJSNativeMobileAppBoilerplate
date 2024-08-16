import { StyleSheet, } from 'react-native';

import { Text, View, } from '@/components/Themed';
import { useRouter, } from 'expo-router';

export default function TabOneScreen() {
  const router = useRouter();

  const onClickLink = () => {
    router.navigate("/(tabs)/(user)/exampleScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Example Screen 2</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Welcome to Example Screen 2.</Text>
      <Text>Click <Text onPress={onClickLink}>here</Text> for Example Screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
