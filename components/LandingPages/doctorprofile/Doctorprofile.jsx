import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import doctorpicture from "../../../assets/doctor/doctor-profile.png";
import DateTimePicker from "@react-native-community/datetimepicker";
import { tailwind } from "nativewind";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useScrollViewOffset,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useRoute } from "@react-navigation/native";
import API_URL from "../../../config";
import { Toast } from "toastify-react-native";
import { useNavigation } from "@react-navigation/native";
import { clientAuth } from "../../../utils/firebase";
import ShowHeaderPage from "./ShowHeaderPage";
import NotShowHeaderPage from "./NotShowHeaderPage";
import Loading from "../../Loading";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
const timeSlots = [
  { time: "10 - 11 AM", value: "10-11" },
  { time: "11 - 12 PM", value: "11-12" },
  { time: "12 - 01 PM", value: "12-1" },
  { time: "01 - 02 PM", value: "1-2" },
  { time: "02 - 03 PM", value: "2-3" },
  { time: "03 - 04 PM", value: "3-4" },
  { time: "04 - 05 PM", value: "4-5" },
  { time: "05 - 06 PM", value: "5-6" },
];

function formatDate(date) {
  if(date === "today") {
    return new Date();
  }
  if(date === "tomorrow") {
    const today = new Date(new Date());
    today.setDate(today.getDate() + 1);
    return today;
  }
}

