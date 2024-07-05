import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import { styled } from "nativewind";
import img from "../assets/images/signinbg.png";
import { SafeAreaView } from "react-native-safe-area-context";
import API_URL from "../config";
import axios from "axios";
import { auth } from "../utils/firebase";
import { Toast } from "toastify-react-native";
import { obscureEmail } from "../utils/functions";
import { useNavigation } from '@react-navigation/native';


const EmailVerification = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [token, setToken] = useState(null);
    const [disableGetOtpButton, setDisableGetOtpButton] = useState(false);
    const [verifyButtonLoading, setVerifyButtonLoading] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const claims = (await user.getIdTokenResult()).claims;
                console.log(claims);
                if (claims.email_verified === true) {
                    navigation.navigate("Home");
                    return;
                }
                setEmail(obscureEmail(user.email));
                const token = await user.getIdToken();
                setToken(token);
            } else {
                navigation.navigate("Sign In");
            }
        })
    }, []);

    useEffect(() => {
        let timer;
        if (disableGetOtpButton) {
          timer = setTimeout(() => {
            setIsDisabled(false);
          }, 120000); // 2 minutes in milliseconds
        }
        else{
            setDisableGetOtpButton(false);
        }
    
        return () => {
          if (timer) {
            clearTimeout(timer);
          }
        };
      }, [disableGetOtpButton]);

    const handleGetOtp = async (e) => {
        e.preventDefault();
        setDisableGetOtpButton(true);
        if (!token) {
          Toast.error("User not logged in");
          navigation.navigate("SignIn");
          return;
        }
        try {
          const res = await fetch(`${API_URL}/api/resend-otp`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: token })
          });
          if (!res.ok) {
            Toast.error("Error sending email");
            return;
          }
          Toast.success("Otp sent successfully");
        }
        catch (e) {
          Toast.error("Network unavailable! Try again");
          setDisableGetOtpButton(false);
          return;
        }
    } 

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setVerifyButtonLoading(true);
        if (!token) {
            Toast.error("User not logged in");
            setVerifyButtonLoading(false);
            navigation.navigate("Sign In");
            return;
        }
        if (!otp) {
            Toast.warn("Please enter the OTP");
            setVerifyButtonLoading(false);
            return;
        }
        if (otp.length !== 6) {
            Toast.warn("Please enter a valid OTP");
            setVerifyButtonLoading(false);
            return;
        }

        try {
            const res = await axios.post(`${API_URL}/api/verify-otp`, {
                otp: otp,
                token: token
            })

            const data = await res.data;
            console.log(data);
            setVerifyButtonLoading(false);
            if (res.status !== 200) {
                Toast.error(data);
                return;
            }
            await auth.currentUser.getIdToken(true);
            Toast.success(data);
            navigation.navigate("Home");
        }
        catch (e) {
            console.log(e);
            Toast.error("Network unavailable! Try again");
            setVerifyButtonLoading(false);
            return;
        }
    }

    return (
        <ScrollView className="bg-white flex-1">
            <SafeAreaView>
                <View className="bg-green-900 h-auto   items-center w-auto justify-center">
                    <Image source={img} className="w-[80%] mt-12 h-48 mb-5" />
                </View>
                <View className="p-8  bg-white rounded-t-3xl">
                    <View className="flex-row justify-center items-center mb-4">
                        <Text>OTP has been sent to {email}</Text>
                    </View>
                    <TextInput
                        className="border-gray-300 border rounded-lg p-4 mb-4"
                        keyboardType="numeric"
                        placeholder="OTP *"
                        value={otp}
                        onChangeText={(text) => setOtp(text)}
                    />
                    <TouchableOpacity className="bg-green-500 p-4 rounded-lg items-center mb-4" disabled={disableGetOtpButton} onPress={handleGetOtp}>
                        <Text className="text-white font-bold">Get OTP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-green-500 p-4 rounded-lg items-center mb-4" disabled={verifyButtonLoading} onPress={handleVerifyOtp}>
                        <Text className="text-white font-bold">Verify OTP</Text>
                    </TouchableOpacity>
                    <View className="flex-row justify-center items-center mb-4">
                        <Text>Log Out</Text>
                    </View>

                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default EmailVerification;
