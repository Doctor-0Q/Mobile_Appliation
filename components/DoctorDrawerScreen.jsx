import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Dashboard from './Dashboard/Dashboard';
import ShareProfile from './ShareProfile';
import Schedule from './Schedule';
import Tasks from './Tasks';
import Patients from './Patients/patients';
import Messages from './messages/Messages';
import Analytics from './Analytics';
import SettingPage from './settings/SettingPage';
import Support from './Support';
import dashboard from "../assets/dashboard/dashboard.png";
import share from "../assets/dashboard/share.png";
import setting from "../assets/dashboard/setting.png";
import message from "../assets/dashboard/mail.png";
import schedule from "../assets/dashboard/schedule.png";
import task from "../assets/dashboard/task.png";
import patients from "../assets/dashboard/people.png";
import support from "../assets/dashboard/support.png";
import analytic from "../assets/dashboard/analytic.png";
import logut from "../assets/dashboard/logut.png";
import CustomDrawerContent from './CustomDrawerContent';
import SearchBar from './pages/SearchBar';
import Logout from './Logout';


const Drawer = createDrawerNavigator();

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
  
function DoctorDrawerScreen() {
    return (
        <>
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
                        name="Share Profile"
                        component={ShareProfile}
                        options={{
                            drawerLabel: "Share Profile",
                            title: "Share Profile",
                            headerRight: () => <SearchBar />,
                            drawerIcon: () => <Image source={share} style={styles.icon} />,
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
                        name="Logout"
                        component={Logout}
                        options={{
                            drawerLabel: "Logout",
                            title: "Logout",
                            headerRight: () => <SearchBar />,
                            drawerIcon: () => <Image source={logut} style={styles.icon} />,
                        }}
                    />
                </Drawer.Navigator>
                <StatusBar style="auto" />
            </NavigationContainer>
        </>
    )
}

export default DoctorDrawerScreen