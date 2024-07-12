import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import doctorpicture from "../../../assets/doctor/doctor-profile.png";
import DatePicker from "react-native-datepicker";
import { tailwind } from "nativewind";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useRoute } from "@react-navigation/native";
import API_URL from "../../../config";
import { Toast } from "toastify-react-native";
import { useNavigation } from '@react-navigation/native';
import { clientAuth } from "../../../utils/firebase";
import ShowHeaderPage from "./ShowHeaderPage";
import NotShowHeaderPage from "./NotShowHeaderPage";
import Loading from "../../Loading";

const timeSlots = [
  { time: "10 - 11 AM", value: '10-11' },
  { time: "11 - 12 PM", value: "11-12" },
  { time: "12 - 01 PM", value: "12-1" },
  { time: "01 - 02 PM", value: "1-2" },
  { time: "02 - 03 PM", value: "2-3" },
  { time: "03 - 04 PM", value: "3-4" },
  { time: "04 - 05 PM", value: "4-5" },
  { time: "05 - 06 PM", value: "5-6" },
];

const Doctorprofile = () => {
  const route = useRoute();
  const { doctorId } = route?.params || {};
  if (!doctorId || doctorId === undefined || doctorId === null) {
    return (
      <View>
        <Text>
          No doctor is selected
        </Text>
      </View>
    )
  }
  const [docData, setDocData] = useState([]);
  const navigation = useNavigation();
  const [x, setX] = useState(false);
  // const today = new Date(new Date());
  // today.setDate(today.getDate() + 3);
  // const minDate = today.toISOString().split('T')[0];
  // const [selectedDate, setSelectedDate] = useState('today');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slotdate, setSlotDate] = useState('today');
  const [todaySlots, setTodaySlots] = useState({});
  const [tomorrowSlots, setTomorrowSlots] = useState({});
  const [loading, setLoading] = useState(true);

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
    setSlotDate(slot);
  };

  const handleBookClick = async () => {
    if (selectedSlot !== null) {
      if (!clientAuth.currentUser) {
        Toast.warn("Please login to book an appointment");
        navigation.navigate("Sign In");
        return;
      }
      try {
        const data = {
          date: slotdate,
          docId: docData.uid,
          time: selectedSlot,
          uid: clientAuth.currentUser.uid
        }
        const response = await fetch(`${API_URL}/api/appointments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        const msg = await response.json();
        if (!response.ok) {
          Toast.error(msg);
          return;
        }
        Toast.success("Booking successful!");
        setSelectedSlot(null);
        setX(!x);
      }
      catch (error) {
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
  };


  return (
    <>
      {/* {loading ? <Loading /> : */}
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
                    {!showHeader && (
                      <NotShowHeaderPage docData={docData} />
                    )}
                  </View>
                  {/*  */}

                  <View className="p-4">
                    <View className="flex-row justify-between items-center mb-4">
                      <TouchableOpacity className="p-2 border border-black rounded" onPress={() => handleSlotDateSelect('today')}>
                        <Text className="text-lg">TODAY</Text>
                        <Text className="text-green-500">{docData ? docData?.emptySlots?.today : 0} slots available</Text>
                      </TouchableOpacity>
                      <TouchableOpacity className="p-2 border border-black rounded" onPress={() => handleSlotDateSelect('tomorrow')}>
                        <Text className="text-lg">TOMORROW</Text>
                        <Text className="text-green-500">{docData ? docData?.emptySlots?.tomorrow : 0} slots available</Text>
                      </TouchableOpacity>
                      {/* <DatePicker
          style={{ width: 200 }}
          minDate={minDate}
          mode="date"
          placeholder="dd-mm-yyyy"
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              right: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setSlotDate(date);
          }}
        /> */}
                    </View>
                    {slotdate === 'today' && <ScrollView className="flex   border w-full ">
                      {timeSlots.map((slot, index) => (
                        <TouchableOpacity
                          key={index}
                          className={` m-2 border rounded w-[30%]  ${selectedSlot === slot.value ? "border-blue-700" : "border-gray-300"
                            }`}
                          onPress={() => setSelectedSlot(slot.value)}
                          disabled={todaySlots ? (todaySlots[slot.value] === true ? false : true) : false}
                        >
                          <Text className="text-[20px] text-center">{slot.time}</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>}
                    {slotdate === 'tomorrow' && <ScrollView className="flex   border w-full ">
                      {timeSlots.map((slot, index) => (
                        <TouchableOpacity
                          key={index}
                          className={` m-2 border rounded w-[30%]  ${selectedSlot === slot.value ? "border-blue-700" : "border-gray-300"
                            }`}
                          onPress={() => setSelectedSlot(slot.value)}
                          disabled={tomorrowSlots ? (tomorrowSlots[slot.value] === true ? false : true) : false}
                        >
                          <Text className="text-[20px] text-center">{slot.time}</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>}
                    <TouchableOpacity
                      className="bg-blue-500 p-4 rounded mt-4"
                      onPress={() => console.log("Booked slot:", selectedSlot)}
                    >
                      <Text className="text-white text-center text-lg" onPress={handleBookClick}>Book</Text>
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
