import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import Doctorprofile from "../LandingPages/doctorprofile/Doctorprofile"; // Adjust the import path as needed

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen
        name="Tabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Doctorprofile" component={Doctorprofile} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
