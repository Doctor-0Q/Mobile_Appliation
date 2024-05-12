import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MessageSent = ({ message, time }) => {
  return (
    <View>
      <View className="flex flex-row justify-end my-1 pr-2">
        <View className="bg-[#c7dfff] rounded-xl px-6 py-2  pt-4 max-w-[75%]">
          <Text className="text-[#1D1D1D] font-bold">
            {message.split("\n").map((line, index) => (
              <Text key={index}>
                {line}
                {"\n"}
              </Text>
            ))}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: 20,
          paddingRight: 10,
          gap: 5,
        }}
      >
        <Text className="text-xs text-[#2F80ED]  font-semibold">{time}</Text>
        <Ionicons name="checkmark-done-sharp" size={20} color="#2F80ED" />
      </View>
    </View>
  );
};

export default MessageSent;
