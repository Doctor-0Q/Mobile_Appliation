import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { styled } from "nativewind";
import img from "../../assets/images/signinbg.png";
import { SafeAreaView } from "react-native-safe-area-context";
const SignUpScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSignInPress = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <ScrollView className="bg-white flex-1">
      <SafeAreaView>
        <View className="bg-green-900 h-auto   items-center w-auto justify-center">
          <Image source={img} className="w-[80%] mt-12 h-48 mb-5" />
        </View>
        <View className="p-8  bg-white rounded-t-3xl">
          {isSignedIn && (
            <TextInput
              className="border-gray-300 border rounded-lg p-4 mb-4"
              placeholder="Full name *"
              value={fullName}
              onChangeText={setFullName}
            />
          )}

          <TextInput
            className="border-gray-300 border rounded-lg p-4 mb-4"
            placeholder="Email *"
            value={email}
            onChangeText={setEmail}
          />
          <View className="relative">
            <TextInput
              className="border-gray-300 border rounded-lg p-4 mb-4"
              placeholder="Password *"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              className="absolute right-4 top-4"
            >
              <Text>{showPassword ? "🙈" : "👁️"}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="bg-green-500 p-4 rounded-lg items-center mb-4">
            <Text className="text-white font-bold">
              {isSignedIn ? "Sign Up" : "Sign In"}{" "}
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center items-center mb-4">
            <Text>or</Text>
          </View>
          {isSignedIn && (
            <View className="flex-row justify-center space-x-4 mb-4">
              <TouchableOpacity className="p-2 border rounded-full">
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
            </View>
          )}

          <TouchableOpacity className="flex-row justify-center">
            <Text>
              {isSignedIn
                ? "Already have an account?"
                : "Don’t have an account?"}{" "}
            </Text>
            <Text className="text-blue-500" onPress={handleSignInPress}>
              {isSignedIn ? "Sign in" : "Sign up"}{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUpScreen;
