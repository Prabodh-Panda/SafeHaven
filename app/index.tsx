import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import MapView, { Heatmap, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { FontAwesome } from "@expo/vector-icons";
import { supabase } from "@/lib/supabase";

interface Location {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface RiskyArea {
  latitude: number;
  longitude: number;
  risk_level: number;
}

const App = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [heatmapPoints, setHeatmapPoints] = useState([
    { latitude: 20.272833203107567, longitude: 85.7683806167329, weight: 5 },
  ]);

  useEffect(() => {
    (async () => {
      const latitude = location?.latitude;
      const longitude = location?.longitude;
      if (!latitude || !longitude) return;

      const { data, error } = await supabase.rpc("find_areas_within_distance", {
        lat_input: latitude,
        lon_input: longitude,
        max_distance_km: 5, // Search radius in kilometers
      });

      if (error) {
        setErrorMsg("Error fetching areas: " + error.message);
        return null;
      }

      const result = data.map((item: RiskyArea) => ({
        latitude: item.latitude,
        longitude: item.longitude,
        weight: item.risk_level,
      }));

      setHeatmapPoints(result);
    })();
  }, [location]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      });
    })();
  }, []);

  if (!location) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg ? errorMsg : "Loading..."}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={false}
      />
      <View style={styles.header}>
        <FontAwesome name="arrow-left" size={20} />
        <Text style={styles.headerText}>Location</Text>
      </View>
      <MapView
        style={styles.map}
        initialRegion={location}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="You are here"
        />
        <Heatmap
          points={heatmapPoints}
          opacity={0.7}
          radius={40}
          gradient={{
            colors: ["#FFA500", "#FF4500", "#FF0000"], // Gradient: Orange to Red
            startPoints: [0.2, 0.5, 1.0], // Adjust transitions
            colorMapSize: 256, // Gradient resolution
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    position: "absolute",
    top: 30,
    left: 30,
    zIndex: 9999,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "semibold",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
