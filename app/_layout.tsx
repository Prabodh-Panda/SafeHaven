import Navbar from "@/components/navbar";
import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="map"
          options={{ title: "Map", headerShown: false }}
        />
        <Stack.Screen
          name="reports"
          options={{ title: "Reports", headerShown: false }}
        />
        <Stack.Screen
          name="profile"
          options={{ title: "Profile", headerShown: false }}
        />
      </Stack>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
