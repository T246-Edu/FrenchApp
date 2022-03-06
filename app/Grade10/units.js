import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import AppBtn from "../components/AppButton";
import Colors from "../config/Colors";

export default function Units() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AppBtn
        style={styles.btn}
        text="Bienvenue au lycée"
        onPress={() => navigation.navigate("unit1")}
      />
      <AppBtn
        style={styles.btn}
        text="Ma journée et mes activités"
        onPress={() => navigation.navigate("unit2")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    marginBottom: "5%",
    width: "60%",
  },
});
