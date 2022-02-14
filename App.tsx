import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/home";
import Login from "./src/screens/Login";
import AuthNavigator from "./src/navigators/AuthNavigator";
import UserContextProvider from "./src/context/user/UserContext";
import ContentContextProvider from "./src/context/content/ContentContext";

export default function App() {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <ContentContextProvider>
          <AuthNavigator />
        </ContentContextProvider>
      </UserContextProvider>
    </NavigationContainer>
  );
}
