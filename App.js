import React, { useState } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Dashboard from "./components/Dashboard/Dashboard";
import Messages from "./components/messages/Messages";
import SettingPage from "./components/settings/SettingPage";
import dashboard from "./assets/dashboard/dashboard.png";
import CustomDrawerContent from "./components/CustomDrawerContent";
import setting from "./assets/dashboard/setting.png";
import message from "./assets/dashboard/mail.png";
import schedule from "./assets/dashboard/schedule.png";
import task from "./assets/dashboard/task.png";
import patients from "./assets/dashboard/people.png";
import support from "./assets/dashboard/support.png";
import analytic from "./assets/dashboard/analytic.png";
import logut from "./assets/dashboard/logut.png";
import Tasks from "./components/Tasks";
import Patients from "./components/Patients";
import Schedule from "./components/Schedule";
import Analytics from "./components/Analytics";
import Support from "./components/Support";
import SearchBar from "./components/pages/SearchBar";
import Doctorprofile from "./components/LandingPages/doctorprofile/Doctorprofile";
import HomePage from "./components/HomePage/HomePage";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(!true);

  return (
    <>
      {user && (
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
          >
            <Drawer.Screen
              name="dashboard"
              component={Dashboard}
              options={{
                drawerLabel: "Dashboard",
                title: "Dashboard",
                headerRight: () => <SearchBar />,
                drawerIcon: () => <Image source={dashboard} className="h-6 w-6" />,
              }}
            />
            <Drawer.Screen
              name="Schedule"
              component={Schedule}
              options={{
                drawerLabel: "Schedule",
                title: "Schedule",
                headerRight: () => <SearchBar />,
                drawerIcon: () => <Image source={schedule} className="h-6 w-6" />,
              }}
            />
            <Drawer.Screen
              name="Tasks"
              component={Tasks}
              options={{
                drawerLabel: "Tasks",
                title: "Tasks",
                headerRight: () => <SearchBar />,
                drawerIcon: () => <Image source={task} className="h-6 w-6" />,
              }}
            />
            <Drawer.Screen
              name="Patients"
              component={Patients}
              options={{
                drawerLabel: "Patients",
                title: "Patients",
                headerRight: () => <SearchBar />,
                drawerIcon: () => <Image source={patients} className="h-6 w-6" />,
              }}
            />
            <Drawer.Screen
              name="Messages"
              component={Messages}
              options={{
                drawerLabel: "Messages",
                title: "Messages",
                headerRight: () => <SearchBar />,
                drawerIcon: () => <Image source={message} className="h-6 w-6" />,
              }}
            />
            <Drawer.Screen
              name="Analytics"
              component={Analytics}
              options={{
                drawerLabel: "Analytics",
                title: "Analytics",
                headerRight: () => <SearchBar />,
                drawerIcon: () => <Image source={analytic} className="h-6 w-6" />,
              }}
            />
            <Drawer.Screen
              name="Settings"
              component={SettingPage}
              options={{
                drawerLabel: "Settings",
                title: "Settings",
                headerRight: () => <SearchBar />,
                drawerIcon: () => <Image source={setting} className="h-6 w-6" />,
              }}
            />
            <Drawer.Screen
              name="Support"
              component={Support}
              options={{
                drawerLabel: "Support",
                title: "Support",
                headerRight: () => <SearchBar />,
                drawerIcon: () => <Image source={support} className="h-6 w-6" />,
              }}
            />
            <Drawer.Screen
              name="Logut"
              component={Support}
              options={{
                drawerLabel: "Logut",
                title: "Logut",
                headerRight: () => <SearchBar />,
                drawerIcon: () => <Image source={logut} className="h-6 w-6" />,
              }}
            />
          </Drawer.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      )}
      {!user && (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="DoctorProfilePage" component={Doctorprofile} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
