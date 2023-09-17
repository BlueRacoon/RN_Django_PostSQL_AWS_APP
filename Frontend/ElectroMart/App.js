import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { Navigation } from "./src/navigators";

export default function App() {
  return (
    <>
      <Navigation>
        <StatusBar style="auto" />
      </Navigation>
    </>
  );
}
