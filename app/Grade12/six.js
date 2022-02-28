import { ScrollView } from "react-native";
import YT from "../components/YtVideo";
import Colors from "../config/Colors";
import data from "./data";
export default function Vivresain() {
  const items = data().six;
  return (
    <ScrollView style={{ backgroundColor: Colors.primary }}>
      {Object.keys(items).map(function (key, index) {
        return <YT info={key} Vid_Id={items[key]} key={index} />;
      })}
    </ScrollView>
  );
}
