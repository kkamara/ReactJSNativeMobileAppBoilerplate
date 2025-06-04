import { StyleSheet, } from 'react-native';
import { useRouter, } from 'expo-router';
import { Text, View, } from '@/components/Themed';
import Button from '@/components/Button';

export default function TabOneScreen() {
  const router = useRouter();

  const onClickLink = () => {
    router.navigate("/(tabs)/(user)/exampleScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Example Screen 2</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.text}>Welcome to Example Screen 2.</Text>
      <Text style={styles.text}>Click <Button onPress={onClickLink} text="here"/> for Example Screen 1.</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    fontSize: 18,
  },
});
