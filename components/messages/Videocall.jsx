import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";

const Videocall = () => {
  const handleMicPress = () => {
    Alert.alert('Mic Button Pressed');
  };
  
  const handleEndCallPress = () => {
    Alert.alert('End Call Button Pressed');
  };
  
  const handleMessagePress = () => {
    Alert.alert('Message Button Pressed');
  };
  
  return (
    <View className=" p-2  mt-2">
        {/* --------------------------------------videocall--------------------------- */}
      <View className="video rounded  border border-[#E0E0E0] relative h-[70vh]">
        <Image
          source={require("../../assets/messages/profilepic.jpeg")}
          className="h-full w-full rounded mr-2  bg-contain"
        />
        <Image
          source={require("../../assets/messages/doctor.jpeg")}
          className="h-[30%] w-[35%] bottom-8 right-6 absolute  rounded mr-2  bg-contain"
        />
      </View>
      {/* -------------------------call-icons---------------------------- */}
      <View className="h-[15vh] rounded my-4 flex flex-row items-center justify-center border border-[#E0E0E0]">
        <View className=" mx-2 h-[80%] w-[20%] flex flex-row items-center justify-center">
        <TouchableOpacity onPress={handleMicPress}>
        <Image
          source={require("../../assets/messages/mic.png")}
        />
         </TouchableOpacity>
        </View>
        <View className=" mx-2 h-[80%] w-[30%] flex flex-row items-center justify-center">
        <TouchableOpacity onPress={handleEndCallPress}>
        <Image
          source={require("../../assets/messages/endcall.png")}
        />
         </TouchableOpacity>
        </View>
        <View className=" mx-2 h-[80%] w-[20%] flex flex-row items-center justify-center">
        <TouchableOpacity onPress={handleMessagePress}>
        <Image
          source={require("../../assets/messages/message.png")}
        />
         </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Videocall;
