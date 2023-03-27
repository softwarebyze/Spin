import React from "react";
import { StyleSheet, View } from "react-native";
import Ball from "./Ball";
import GyroReadings from "./GyroReadings";

export default function App() {
  return (
    <View style={styles.container}>
      <GyroReadings />
      <Ball />
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
