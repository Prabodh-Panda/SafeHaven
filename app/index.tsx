import { Link, useNavigation } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type Contact = {
  id: string;
  name: string;
  image?: string | null;
  initials?: string | null;
};

const App = () => {
  const navigation = useNavigation();

  const contacts: Contact[] = [
    { id: "1", name: "Kevin", image: "https://via.placeholder.com/50" },
    { id: "2", name: "Amber", image: "https://via.placeholder.com/50" },
    { id: "3", name: "Rasheed & Josh", image: null, initials: "RJ" },
    { id: "4", name: "Jacob", image: "https://via.placeholder.com/50" },
  ];

  const renderContact: ListRenderItem<Contact> = ({ item }) => (
    <View style={styles.contact}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.contactImage} />
      ) : (
        <View style={styles.initialsCircle}>
          <Text style={styles.initials}>{item.initials}</Text>
        </View>
      )}
      <Text style={styles.contactName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi, Jane</Text>

      <View style={{ alignItems: "flex-start" }}>
        <FlatList
          data={contacts}
          horizontal
          renderItem={renderContact}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.contactsList}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.sosContainer}>
        <View style={styles.sosButton}>
          <Text style={styles.sosText}>SOS</Text>
        </View>
        <Text style={styles.sosInfo}>Your SOS will be sent to 4 people</Text>
      </View>

      <Link href="/map" style={styles.launchMapButton}>
        <Text style={styles.launchMapText}>View nearby risky areas</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  contactsList: {
    paddingVertical: 10,
    flexGrow: 0,
  },
  contact: {
    alignItems: "center",
    marginRight: 15,
  },
  contactImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  initialsCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
  },
  initials: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  contactName: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
  },
  sosContainer: {
    alignItems: "center",
    marginVertical: "auto",
  },
  sosButton: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  sosText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  sosInfo: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
  },
  launchMapButton: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
  },
  launchMapText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default App;
