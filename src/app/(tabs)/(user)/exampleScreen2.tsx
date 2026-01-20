import ButtonOpacity from '@/components/ButtonOpacity';
import { Text, View, } from '@/components/Themed';
import { Link, useNavigation } from 'expo-router';
import { useEffect, useState, } from 'react';
import { StyleSheet, TextInput, } from 'react-native';

export default function TabOneScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [finalName, setFinalName] = useState("");

  useEffect(() => {
    return navigation.addListener(
      "blur",
      () => {
        setName("");
        setFinalName("");
      }
    )
  }, []);

  const handleFormSubmit = () => {
    setFinalName(name);
  };

  const handleNameChange = (text: string) => {
    setName(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Example Screen 2</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.text}>Welcome to Example Screen 2.</Text>
        <Text style={styles.text}>
          Click
          <Link href="/exampleScreen" asChild>
            <ButtonOpacity text="here" />
          </Link>
          for Example Screen 1.
        </Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.text}>Enter your name:</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            placeholder="Your Name"
            keyboardType='default'
            value={name}
            onChangeText={handleNameChange}
          />
          <ButtonOpacity
            style={styles.submitButton}
            onPress={handleFormSubmit}
            text="Submit"
            special
          />
        </View>
        {finalName && (<Text
          style={[styles.text, styles.finalText]}
        >
          Hello, {finalName}!
        </Text>)}
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
    alignItems: "flex-start",
    width: "90%",
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
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  form: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    marginTop: 20,
  },
  finalText: {
    marginTop: 20,
    fontWeight: 'bold',
  },
});
