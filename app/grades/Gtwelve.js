import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import GradeHome from "../Grade12/Home";

export default function Gt() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={GradeHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Units"
          component={GradeHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="unit1"
          component={GradeHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="unit2"
          component={GradeHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="unit3"
          component={GradeHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="unit4"
          component={GradeHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VideosUnits"
          component={GradeHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="unit1V"
          component={GradeHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="unit2V"
          component={GradeHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="unit3V"
          component={GradeHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="unit4V"
          component={GradeHome}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});

//<YT Vid_Id={"84WIaK3bl_s"} />
