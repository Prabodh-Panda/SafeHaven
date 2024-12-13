import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

interface Props {
  name: string;
}

const Avatar = ({ name }: Props) => {
  const avatarUrl = `https://api.dicebear.com/6.x/thumbs/png?seed=${name}&shapeColor=573582&`;

  return (
    <View style={styles.container}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  text: {
    marginTop: 5,
    fontSize: 20,
  },
});

export default Avatar;
