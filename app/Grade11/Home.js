import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import AppBtn from "../components/AppButton";
import CustomText from "../components/CustomText";
import Colors from "../config/Colors";

export default function GradeHome() {
  const [grade, setGrade] = useState(10);
  const navigation = useNavigation();
  const getData = async () => {
    try {
      const grade = await AsyncStorage.getItem("@grade");
      if (grade != null) {
        setGrade(grade);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    setTimeout(() => getData(), 1000);
  }, [grade]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
      <View style={styles.mainContainer}>
        <CustomText text={`${grade} e année`} style="bold medium" />
        <AppBtn
          text={"matériaux"}
          style={{ marginBottom: 10, marginTop: 10 }}
          onPress={() => navigation.navigate("Materials")}
        />
        <AppBtn
          text={"explication"}
          onPress={() => navigation.navigate("Units")}
        />
      </View>
      <View
        style={{
          marginLeft: 10,
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: "3%",
          justifyContent: "space-between",
        }}
      >
        <CustomText
          text={"développé par : \nTawfiq Bhyry\nYousef Fathy"}
          color={Colors.secondary}
          style="bold medium"
        />
        <AppBtn
          text={"Log Out"}
          style={{ width: "40%" }}
          onPress={() => navigation.navigate("LogOut")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
