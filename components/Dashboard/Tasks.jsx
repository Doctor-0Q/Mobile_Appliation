import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome, Entypo, AntDesign } from "@expo/vector-icons";

const Tasks = () => {
  const Checkbox = ({ checked, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const toggleCheckbox = () => {
      const newState = !isChecked;
      setIsChecked(newState);
      if (onChange) {
        onChange(newState);
      }
    };

    return (
      <TouchableOpacity
        onPress={toggleCheckbox}
        className={isChecked?"":"h-9 w-9 border-[#E0E0E0] border rounded-lg"}
      >
        {isChecked && (
          <AntDesign
            name="checksquare"
            size={35}
            color="#2F80ED"
            style={{ border: "1px solid " }}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View className="bg-white  overflow-y-scroll px-4 my-7">
      <View className="flex-row items-center justify-between h-12 p-2">
        <Text className="font-bold">Tasks</Text>
        <View className="flex-row items-center gap-1">
          <Text className="text-blue-700 font-bold text-sm">New Tasks</Text>
          <TouchableOpacity className="border border-[#E0E0E0] rounded-lg p-2">
            <FontAwesome name="plus" size={12} color="#0000AC" />
          </TouchableOpacity>
        </View>
      </View>
      <View className=" border-black rounded-lg mb-5 flex-row items-center justify-around px-5 bg-[#FBFBFB]">
        <View className="flex-row items-center gap-5">
          <Checkbox checked={true} />
          <View className="flex-col">
            <Text className="font-bold text-sm">
              Task Completed successfully
            </Text>
            <Text className="text-xs font-medium text-[#4F4F4F]">
              {new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </Text>
            <Text className="text-xs  w-56">
              Sign up for Covid - 19 training course for medicians
            </Text>
          </View>
        </View>
        <View className="flex-row items-center gap-8">
          <Text className="hidden text-sm">24 Oct 2022</Text>
          <TouchableOpacity className="border border-[#E0E0E0] rounded-lg p-1">
            <Entypo name="dots-three-horizontal" size={20} color="#2F80ED" />
          </TouchableOpacity>
        </View>
      </View>
      <View className=" border-black rounded-lg mb-5 flex-row items-center justify-around px-5 bg-[#FBFBFB]">
        <View className="flex-row items-center gap-5">
          <Checkbox checked={true} />
          <View className="flex-col">
            <Text className="font-bold text-sm">
              Task Completed successfully
            </Text>
            <Text className="text-xs font-medium text-[#4F4F4F]">
              {new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </Text>
            <Text className="text-xs  w-56">
              Fill up the previous ERP Report
            </Text>
          </View>
        </View>
        <View className="flex-row items-center gap-8">
          <Text className="hidden text-sm">24 Oct 2022</Text>
          <TouchableOpacity className="border border-[#E0E0E0] rounded-lg p-1">
            <Entypo name="dots-three-horizontal" size={20} color="#2F80ED" />
          </TouchableOpacity>
        </View>
      </View>
      <View className=" border-black rounded-lg mb-5 flex-row items-center justify-around px-5 bg-[#FBFBFB]">
        <View className="flex-row items-center gap-5">
          <Checkbox checked={true} />
          <View className="flex-col">
            <Text className="font-bold text-sm">
              Task Completed successfully
            </Text>
            <Text className="text-xs font-medium text-[#4F4F4F]">
              {new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </Text>
            <Text className="text-xs  w-56">
              Send prescription files to Night duty nurse{" "}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center gap-8">
          <Text className="hidden text-sm">24 Oct 2022</Text>
          <TouchableOpacity className="border border-[#E0E0E0] rounded-lg p-1">
            <Entypo name="dots-three-horizontal" size={20} color="#2F80ED" />
          </TouchableOpacity>
        </View>
      </View>
      <View className=" border-black rounded-lg mb-5 flex-row items-center justify-around px-5 bg-[#FBFBFB]">
        <View className="flex-row items-center gap-5">
          <Checkbox checked={true} />
          <View className="flex-col">
            <Text className="font-bold text-sm">
              Task Completed successfully
            </Text>
            <Text className="text-xs font-medium text-[#4F4F4F]">
              {new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </Text>
            <Text className="text-xs  w-56">Set up afternoon meeting </Text>
          </View>
        </View>
        <View className="flex-row items-center gap-8">
          <Text className="hidden text-sm">24 Oct 2022</Text>
          <TouchableOpacity className="border border-[#E0E0E0] rounded-lg p-1">
            <Entypo name="dots-three-horizontal" size={20} color="#2F80ED" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row justify-end items-center h-12">
        <Text className="text-blue-700 font-medium text-sm">View all</Text>
        <TouchableOpacity className="mx-2 border border-[#E0E0E0] px-2 py-1 rounded-lg">
          <FontAwesome name="angle-right" size={12} color="#0000AC" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tasks;