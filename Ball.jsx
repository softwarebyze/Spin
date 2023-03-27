import React from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

export default function Ball(props) {
  const rotation = new Animated.Value(0);
  const x = 0,
    y = 4,
    z = 0;
  function setRotation(x, y, z) {
    rotation.setValue(x + y + z);
  }
    setRotation(x, y, z)
  //   gyroscope.addListener(Animated.event([{ x, y, z }], setRotation));
  //   gyroscope.start()
  return (
    <View>
      <Text>Ball</Text>
      <Animated.View
        style={[
          styles.tennisBall,
          {
            transform: [
              {
                rotate: rotation.interpolate({
                  inputRange: [0, 360],
                  outputRange: ["0deg", "360deg"],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
      >
        <Image
          source={require("./assets/tennisball.webp")}
          style={styles.image}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
