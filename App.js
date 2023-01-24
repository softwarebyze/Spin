import React from "react";
import { StyleSheet, View } from "react-native";
import GyroReadings from "./GyroReadings";

export default function App() {
  return (
    <View style={styles.container}>
      <GyroReadings />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
