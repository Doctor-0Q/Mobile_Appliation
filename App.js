import React, { useState } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Dashboard from "./components/Dashboard/Dashboard";
import Messages from "./components/messages/Messages";
import SettingPage from "./components/settings/SettingPage";
import CustomDrawerContent from "./components/CustomDrawerContent";
import Tasks from "./components/Tasks";
import Patients from "./components/Patients";
import Schedule from "./components/Schedule";
import Analytics from "./components/Analytics";
import Support from "./components/Support";
import SearchBar from "./components/pages/SearchBar";
import Doctorprofile from "./components/LandingPages/doctorprofile/Doctorprofile";
import HomePage from "./components/HomePage/HomePage";
import SignIn from './components/LandingPages/SignIn';
import dashboard from "./assets/dashboard/dashboard.png";
import setting from "./assets/dashboard/setting.png";
import message from "./assets/dashboard/mail.png";
import schedule from "./assets/dashboard/schedule.png";
import task from "./assets/dashboard/task.png";
import patients from "./assets/dashboard/people.png";
import support from "./assets/dashboard/support.png";
import analytic from "./assets/dashboard/analytic.png";
import logut from "./assets/dashboard/logut.png";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Example icon library
import ProfileSettings from "./components/ProfileSettings/ProfileSettings.jsx"

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [user, setUser] = useState(!true);

  return (
    <>
      {user ? (
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
                drawerIcon: () => <Image source={dashboard} style={styles.icon} />,
              }}
            />
            <Drawer.Screen
              name="Schedule"
              component={Schedule}
              options={{
                drawerLabel: "Schedule",
                title: "Schedule",
                headerRight: () => <SearchBar />,
                drawerIcon: () => <Image source={schedule} style={styles.icon} />,
              }}
            />
            <Drawer.Screen
              name="Tasks"
              component={Tasks}
              options={{
                drawerLabel: "Tasks",
                title: "Tasks",
                headerRight: () => <SearchBar />,
                drawerIcon: () => <Image source={task} style={styles.icon} />,
              }}
            />
            <Drawer.Screen
              name="Patients"
              component={Patients}
              options={{
                drawerLabel: "Patients",
                title: "Patients",
                headerRight: () => <SearchBar />,
                drawerIcon: () => <Image source={patients} style={styles.icon} />,
              }}
            />
            <Drawer.Screen
              name="Messages"
              component={Messages}
              options={{
                drawerLabel: "Messages",
                title: "Messages",
                headerRight: () => <SearchBar />,
                drawerIcon: () => <Image source={message} style={styles.icon} />,
              }}
            />
            <Drawer.Screen
              name="Analytics"
              component={Analytics}
              options={{
                drawerLabel: "Analytics",
                title: "Analytics",
                headerRight: () => <SearchBar />,
                drawerIcon: () => <Image source={analytic} style={styles.icon} />,
              }}
            />
            <Drawer.Screen
              name="Settings"
              component={SettingPage}
              options={{
                drawerLabel: "Settings",
                title: "Settings",
                headerRight: () => <SearchBar />,
                drawerIcon: () => <Image source={setting} style={styles.icon} />,
              }}
            />
            <Drawer.Screen
              name="Support"
              component={Support}
              options={{
                drawerLabel: "Support",
                title: "Support",
                headerRight: () => <SearchBar />,
                drawerIcon: () => <Image source={support} style={styles.icon} />,
              }}
            />
            <Drawer.Screen
              name="Logut"
              component={Support}
              options={{
                drawerLabel: "Logut",
                title: "Logut",
                headerRight: () => <SearchBar />,
                drawerIcon: () => <Image source={logut} style={styles.icon} />,
              }}
            />
          </Drawer.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Search') {
                  iconName = focused ? 'search' : 'search-outline';
                } else if (route.name === 'Notifications') {
                  iconName = focused ? 'notifications' : 'notifications-outline';
                } else if (route.name === 'Profile') {
                  iconName = focused ? 'person' : 'person-outline';
                } else if (route.name === 'location') {
                  iconName = focused ? 'location' : 'location-outline';
                }

                return (
                  <View style={focused ? styles.focusedIconContainer : null}>
                    <Icon name={iconName} size={size} color={color} />
                  </View>
                );
              },
              tabBarActiveTintColor: 'teal',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: {
                height: 70,
                paddingVertical: 10,
                borderTopWidth: 1,
                borderTopColor: 'lightgray',
              },
              tabBarIconStyle: {
                marginTop: 5,
              },
            })}
          >
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Search" component={SettingPage} />
            <Tab.Screen name="location" component={HomePage} />
            <Tab.Screen name="Notifications" component={Support} />
            <Tab.Screen name="Profile" component={ProfileSettings} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  focusedIconContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 30,
    padding: 10,
  },
  icon: {
    height: 24,
    width: 24,
  },
});

export default App;
