import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { doctorProfile } from "../../utils/ProfileData";

// import { doctorProfile, patientProfile } from "./utils/ProfileData";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);

  const emptyStars = maxStars - fullStars;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Icon key={`full-${i}`} name="star" color="gold" size={20} />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Icon key={`empty-${i}`} name="star-o" size={20} color="grey" />
    );
  }

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {stars}
      <Text style={{ marginLeft: 8, color: "black", fontWeight: "normal" }}>
        {rating}
      </Text>
    </View>
  );
};

export default App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctorProfile);

  useEffect(() => {
    filterDoctors(searchQuery);
  }, [searchQuery]);

  const filterDoctors = (query) => {
    const trimmedQuery = query.trim().toLowerCase();
    if (trimmedQuery === "") {
      setFilteredDoctors(doctorProfile);
    } else {
      const filtered = doctorProfile.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(trimmedQuery) ||
          doctor.speciality.toLowerCase().includes(trimmedQuery) ||
          doctor.starRating.toString().includes(trimmedQuery) ||
          doctor.consultationTime.toLowerCase().includes(trimmedQuery)
      );
      setFilteredDoctors(filtered);
    }
  };

  return (
    <SafeAreaView className="flex-1 mih-h-[100vh] bg-white ">
      {/* <ScrollView> */}
      <View className="top  flex w-full h-[28%vh] bg-[#003B2E] rounded-bl-xl rounded-br-xl   ">
        <Image
          source={require("./assets/images/userimage1.png")}
          // source={require("../assets/images/userimage1.png")}
          className="w-[83] h-[84] rounded-full mt-3 ml-10"
        />
        <View className="User message ml-[40] mt-4">
          <Text>
            <Text className="text-white ">Hi ,</Text>
            <Text className="  text-white text-[18] font-bold"> Michel</Text>
          </Text>
        </View>
        <View className="welcome message ml-[40] mt-1">
          <Text>
            <Text className="text-white">Your health is in </Text>
            <Text className="text-[#18EE3A]">perfect </Text>
            <Text className="text-white">condition</Text>
          </Text>
        </View>
        <View className="search mt-4   flex flex-row ">
          <TextInput
            className="w-5/6 h-11 rounded-full bg-white  mx-auto relative p-3"
            placeholder=" Search..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {/* <TouchableOpacity onPress={() => filteredDoctors}> */}
          <TouchableOpacity>
            <Image
              source={require("./assets/images/search.png")}
              className="w-5 h-5 absolute top-3 right-12"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-1">
        <View className="Services selection mb-2">
          <Text className="font-semibold text-xl ml-6 mt-2">Services</Text>
        </View>
        <View className="Middle Services min-h-[12%vh] flex  justify-centermx-4">
          <View className="flex flex-row justify-around w-full">
            <View className="consult flex flex-col items-center bg-[#A6EFFF] rounded-lg p-5  w-1/4">
              <Image
                source={require("./assets/images/consult.png")}
                className="w-12 h-12"
                resizeMode="contain"
              />
              <Text className="mt-2">Consult</Text>
            </View>
            <View className="diagnosis flex flex-col items-center bg-[#BBBAFF] rounded-lg p-5 ">
              <Image
                source={require("./assets/images/diagnosis.png")}
                className="w-12 h-12"
                resizeMode="contain"
              />
              <Text className="mt-2">Diagnosis</Text>
            </View>
            <View className="health flex flex-col items-center bg-[#FCE87E] rounded-lg p-5 w-1/4">
              <Image
                source={require("./assets/images/heart.png")}
                className="w-12 h-12"
                resizeMode="contain"
              />
              <Text className="mt-2">Health</Text>
            </View>
          </View>
        </View>
        <View className="appointment text  mx-4  flex flex-row">
          <View>
            <Text className="text-[18] font-bold text-black mt-2">
              Book a appointment
            </Text>
            <Text className="text-[11] text-[#7B7B7B] mb-2">
              Schedule a appointment with the physician
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={require("./assets/images/rightArrow.png")}
                className="w-3 h-3 mt-7 ml-[40]"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="doctorProfile mx-5 flex-1  min-h-[12%vh] ">
          {filteredDoctors.length > 0 ? (
            <FlatList
              data={filteredDoctors}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View>
                  <View className="border-2 rounded-lg mt-1 px-3  mb-1 pb-1 pt-1">
                    <View className="wrapper flex flex-row  border-gray-300  rounded-lg space-x-7 ">
                      <View className="image">
                        <Image
                          className="w-24 h-24 mt-1 mb-1" // "w-[85] h-[90] mt-1"
                          source={item.image}
                          resizeMode="contain"
                        />
                      </View>
                      <View className="description">
                        <Text className="text-xl font-bold">{item.name}</Text>
                        <Text className="text-[11px] text-gray-500 ">
                          {item.speciality}
                        </Text>
                        <StarRating rating={parseFloat(item.starRating)} />
                        {/* <StarRating /> */}
                        <View className="Consultation flex flex-row gap-3">
                          <Image
                            source={item.consultationImage}
                            className="h-4 w-4"
                            resizeMode="contain"
                          />
                          <Text className="text-[10px] text-gray-500">
                            {item.consultationTime}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
          ) : (
            <View className="SorryMessageContainer flex bg-green-800  rounded-xl items-center justify-center min-h-[8%vh]">
              <Text className=" text-green-100 text-[20]">
                Sorry, no records found.
              </Text>
            </View>
          )}
        </View>
      </View>
      {/* </ScrollView> */}
      <View className="Navbar bg-white h-[70]  border-2 rounded-tl-lg rounded-tr-lg shadow-md shadow-top blur-xl shadow-slate-600  absolute bottom-0 left-0 right-0 justify-center items-center  ">
        <View className="flex flex-row   space-x-16">
          <View className="bg-green-900   px-6 py-1 rounded-xl">
            <Image
              source={require("./assets/images/Home.png")}
              className="w-6 h-6 "
            />
          </View>
          <Image
            source={require("./assets/images/search.png")}
            className="w-6 h-6"
          />
          <Image
            source={require("./assets/images/notification.png")}
            className="w-6 h-6"
          />
          <Image
            source={require("./assets/images/login.png")}
            className="w-6 h-6"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
