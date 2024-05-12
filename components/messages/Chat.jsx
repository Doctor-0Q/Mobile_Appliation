import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import {
  Entypo,
  EvilIcons,
  Octicons,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import MessageSent from "./MessageSent";
import MessageReceived from "./MessageReceived";
const Chat = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (text) => {
    setInputValue(text);
  };
  const handlePress = () => {
    console.log("Form submitted with value:", inputValue);
    setInputValue("");
  };
  return (
    <View>
      {/* ---------------header------------------ */}
      <View className="mt-2 ">
        <View className="border border-[#E0E0E0] bg-[#ffffff] flex flex-row h-12 justify-around items-center rounded">
          <View className="h-10 w-10 pr-1 pt-1 ">
            <EvilIcons name="chevron-left" size={40} color="#828282" />
          </View>
          <View className="h-10 w-60  items-center flex flex-row ">
            <Image
              source={require("../../assets/messages/profilepic.jpeg")}
              className="h-full w-10 rounded-3xl mr-2  bg-contain"
            />
            <Text>Damilola Oyin</Text>
          </View>
          <View className="h-10 w-10  pl-2 pt-2 ">
            <Entypo name="dots-three-horizontal" size={24} color="#828282" />
          </View>
        </View>
      </View>
      {/* -----------------------------------meesages----------------/ */}
      <View className="border border-[#E0E0E0]  relative rounded min-h-[90vh] mt-2 pt-6">
        <MessageSent message={"Hello, how are you doing?"} time={"09:27am"} />
        <MessageReceived
          message={"Great, when can we have the meeting?"}
          status={"Seen"}
        />
        <MessageSent
          message={"Maybe, now\nWill that be okay?"}
          time={"09:28am"}
        />
        <MessageReceived
          message={"Yeah\nLets have a video call"}
          status={"Seen"}
        />
        <MessageSent message={"That would be great"} time={"09:28am"} />
      </View>
      {/* --------------------------------text-input--------------------------------------------------------------- */}
      <View className="h-12 w-[95%] border absolute bottom-2 left-2 border-[#E0E0E0] flex flex-row items-center justify-between rounded-xl mx-auto">
        <View className="pencil h-10 flex items-center justify-center w-10 ">
          <Octicons name="pencil" size={20} color="#BDBDBD" />
        </View>
        <View className="input h-10 flex justify-center w-40 ">
          <TextInput
            placeholder="Type here..."
            value={inputValue}
            onChangeText={handleInputChange}
          />
        </View>
        <View className="emoji h-10 flex items-center justify-center w-10 ">
          <Entypo name="emoji-happy" size={24} color="#BDBDBD" />
        </View>
        <View className="mic h-10 flex items-center justify-center w-10 ">
          <Feather name="mic" size={24} color="#BDBDBD" />
        </View>
        <TouchableOpacity
          onPress={handlePress}
          style={{
            height: 50,
            width: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ height: 30, width: 30 }}>
            <Ionicons name="arrow-up-circle" size={30} color="#0000AC" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Chat;
