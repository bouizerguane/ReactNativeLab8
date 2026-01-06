import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          source={require("../img/logo.png")} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>EduFlow</Text>
      </View>
      <Text style={styles.subtitle}>La gestion scolaire, simlement intélligente</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EDEFEE" },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#EE9972",
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 12, 
    marginRight: 12,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
  },
  headerText: { fontSize: 24, fontWeight: "bold", color: "black" },
  subtitle: { padding: 16, fontSize: 18, color: "black", textAlign: "center" },
});