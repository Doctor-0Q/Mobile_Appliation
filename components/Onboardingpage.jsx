

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingScreen = () => {
    return (
        <View className="h-full w-full " >
            <View className=" w-[80%] mx-auto my-16 h-[50%] " >
                <Image
                    source={require('../assets/onboarding/doctors.png')} // Make sure to add your image in the correct path
                    className="h-[100%] w-[100%]"
                />
            </View>
            <View className=" w-[70%] mx-auto">
                <Text  className="text-2xl text-center text-[#1B7CA3] font-bold" >Welcome to Doc-Q</Text>
                <Text className="text-center text-xs my-2 text-[#07506D]">
                    Book appointments with ease, anytime, anywhere. Explore services, personalize your search, and manage bookings effortlessly.
                </Text>
            </View>
            <TouchableOpacity className=" h-10 my-5 w-[85%] mx-auto bg-[#1B7CA3] py-1 rounded-xl" >
                <Text className="text-center text-lg text-white" >Get started</Text>
            </TouchableOpacity>
        </View>
    );
};



export default OnboardingScreen;
