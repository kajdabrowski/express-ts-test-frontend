import { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { UserContext } from "../context/user/UserContext";

const Login: React.FC = () => {
  const { login } = useContext(UserContext)!;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(email, password);
    console.log("In handleLogin");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={email}
        placeholder="E-mail"
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.textInput}
        value={password}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        // secureTextEntry
      />
      <View style={styles.button}>
        <Button color={"white"} title="Log in" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "peachpuff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "white",
    width: "80%",
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: "center",
    padding: 10,
    backgroundColor: "blue",
  },
});

export default Login;
