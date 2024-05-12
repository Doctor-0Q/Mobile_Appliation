import React from "react";
import { View, Text } from "react-native";

const MessageReceived = ({ message, status }) => {
  return (
    <View className="ml-2  mb-2">
      <View className="bg-[#E0E0E0] rounded-xl px-4 py-2  pt-4 max-w-[75%]">
        <Text className="text-[#1D1D1D] font-bold">
          {message.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {"\n"}
            </React.Fragment>
          ))}
        </Text>
      </View>
      <View className="mt-1">
        <Text className="text-[#BDBDBD] text-xs text-center ml-32">
          {status}
        </Text>
      </View>
    </View>
  );
};

export default MessageReceived;
