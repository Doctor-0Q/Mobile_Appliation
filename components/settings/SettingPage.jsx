import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";

import question from "../../assets/images/que.png";
import vector from "../../assets/images/Vector.png";
import right from "../../assets/images/chevron-left.png";
import hospital from "../../assets/images/hospital.png";
import location from "../../assets/images/location.png";
import msg from "../../assets/images/msg.png";
import user from "../../assets/images/user.png";
import key from "../../assets/images/key.png";
import bank from "../../assets/images/bank.png";

export default function SettingPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  return (
    <ScrollView>
    <SafeAreaView>
      <View className="mt-6 mx-3">
        <Text className="ml-3">Settings</Text>
        <View className="w-full h-16   relative flex flex-row px-5 mt-5 bg-[#FFFFFF] mb-8">
          <Text className="text-xl my-auto font-bold">Settings</Text>
          <Image
            className="absolute right-5 top-[15%]"
            source={question}
          ></Image>
        </View>
        <View className="gap-y-4">
          <TouchableOpacity onPress={() => toggleSection("myPractice")}>
            <View className="flex flex-row  h-auto py-4 px-4 bg-[#FFFFFF]">
              <Image source={vector} className="mt-3" />
              <View className="mx-6 ml-9">
                <Text className="text-xl font-bold mb-3">My Practice</Text>
                <Text className="text-gray-600">
                  Practice profile and details
                </Text>
              </View>
              <Image source={right} className="absolute right-7 top-[50%]" />
            </View>
          </TouchableOpacity>
          {openSection === "myPractice" && (
            <View style={{ padding: 10 }}>
              <Text>My Practice content here</Text>
            </View>
          )}

          <TouchableOpacity onPress={() => toggleSection("hospitalClinic")}>
            <View className="flex flex-row  h-auto py-4 px-4 bg-[#FFFFFF]">
              <Image source={hospital} className="mt-3" />
              <View className="mx-6">
                <Text className="text-xl font-bold mb-3">Hospital/Clinic</Text>
                <Text className="text-gray-600">Hospital/Clinic details</Text>
              </View>
              <Image source={right} className="absolute right-7 top-[50%]" />
            </View>
          </TouchableOpacity>
          {openSection === "hospitalClinic" && (
            <View style={{ padding: 10 }}>
              <Text>Hospital/Clinic content here</Text>
            </View>
          )}

          <TouchableOpacity onPress={() => toggleSection("locationRooms")}>
            <View className="flex flex-row  h-auto py-4 px-4 bg-[#FFFFFF]">
              <Image source={location} className="mt-3" />
              <View className="mx-6">
                <Text className="text-xl font-bold mb-3">
                  Location and Rooms
                </Text>
                <Text className="text-gray-600">Manage rooms</Text>
              </View>
              <Image source={right} className="absolute right-7 top-[50%]" />
            </View>
          </TouchableOpacity>
          {openSection === "locationRooms" && (
            <View style={{ padding: 10 }}>
              <Text>Location and Rooms content here</Text>
            </View>
          )}

          <TouchableOpacity onPress={() => toggleSection("payment")}>
            <View className="flex flex-row  h-auto py-4 px-4 bg-[#FFFFFF]">
              <Image source={msg} className="mt-3" />
              <View className="mx-6">
                <Text className="text-xl font-bold mb-3">Payment</Text>
                <Text className="text-gray-600">
                  Account and payment details
                </Text>
              </View>
              <Image source={right} className="absolute right-7 top-[50%]" />
            </View>
          </TouchableOpacity>
          {openSection === "payment" && (
            <View style={{ padding: 10 }} className="mx-auto gap-y-1">
              <Image source={bank} className="mx-auto"></Image>
              <Text className="text-[17px] font-bold text-center">
                No payment details found
              </Text>
              <Text className="text-sm font-bold text-gray-500 text-center">
                setup your bank account for patients to pay{" "}
              </Text>
              <Text className="text-sm font-bold text-gray-500 text-center">
                their services{" "}
              </Text>
              <Text className=" text-white px-3 py-2 rounded-[4px] font-bold  bg-[#0000AC] mx-auto">
                Add
              </Text>
            </View>
          )}

          <TouchableOpacity onPress={() => toggleSection("users")}>
            <View className="flex flex-row  h-auto py-4 px-4 bg-[#FFFFFF]">
              <Image source={user} className="mt-3" />
              <View className="mx-6">
                <Text className="text-xl font-bold mb-3">Users</Text>
                <Text className="text-gray-600">
                  Management and Registration for Users
                </Text>
              </View>
              <Image source={right} className="absolute right-7 top-[50%]" />
            </View>
          </TouchableOpacity>
          {openSection === "users" && (
            <View style={{ padding: 10 }}>
              <Text>Users content here</Text>
            </View>
          )}

          <TouchableOpacity onPress={() => toggleSection("accessPermission")}>
            <View className="flex flex-row  h-auto py-4 px-4 bg-[#FFFFFF]">
              <Image source={key} className="mt-3" />
              <View className="mx-6">
                <Text className="text-xl font-bold mb-3">
                  Access Permission
                </Text>
                <Text className="text-gray-600">
                  Access rights configuration
                </Text>
              </View>
              <Image source={right} className="absolute right-7 top-[50%]" />
            </View>
          </TouchableOpacity>
          {openSection === "accessPermission" && (
            <View style={{ padding: 10 }}>
              <Text>Access Permission content here</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
}
