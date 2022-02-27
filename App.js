import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import MainHome from "./app/grades/Main";
import Main from "./app/screens/Main";

export default function App() {
  const [grade, setGrade] = useState(10);
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@user");
      const grade = await AsyncStorage.getItem("@grade");
      if (value != null && grade != null) {
        setData(value);
        setGrade(grade);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    setTimeout(() => getData(), 1000);
  }, [data]);
  return !data ? <Main /> : <MainHome />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
