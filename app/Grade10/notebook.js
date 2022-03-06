import React from "react";
import { View, StyleSheet } from "react-native";
import WebView from "react-native-webview";

const PdfReader = ({ url: uri }) => (
  <WebView style={{ flex: 1 }} source={{ uri }} />
);
export default function Reader() {
  return (
    <View style={styles.container}>
      <PdfReader url="https://drive.google.com/file/d/1HAm4IDMIYRemUr2kCWGLOilqu3-Gw3Eb/view?usp=sharing" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#ecf0f1",
  },
});
