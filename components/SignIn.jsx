import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Pressable,
  FlatList,
} from "react-native";
import img from "../assets/images/signinbg.png";
import { SafeAreaView } from "react-native-safe-area-context";
import API_URL from "../config";
import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";
import { clientAuth } from "../utils/firebase";
import { Toast } from "toastify-react-native";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { handleLogout } from "./Logout";
import googleSignIn from "./signInOptions/googleSignIn";
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("");
  const [isSignupPage, setSignupPage] = useState(!true);
  const [registerButtonDisable, setRegisterButtonDisable] = useState(false);
  const [loginButtonDisable, setLoginButtonDisable] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const options = [
    { label: 'Doctor', value: 'doctor' },
    { label: 'User', value: 'user' },
  ];

  const handleSelect = (value) => {
    setUserType(value);
    setDropdownVisible(false);
  };

  useEffect(() => {
    if (userType) {
      console.log(userType);
    }
  }, [userType]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSignUpPagePress = () => {
    setSignupPage(!isSignupPage);
  };

  const handleSignUpPress = async (e) => {
    e.preventDefault();
    setRegisterButtonDisable(true);
    if (!email || !password || !userType) {
      Toast.warn("Fill all fields");
      setRegisterButtonDisable(false);
      return;
    }
    const data = {
      email: email,
      password: password,
      user: userType,
    }
    try {
      const response = await fetch(`${API_URL}/api/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      setRegisterButtonDisable(false);
      if (response.status !== 201) {
        Toast.error(responseData);
        return;
      }
      try {
        const user = (await signInWithEmailAndPassword(clientAuth, email, password)).user;
        const token = await user.getIdToken();
        await AsyncStorage.setItem("doc-qToken", token);
        navigation.navigate("Home");
      }
      catch (e) {
        console.log(e);
      }
    } catch (error) {
      console.log(error);
      Toast.error("Server unavailable, Please try again!!");
    }
    setRegisterButtonDisable(false);
  };

  const handleSignInPress = async (e) => {
    e.preventDefault();
    setLoginButtonDisable(true);
    if (!email || !password) {
      Toast.warn("Enter all fields!");
      setLoginButtonDisable(false);
      return;
    }
    console.log(email, password);
    try {
      const user = (await signInWithEmailAndPassword(clientAuth, email, password)).user;
      const token = await user.getIdToken();
      const res = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ custToken: token })
      });
      const data = await res.json();
      if (!res.ok) {
        Toast.warn(data);
        await handleLogout();
        return;
      }
      console.log(data);
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem("doc-qToken", jsonValue, async (error) => {
        if (error) {
          await handleLogout();
          console.error('Failed to save the data to the storage', error);
        } else {
          console.log('Data successfully stored');
        }
      });
      Toast.success(`Welcome ${user.displayName}`);
    }
    catch (e) {
      const errorCode = e.code;
      setLoginButtonDisable(false);
      if (errorCode === 'auth/invalid-email' || errorCode === 'auth/missing-email')
        Toast.error("Invalid email address");
      else if (errorCode === 'auth/wrong-password' || errorCode === 'auth/invalid-credential')
        Toast.error("Invalid credentials");
      else if (errorCode === 'auth/user-not-found')
        Toast.error("User not found");
      else if (errorCode.includes('auth/requests-from-referer'))
        Toast.error("Unauthorized access");
      else if (errorCode === 'auth/requests-from-this-android-client-application-<empty>-are-blocked.')
        Toast.error("Unauthorized access");
      else
        Toast.error("An error occurred while logging in");
    }
  }

  return (
    <ScrollView className="bg-white flex-1">
      <SafeAreaView>
        <View className="bg-green-900 h-auto   items-center w-auto justify-center">
          <Image source={img} className="w-[80%] mt-12 h-48 mb-5" />
        </View>
        <View className="p-8  bg-white rounded-t-3xl">
          {isSignupPage && (
            <>
              <TextInput
                className="border-gray-300 border rounded-lg p-4 mb-4"
                placeholder="Full name *"
                value={fullName}
                onChangeText={(text) => setFullName(text)}
              />
              {/*  */}
              <View>
                <Pressable
                  className="border border-gray-300 rounded-lg p-4 mb-4 "
                  onPress={() => setDropdownVisible(!dropdownVisible)}
                >
                  <View className="flex-row justify-between items-center">
                    <Text className="text-base">
                      {userType ? ` ${userType.charAt(0).toUpperCase() + userType.slice(1)}` : 'Select User Type'}
                    </Text>
                    {/* Down arrow icon */}
                    <Icon name={dropdownVisible ? 'arrow-drop-up' : 'arrow-drop-down'} size={24} color="gray" />
                  </View>
                  {dropdownVisible && (
                    <View className="border-gray-300 rounded-lg p-2">
                      {options.map((item) => (
                        <Pressable
                          key={item.value}
                          className="p-2 border-b"
                          onPress={() => handleSelect(item.value)}
                        >
                          <Text className="text-base">{item.label}</Text>
                        </Pressable>
                      ))}
                    </View>
                  )}
                </Pressable>
              </View>
              {/* Change this to dropdown to select patient or doctor */}
            </>
          )}

          <TextInput
            className="border-gray-300 border rounded-lg p-4 mb-4"
            placeholder="Email *"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          <View className="relative">
            <TextInput
              className="border-gray-300 border rounded-lg p-4 mb-4"
              placeholder="Password *"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              className="absolute w-12 h-12 right-1 top-2 p-3"
              
            >
              <Text>{showPassword ? "🙈" : "👁️"}</Text>
            </TouchableOpacity>
          </View>
          {isSignupPage ?
            <TouchableOpacity className="bg-green-500 p-4 rounded-lg items-center mb-4" disabled={registerButtonDisable} onPress={handleSignUpPress}>
              {
                registerButtonDisable ?
                  <ActivityIndicator size={20} color="#ffffff" />
                  :
                  <Text className="text-white font-bold">Sign Up</Text>}
            </TouchableOpacity>
            :
            <TouchableOpacity className="bg-green-500 p-4 rounded-lg items-center mb-4" disabled={loginButtonDisable} onPress={handleSignInPress}>
              {
                loginButtonDisable ?
                  <ActivityIndicator size={20} color="#ffffff" />
                  :
                  <Text className="text-white font-bold">Log In</Text>}
            </TouchableOpacity>
          }
          {/* <View className="flex-row justify-center items-center mb-4">
            <Text>or</Text>
          </View>
          <View className="flex-row justify-center space-x-4 mb-4">
            <TouchableOpacity className="p-2 border rounded-full" onPress={googleSignIn}>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/google-logo.png",
                }}
                className="w-10 h-10"
              />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 border rounded-full">
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-filled/50/000000/mac-os.png",
                }}
                className="w-10 h-10"
              />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 border rounded-full">
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/facebook-new.png",
                }}
                className="w-10 h-10"
              />
            </TouchableOpacity>
          </View> */}

          <TouchableOpacity className="flex-row justify-center">
            <Text>
              {isSignupPage
                ? "Already have an account?"
                : "Don’t have an account?"}{" "}
            </Text>
            <Text className="text-blue-500" onPress={handleSignUpPagePress}>
              {isSignupPage ? "Log in" : "Sign up"}{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUpScreen;