const Doctorprofile = () => {
  const route = useRoute();
  const { doctorId } = route?.params || {};

  if (!doctorId || doctorId === undefined || doctorId === null) {
    return (
      <View>
        <Text>No doctor is selected</Text>
      </View>
    );
  }

  const [docData, setDocData] = useState([]);
  const navigation = useNavigation();
  const [x, setX] = useState(false);
  const today = new Date(new Date());
  today.setDate(today.getDate() + 2);
  // const minDate = today.toISOString().split('T')[0];
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState("today");
  const [todaySlots, setTodaySlots] = useState({});
  const [tomorrowSlots, setTomorrowSlots] = useState({});
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const fetchDoctorProfile = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/doctor/profile/${doctorId}`);
      const datas = await res.json();
      console.log(datas);
      setDocData(datas);
      setTodaySlots(datas.slots);
      setTomorrowSlots(datas.tomorrowSlots);
      console.log(docData.name);
      setLoading(false);
    } catch (error) {
      Toast.error("Error fetching doctor profile");
      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    fetchDoctorProfile();
  }, [x, doctorId]);

  const [showHeader, setShowHeader] = useState(false);
  const scrollref = useAnimatedRef();
  const scrollOffset = useScrollViewOffset(scrollref);
  const headerOpacity = useSharedValue(0);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: headerOpacity.value,
      transform: [
        {
          translateY: interpolate(headerOpacity.value, [0, 1], [-50, 0]),
        },
      ],
    };
  });

  const handleSlotDateSelect = (slot) => {
    setSelectedSlot(null);
    setSelectedDate(slot);
  };

  const handleBookClick = async () => {
    if (!clientAuth.currentUser) {
      Toast.warn("Please login to book an appointment");
      navigation.navigate("Sign In");
      return;
    }

    if (selectedSlot !== null) {
      try {
        const data = {
          date: selectedDate,
          docId: docData.uid,
          time: selectedSlot,
          token: await clientAuth.currentUser.getIdToken(),
        };
        const response = await fetch(`${API_URL}/api/appointments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const msg = await response.json();
        if (!response.ok) {
          Toast.error(msg);
          return;
        }
        Toast.success("Booking successful!");
        setSelectedSlot(null);
        setX(!x);
      } catch (error) {
        Toast.error("Server unavailable");
        return;
      }
    } else {
      Toast.warn("Please select a time slot before booking.");
    }
  };

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-400, 0, 400],
            [-400 / 2, 0, 400 * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-400, 0, 400], [2, 1, 1]),
        },
      ],
    };
  });

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowHeader(offsetY > 300);
    if (offsetY > 300) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };
  const handleDateChange = (event, selectedDate) => {
    if (event.type === "set") {
      const date = selectedDate || date;
      setSelectedDate(date);
    }
    setShowModal(false);
  };
  return (
    <>
      {/* {loading && (
        <View>
          <Text>
            Loading...
          </Text>
        </View>
      )} */}
      {/* {!loading && */}
      <View style={{ flex: 1, backgroundColor: "#003B2E80" }}>
        <Animated.FlatList
          ref={scrollref}
          data={[{ key: "content" }]} // Using a single item to wrap your content
          renderItem={() => (
            <>
              <Animated.Image
                source={doctorpicture}
                style={[{ height: 400, width: "100%" }, imageAnimatedStyle]}
              />
              <View
                style={{
                  backgroundColor: "#fff",
                  padding: 20,
                  borderRadius: 30,
                  marginTop: -50,
                  minHeight: "100%",
                }}
              >
                {/*  */}
                <View>
                  {showHeader && (
                    <Animated.View style={[headerAnimatedStyle]}>
                      <ShowHeaderPage docData={docData} />
                    </Animated.View>
                  )}
                  {!showHeader && <NotShowHeaderPage docData={docData} />}
                </View>
                {/*  */}

                <View className="p-4">
                  <View className="flex-row justify-between items-center mb-4">
                    <TouchableOpacity
                      className={`p-2 border rounded ${
                        selectedDate === "today"
                          ? "border-blue-700"
                          : "border-black"
                      }`}
                      onPress={() => handleSlotDateSelect("today")}
                    >
                      <Text className="text-lg">TODAY</Text>
                      <Text className="text-green-500">
                        {docData ? docData?.emptySlots?.today : 0} slots
                        available
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      className={`p-2 border rounded ${
                        selectedDate === "tomorrow"
                          ? "border-blue-700"
                          : "border-black"
                      }`}
                      onPress={() => handleSlotDateSelect("tomorrow")}
                    >
                      <Text className="text-lg">TOMORROW</Text>
                      <Text className="text-green-500">
                        {docData ? docData?.emptySlots?.tomorrow : 0} slots
                        available
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowModal(true)}>
                      <View>
                        <FontAwesome
                          name="calendar"
                          className="text-[15px]"
                          size={28}
                        />
                      </View>
                    </TouchableOpacity>
                    {showModal && (
                      <DateTimePicker
                        onChange={handleDateChange}
                        mode="date"
                        minimumDate={today}
                        value={formatDate(selectedDate) || new Date()}
                      />
                    )}
                  </View>
                  {selectedDate === "today" && (
                    <ScrollView className="flex    border w-full  ">
                      <View className="flex flex-row flex-wrap h-full pl-3 ">
                        {timeSlots.map((slot, index) => (
                          <TouchableOpacity
                            key={index}
                            className={` m-2 border rounded w-[40%] flex p-3 text-[#2F80EDBF]    ${
                              selectedSlot === slot.value
                                ? "border-blue-700"
                                : "border-gray-300"
                            }`}
                            onPress={() => setSelectedSlot(slot.value)}
                            disabled={
                              todaySlots
                                ? todaySlots[slot.value] === true
                                  ? false
                                  : true
                                : false
                            }
                          >
                            <Text className="text-[17px] text-center text-[#2F80EDBF] ">
                              {slot.time}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </ScrollView>
                  )}
                  {selectedDate === "tomorrow" && (
                    <ScrollView className="flex   border w-full ">
                      <View className="flex flex-row flex-wrap h-full pl-3 ">
                        {timeSlots.map((slot, index) => (
                          <TouchableOpacity
                            key={index}
                            className={` m-2 border rounded w-[40%] flex p-3 text-[#2F80EDBF]   ${
                              selectedSlot === slot.value
                                ? "border-blue-700"
                                : "border-gray-300"
                            }`}
                            onPress={() => setSelectedSlot(slot.value)}
                            disabled={
                              tomorrowSlots
                                ? tomorrowSlots[slot.value] === true
                                  ? false
                                  : true
                                : false
                            }
                          >
                            <Text className="text-[17px] text-center text-[#2F80EDBF]">
                              {slot.time}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </ScrollView>
                  )}
                  <TouchableOpacity
                    className="bg-blue-500 p-4 rounded mt-4"
                    onPress={handleBookClick}
                    >
                    <Text
                      className="text-white text-center text-lg"
                      onPress={handleBookClick}
                    >
                      Book
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        />
      </View>
      {/* } */}
    </>
  );
};

export default Doctorprofile;
