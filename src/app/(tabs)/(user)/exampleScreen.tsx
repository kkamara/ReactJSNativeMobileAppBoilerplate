import { StyleSheet, } from 'react-native';

import { Text, View, } from '@/components/Themed';
import { useRouter, } from 'expo-router';
import Button from '@/components/Button';

import { useMessage, } from '@/providers/MessageProvider';

export default function TabOneScreen() {
  const router = useRouter();
  const { helloWorld, } = useMessage();

  const onClickLink = () => {
    router.navigate("/(tabs)/(user)/exampleScreen2");
  };

  const renderMessage = () => {
    return helloWorld();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Example Screen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Welcome to Example Screen.</Text>
      <Text>Click <Button onPress={onClickLink} text="here"/> for Example Screen 2.</Text>
      <Text>Message from provider: {renderMessage()}</Text>
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
