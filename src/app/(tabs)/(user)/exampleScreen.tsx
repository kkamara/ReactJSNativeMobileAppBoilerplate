import { useEffect, } from 'react';
import { StyleSheet, } from 'react-native';
import { useRouter, } from 'expo-router';
import { Text, View, } from '@/components/Themed';
import Button from '@/components/Button';
import Loading from '@/components/Loading';

import { useMessage, } from '@/providers/MessageProvider';
import { useHelloFromServer, } from '@/providers/HelloFromServerProvider';
import { isErrorResponse, } from '@/types';

export default function TabOneScreen() {
  const router = useRouter();
  const { helloWorld, } = useMessage();
  const {
    helloFromServer,
    loading,
    getHelloFromServer,
  } = useHelloFromServer();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getHelloFromServer();
  };

  const onClickLink = () => {
    router.navigate("/(tabs)/(user)/exampleScreen2");
  };

  const renderMessage = () => {
    return helloWorld();
  };

  const renderHelloFromServer = () => {
    if (helloFromServer && true === isErrorResponse(helloFromServer)) {
      return helloFromServer.error;
    }
    return helloFromServer.message;
  };

  if (loading) {
    return <View style={styles.container}>
      <Loading/>
    </View>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Example Screen 1</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Welcome to Example Screen 1.</Text>
      <Text>Click <Button onPress={onClickLink} text="here"/> for Example Screen 2.</Text>
      <Text>Message from provider: {renderMessage()}</Text>
      <Text>Message from server: {renderHelloFromServer()}</Text>
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
