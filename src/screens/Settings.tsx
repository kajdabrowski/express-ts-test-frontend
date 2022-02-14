import { View, Text, Button, StyleSheet } from "react-native";
import { useContext } from "react";
import { UserContext } from "../context/user/UserContext";

const Settings: React.FC = () => {
  const { logout } = useContext(UserContext)!;
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <View style={styles.button}>
        <Button color={"white"} title="Logga ut" onPress={logout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
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

export default Settings;
