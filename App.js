import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./components/HomePage/HomePage";
import SignIn from './components/SignIn.jsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileSettings from "./components/ProfileSettings/ProfileSettings.jsx"
import Search from "./components/searchpage/Search.jsx"
import logo from "./components/Logopage.jsx"
import onboarding from "./components/Onboardingpage.jsx"
import Notifications from "./components/Notificationspage/NotificationScreen.jsx"
import DoctorDrawerScreen from "./components/DoctorDrawerScreen.jsx";
import { clientAuth } from "./utils/firebase.js";
import ToastManager from "toastify-react-native";
import EmailVerification from "./components/EmailVerification.jsx";
import Logout from "./components/Logout.jsx";
import SettingPage from "./components/settings/SettingPage.jsx";
import Doctorprofile from "./components/LandingPages/doctorprofile/Doctorprofile.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInWithCustomToken } from "firebase/auth";
import Loading from "./components/Loading.jsx";
import DoctorDetails from "./components/Details/DoctorDetails";
import PatientDetails from "./components/Details/PatientDetails";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [isDoctor, setIsDoctor] = useState(!true);
  const [user, setUser] = useState(!true);
  const [userInfo, setUserInfo] = useState(null);
  const [emailVerified, setEmailVerified] = useState(true);
  const [loading, setLoading] = useState(true);

  const getToken = async () => {
    
    const token = await AsyncStorage.getItem("doc-qToken");
    if (token) {
      try {
        await signInWithCustomToken(clientAuth, JSON.parse(token));
      }
      catch (err) { }
    }

    clientAuth.onAuthStateChanged(async (user) => {
      setLoading(true);
      if (user) {
        const claims = (await user.getIdTokenResult()).claims;
        console.log(claims);
        setEmailVerified(claims?.email_verified);
        setUserInfo(claims?.info);
        if (claims.role === 'doctor')
          setIsDoctor(true);
        else
          setIsDoctor(false);
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setIsDoctor(false);
        setLoading(false);
      }
    });

    clientAuth.onIdTokenChanged(async (user) => {
      setLoading(true);
      if (user) {
        const claims = (await user.getIdTokenResult()).claims;
        setEmailVerified(claims?.email_verified);
        setUserInfo(claims?.info);
        if (claims.role === 'doctor')
          setIsDoctor(true);
        else
          setIsDoctor(false);
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setIsDoctor(false);
        setLoading(false);
      }
    });
  }

  useEffect(() => {
    getToken();
  }, []);

  if (loading)
    return <Loading />

  return (
    <>
      {
        (user && !emailVerified) ?
          <>
            <NavigationContainer>
              <Tab.Navigator>
                <Tab.Screen name="EmailVerification" component={EmailVerification} />
                <Tab.Screen name="LogOut" component={Logout} />
              </Tab.Navigator>
            </NavigationContainer>
          </>
          :
          <>
            {(user && emailVerified && !userInfo) ?
              <>
                <NavigationContainer>
                  <Tab.Navigator>
                    {isDoctor && <Tab.Screen name="DoctorDetails" component={DoctorDetails} />} 
                    {!isDoctor && <Tab.Screen name="PatientDetails" component={PatientDetails} />}                   
                    <Tab.Screen name="LogOut" component={Logout} />
                  </Tab.Navigator>
                </NavigationContainer>
              </>
              :
              <>
                {
                  (user && isDoctor) ?
                    <DoctorDrawerScreen />
                    :
                    <>
                      {
                        (!user || (user && !isDoctor)) && (
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
                                  } else if (route.name === 'Profile' || route.name === 'Sign In') {
                                    iconName = focused ? 'person' : 'person-outline';
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
                              <Tab.Screen name="Search" component={Search} />
                              <Tab.Screen name="Notifications" component={onboarding} />
                              <Tab.Screen name="Doctorprofile" component={Doctorprofile}
                              />
                              {user ?
                                <Tab.Screen name="Profile" component={ProfileSettings} />
                                :
                                <Tab.Screen name="Sign In" component={SignIn} />
                              }
                            </Tab.Navigator>
                          </NavigationContainer>
                        )
                      }
                    </>
                }
              </>
            }
          </>
      }
      <ToastManager />
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
