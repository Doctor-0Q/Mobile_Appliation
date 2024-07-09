import React, { lazy, useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
// import { className= } from "nativewind";
import docimg from "../../assets/Homepage/Pic.png";
import clinic from "../../assets/Homepage/clinic.png";
import doc from "../../assets/Homepage/doc.png";
import banner from "../../assets/Homepage/banner.png";
import notification from "../../assets/Homepage/Notification.png";
import stethoscope from "../../assets/Homepage/Stethoscope.png";
import heart from "../../assets/Homepage/heart.png";
import handHeart from "../../assets/Homepage/HandHeart.png";
import Pill from "../../assets/Homepage/Pill.png";
import { showLocation } from "../../utils/functions";
// import API_URL from "../../config";
import { Toast } from "toastify-react-native";
// import docimg from "../../assets/Homepage/Pic.png";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clientAuth } from "../../utils/firebase";
import { signInWithCustomToken } from "firebase/auth";


const HomePage = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const getToken = async () => {
    const token = await AsyncStorage.getItem("doc-qToken");
    if (token) {
      try {
        await signInWithCustomToken(clientAuth, JSON.parse(token));
      }
      catch (err) { }
      finally {
        setLoading(false);
      }
    }
    else {
      setLoading(false);
    }
  }
  useEffect(() => {
    getToken();
  }, []);
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search || search === "") {
      Toast.warn("Please enter a valid query!");
      return;
    }
    console.log(search);
    const data = await showLocation(null, search, null);
    if (data) {
      navigation.navigate("Home")
    }
    console.log("Done");
  }
  return (
    <>
      {loading ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Text className="text-center">Loading...</Text>
        </View>
        :
        <ScrollView className="bg-white p-4">
          {/* Header */}
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Image source={docimg} className="w-12 h-12 rounded-full" />
              <View className="ml-3">
                <Text className="text-lg font-semibold">Welcome Back</Text>
                <Text className="text-lg">Andrew Smith</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Image
                source={notification} // Replace with your icon URL
                className="w-8 h-8  mr-3"
              />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View className="mt-4">
            <TextInput
              placeholder="Search doctor..."
              className="border p-2 rounded-lg text-gray-700 bg-[#F3F4F6] border-none outline-none"
              value={search}
              onChangeText={text => setSearch(text)}
              onSubmitEditing={handleSearch}
            />
          </View>

          {/* Banner */}
          <View className="mt-4   rounded-lg">
            <Image
              source={banner} // Replace with your image URL
              className="w-full h-40 mt-2 rounded-lg"
            />
          </View>

          {/* Services */}
          <View className="mt-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-semibold text-[#004D6C]">Services</Text>
              <TouchableOpacity>
                <Text className="text-[#1B7CA3]">See All</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-around mt-4  ">
              {/* Repeat for other service icons */}
              <View className="items-center w-[70px] h-20 bg-[#F3F4F6]">
                <Image
                  source={stethoscope} // Replace with your icon URL
                  className="w-9 h-9 mt-2"
                />
                <Text className="text-[#7D8A95] mt-1">Doctor</Text>
              </View>
              <View className="items-center w-[70px] h-20 bg-[#F3F4F6]">
                <Image
                  source={Pill} // Replace with your icon URL
                  className="w-9 h-9 mt-2"
                />
                <Text className="text-[#7D8A95] mt-1">Doctor</Text>
              </View>
              <View className="items-center w-[70px] h-20 bg-[#F3F4F6]">
                <Image
                  source={heart} // Replace with your icon URL
                  className="w-9 h-9 mt-2"
                />
                <Text className="text-[#7D8A95] mt-1">Doctor</Text>
              </View>
              <View className="items-center w-[70px] h-20 bg-[#F3F4F6]">
                <Image
                  source={handHeart} // Replace with your icon URL
                  className="w-9 h-9 mt-2"
                />
                <Text className="text-[#7D8A95] mt-1">Doctor</Text>
              </View>
            </View>
          </View>

          {/* Nearby Hospitals */}
          <View className="mt-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-semibold text-[#004D6C]">
                Nearby Hospitals
              </Text>
              <TouchableOpacity>
                <Text className="text-[#1B7CA3]">See All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              className="mt-4"
              showsHorizontalScrollIndicator={false}
            >
              {/* Repeat for other hospitals */}
              <View className="mr-4 bg-gray-100 p-4 rounded-lg">
                <Image
                  source={clinic} // Replace with your image URL
                  className="w-40 h-24 rounded-lg"
                />
                <Text className="mt-2 font-semibold">Sunrise Hospital</Text>
                <Text>123 Oak Street, CA 98765</Text>
                <Text className="mt-2 text-yellow-500">5.0 ⭐️ (58 Reviews)</Text>
                <View className="flex-row mt-2 items-center">
                  <Text className="text-gray-500">2.5 km</Text>
                  <Text className="ml-2 text-gray-500">Hospital</Text>
                </View>
              </View>
              <View className="mr-4 bg-gray-100 p-4 rounded-lg">
                <Image
                  source={clinic} // Replace with your image URL
                  className="w-40 h-24 rounded-lg"
                />
                <Text className="mt-2 font-semibold">Golden Hospital</Text>
                <Text>95 Bridge Street, NY 10013</Text>
                <Text className="mt-2 text-yellow-500">4.8 ⭐️ (45 Reviews)</Text>
                <View className="flex-row mt-2 items-center">
                  <Text className="text-gray-500">2.5 km</Text>
                  <Text className="ml-2 text-gray-500">Hospital</Text>
                </View>
              </View>
            </ScrollView>
          </View>

          {/* Top Specialist */}
          <View className="mt-4 gap-y-5">
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-semibold text-[#004D6C]">
                Top Specialist
              </Text>
              <TouchableOpacity>
                <Text className="text-[#1B7CA3]">See All</Text>
              </TouchableOpacity>
            </View>
            {/* Repeat for other specialists */}
            <View className=" p-4 mt-4 rounded-lg text-[#004D6C]  shadow-sm">
              <View className="flex-row items-center">
                <Image
                  source={doc} //
                  className=" w-24 h-24 "
                />
                <View className="ml-3 ">
                  <Text className="font-semibold text-[#004D6C]">
                    Robert Johnson
                  </Text>
                  <Text className="text-[#004D6C]">Neurologist | ABC hospital</Text>
                  <View className="flex-row items-center mt-2">
                    <Text className="text-yellow-500 ">4.8 ⭐️</Text>
                    <Text className="ml-2 text-[#004D6C]">10:30am - 5:30pm</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity className="mt-4 bg-[#F0F4FC] py-2 rounded-lg">
                <Text className="text-center text-[#004D6C] text-xl font-bold">
                  Book Appointment
                </Text>
              </TouchableOpacity>
            </View>
            <View className=" p-4 mt-4 rounded-lg text-[#004D6C] shadow-sm">
              <View className="flex-row items-center">
                <Image
                  source={doc} //
                  className=" w-24 h-24 "
                />
                <View className="ml-3 ">
                  <Text className="font-semibold text-[#004D6C]">
                    Robert Johnson
                  </Text>
                  <Text className="text-[#004D6C]">Neurologist | ABC hospital</Text>
                  <View className="flex-row items-center mt-2">
                    <Text className="text-yellow-500 ">4.8 ⭐️</Text>
                    <Text className="ml-2 text-[#004D6C]">10:30am - 5:30pm</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity className="mt-4 bg-[#F0F4FC] py-2 rounded-lg">
                <Text className="text-center text-[#004D6C] text-xl font-bold">
                  Book Appointment
                </Text>
              </TouchableOpacity>
            </View>
            <View className=" p-4 mt-4 rounded-lg text-[#004D6C] shadow-sm">
              <View className="flex-row items-center">
                <Image
                  source={doc} //
                  className=" w-24 h-24 "
                />
                <View className="ml-3 ">
                  <Text className="font-semibold text-[#004D6C]">
                    Robert Johnson
                  </Text>
                  <Text className="text-[#004D6C]">Neurologist | ABC hospital</Text>
                  <View className="flex-row items-center mt-2">
                    <Text className="text-yellow-500 ">4.8 ⭐️</Text>
                    <Text className="ml-2 text-[#004D6C]">10:30am - 5:30pm</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity className="mt-4 bg-[#F0F4FC] py-2 rounded-lg">
                <Text className="text-center text-[#004D6C] text-xl font-bold">
                  Book Appointment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      }
    </>
  );
};

export default HomePage;
