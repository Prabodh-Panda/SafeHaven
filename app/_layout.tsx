import Navbar from "@/components/navbar";
import { AuthProvider } from "@/context/auth";
import { Stack } from "expo-router";
import { View, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={false}
      />
      <AuthProvider>
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
      </AuthProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
