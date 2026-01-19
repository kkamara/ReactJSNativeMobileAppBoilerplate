import Button from '@/components/Button';
import Loading from '@/components/Loading';
import { Text, View, } from '@/components/Themed';
import { useRouter, } from 'expo-router';
import { useEffect, useState, } from 'react';
import { StyleSheet, } from 'react-native';

import { useHelloFromServer, } from '@/providers/HelloFromServerProvider';
import { useMessage, } from '@/providers/MessageProvider';

export default function TabOneScreen() {
  const router = useRouter();
  const { helloWorld, } = useMessage();
  const {
    helloFromServer,
    loading,
    getHelloFromServer,
  } = useHelloFromServer();
  const [error, setError] = useState("");
  const [helloMessage, setHelloMessage] = useState("");

  const loadData = async () => {
    getHelloFromServer();
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (helloFromServer && isCustomErrorResponse(helloFromServer)) {
      setError(helloFromServer?.error || "An error occurred.");
    } else {
      setHelloMessage(helloFromServer?.message || "");
    }
  }, [helloFromServer]);

  const renderHelloFromServer = () => {
    if (helloFromServer && true === isCustomErrorResponse(helloFromServer)) {
      return null;
    }
    return helloFromServer.message;
  };

  const onClickLink = () => {
    router.navigate("/exampleScreen2");
  };

  const renderMessage = () => {
    return helloWorld();
  };

  if (loading) {
    return <View style={styles.container}>
      <Loading/>
    </View>
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Example Screen 1</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        {error && <Text style={[styles.text, styles.errorText]}>{error}</Text>}
        <Text style={styles.text}>Welcome to Example Screen 1.</Text>
        <Text style={styles.text}>Click <Button onPress={onClickLink} text="here"/> for Example Screen 2.</Text>
        <Text style={styles.text}>Message from provider: {renderMessage()}</Text>
        <Text
          style={[styles.text, styles.serverMessage]}
        >
          Message from server: {renderHelloFromServer()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  innerContainer: {
    alignItems: "flex-start"
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
  serverMessage: {
    width: 300,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
