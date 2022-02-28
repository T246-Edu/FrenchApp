import React, { useState } from "react";
import Airtable from "airtable";
import { StyleSheet, View } from "react-native";
import AppBtn from "../components/AppButton";
import CustomText from "../components/CustomText";
import AppScreen from "../components/AppScreen";
import TextField from "../components/TextField";
import Colors from "../config/Colors";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login() {
  const [messege, setmessege] = useState("Login!");
  const [mail, setMail] = useState("");
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  function login(mail, password) {
    if (mail == "" || password == "") {
      setmessege("Email and Password cannot be empty");
    } else {
      const base = new Airtable({ apiKey: "keygrEQRcmrlb0BxL" }).base(
        "appHtBfPVkbl5eWGK"
      );
      base("users")
        .select({
          view: "Grid view",
          filterByFormula: `AND(OR(SEARCH('${mail}',{Email})))`,
        })
        .eachPage((records, fetch) => {
          if (records.length == 0) {
            setmessege("User Doesn't exist");
          } else {
            records.map(async (user) => {
              if (user.fields.Password == password) {
                await AsyncStorage.setItem("@grade", user.fields.Grade);
                await AsyncStorage.setItem("@user", "userData");
                setmessege("Success. Restart the app");
              } else if (user.fields.Password != password) {
                setmessege("Failed. wrong pass");
              }
              fetch();
            });
          }
        });
    }
  }
  return (
    <AppScreen style={{ alignItems: "center", justifyContent: "center" }}>
      <CustomText
        text={"Welcome"}
        style="bold head"
        otherStyle={{ marginTop: 100 }}
      />
      <View style={styles.hairline} />
      <TextField
        data="mail"
        style={{ marginTop: 85 }}
        onChangeText={(text) => setMail(text)}
      />
      <TextField data="password" onChangeText={(text) => setPassword(text)} />
      <AppBtn
        text={"Login"}
        style={{ marginTop: 130, marginBottom: 20 }}
        onPress={() => login(mail, password)}
      />
      <AppBtn
        text={"sign up?"}
        style={{ backgroundColor: Colors.primary }}
        onPress={() => navigation.navigate("Sign Up")}
      ></AppBtn>
      <CustomText
        text={messege}
        otherStyle={{ marginTop: 10, marginBottom: 10 }}
        style="medium"
      />
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {},
  hairline: {
    backgroundColor: Colors.secondary,
    marginTop: 10,
    height: 2,
    width: "40%",
    marginBottom: 70,
  },
});

export default Login;
