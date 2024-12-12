import { Link } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Link href="/">
        <View style={styles.iconTextContainer}>
          <FontAwesome name="home" size={20} />
          <Text style={styles.text}>Home</Text>
        </View>
      </Link>

      <View style={styles.iconTextContainer}>
        <FontAwesome name="map" size={20} />
        <Text style={styles.text}>Map</Text>
      </View>

      <View style={styles.iconTextContainer}>
        <FontAwesome name="exclamation-circle" size={20} />
        <Text style={styles.text}>Reports</Text>
      </View>
      <View style={styles.iconTextContainer}>
        <FontAwesome name="user" size={20} />
        <Text style={styles.text}>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 10,
    gap: 15,
  },
  iconTextContainer: {
    flexDirection: "column", // Stack icon and text vertically
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
  text: {
    marginTop: 2,
    fontSize: 12,
  },
});
export default Navbar;
