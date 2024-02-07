import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";

// Import useNavigation

const Scan = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          {/* <QRCode value="http://awesome.link.qr" /> */}
          <QRCode value="YourGeneratedStringHere" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
    padding: 10,
  },

  header: {
    marginBottom: 20,
  },

  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#325ca8",
  },

  btn: {
    backgroundColor: "#325ca8",
    borderRadius: 5,
    padding: 20,
    width: 200,
    alignItems: "center",
    margin: 20,
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
