import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import CustomText from "../components/CustomText";
import Colors from "../config/Colors";
async function removeItemValue(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
}
export default function SignOut() {
  useEffect(() => {
    setTimeout(() => removeItemValue("@user"), 1000);
  });
  return (
    <View style={styles.main}>
      <CustomText
        text={"successfully Logged out, restart the app"}
        style={"bold medium"}
        color={Colors.secondary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
