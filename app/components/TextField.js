import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Colors from "../config/Colors";

function TextField({ data, name, otherStyles, ...other }) {
  let dataDetect = "none";
  let Keyboard = "default";
  let autoCompleteType = "off";
  let password = false;
  data == "mail"
    ? ((dataDetect = "address"),
      (Keyboard = "email-address"),
      (autoCompleteType = "email"))
    : dataDetect == "none",
    (keyboardType = "default");
  data == "password"
    ? ((password = true), (autoCompleteType = "password"))
    : console.log("true");
  data === "grade" ? (Keyboard = "numeric") : console.log("");

  return (
    <View style={[styles.container, otherStyles]}>
      <TextInput
        {...other}
        style={[styles.textIn, { width: "100%" }]}
        autoCompleteType={autoCompleteType}
        autoCorrect={true}
        dataDetectorTypes={dataDetect}
        keyboardAppearance="dark"
        keyboardType={Keyboard}
        placeholder={data}
        placeholderTextColor={Colors.white}
        secureTextEntry={password}
        textAlign="left"
        selectionColor={Colors.primary}
        underlineColorAndroid="#08122905"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "50%",
    borderColor: Colors.secondary,
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  textIn: {
    color: "white",
    paddingLeft: 10,
  },
});

export default TextField;
