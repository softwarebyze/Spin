import { Gyroscope } from "expo-sensors";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function GyroReadings() {
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);
  const precision = 2;
  const imageURI =
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41Gb6fD+5FL._SX425_.jpg";
  const rotationFactor = 100;
  const rotationXString = `${x * rotationFactor} deg`;
  const rotationYString = `${y * rotationFactor} deg`;
  const rotationZString = `${z * rotationFactor} deg`;

  const _slow = () => Gyroscope.setUpdateInterval(1000);
  const _fast = () => Gyroscope.setUpdateInterval(16);

  const _subscribe = () => {
    setSubscription(
      Gyroscope.addListener((gyroscopeData) => {
        setData(gyroscopeData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  return (
    <View>
      <Image
        style={{
          width: 400,
          height: 400,
          transform: [
            { rotateX: rotationXString },
            { rotateY: rotationYString },
            { rotateZ: rotationZString },
          ],
        }}
        source={{
          uri: imageURI,
        }}
      />
      <Text>GyroReadings</Text>
      <Text style={styles.text}>Gyroscope:</Text>
      <Text style={styles.text}>x: {x.toFixed(precision)}</Text>
      <View
        style={{
          display: "flex",
          height: 50,
          width: Math.abs(x) * 100,
          backgroundColor: x > 0 ? "green" : "red",
        }}
      />
      <Text style={styles.text}>y: {y.toFixed(precision)}</Text>
      <View
        style={{
          display: "flex",
          height: 50,
          width: Math.abs(y) * 100,
          backgroundColor: y > 0 ? "green" : "red",
        }}
      />
      <Text style={styles.text}>z: {z.toFixed(precision)}</Text>
      <View
        style={{
          display: "flex",
          height: 50,
          width: Math.abs(z) * 100,
          backgroundColor: z > 0 ? "green" : "red",
        }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={subscription ? _unsubscribe : _subscribe}
          style={styles.button}
        >
          <Text>{subscription ? "On" : "Off"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_slow}
          style={[styles.button, styles.middleButton]}
        >
          <Text>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 15,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#CCCCCC",
  },
  image: {
    width: 400,
    height: 400,
  },
});
