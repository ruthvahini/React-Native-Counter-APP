import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment +" onPress={() => setCount(count + 1)} />
        <Button title="Decrement -" onPress={() => setCount(count - 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  countText: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});