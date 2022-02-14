import { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ContentContext } from "../context/content/ContentContext";
import { UserContext } from "../context/user/UserContext";

const Home: React.FC = () => {
  const { logout } = useContext(UserContext)!;
  const { articles } = useContext(ContentContext)!;
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      {articles.map((article) => (
        <Text>{article.fields.headline}</Text>
      ))}
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
});

export default Home;
