import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
//GradeHome
import Colors from "../config/Colors";

export default function HomePageGrades() {
  const [grade, setGrade] = useState(10);
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
    getData();
  }, []);
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0.95,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
