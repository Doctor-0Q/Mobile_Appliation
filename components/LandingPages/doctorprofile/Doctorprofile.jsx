import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import doctorpicture from "../../../assets/doctor/doctor-profile.png";
import doctorprofile from "../../../assets/doctor/doctor profile pic.jpeg";
import DoctorAppointment from "./DoctorAppointment";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Feather, FontAwesome } from "@expo/vector-icons";

const Doctorprofile = () => {
  const scrollref = useAnimatedRef();
  const scrollOffset = useScrollViewOffset(scrollref);
  const [showHeader, setShowHeader] = useState(false);
  const headerOpacity = useSharedValue(0);

  useEffect(() => {
    headerOpacity.value = withTiming(showHeader ? 1 : 0, { duration: 300 });
  }, [showHeader]);

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

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowHeader(offsetY > 300);
  };

  return (
    <View className="flex bg-[#003B2E80] min-h-full">
      <Animated.FlatList
        ref={scrollref}
        data={[{ key: "content" }]} // Using a single item to wrap your content
        renderItem={() => (
          <>
            <Animated.Image
              source={doctorpicture}
              style={[{ height: 400, width: "100%" }, imageAnimatedStyle]}
            />
            <View className="h-[1500px] bg-[#fff] p-4 rounded-3xl">
              {showHeader && (
                <Animated.View style={[headerAnimatedStyle]}>
                  <View className="items-center justify-center py-2">
                    <View className="h-20 w-20 rounded-full overflow-hidden">
                      <Image
                        source={doctorprofile}
                        resizeMode="cover"
                        className="h-full w-full"
                      />
                    </View>
                    <Text className="text-lg font-bold">DR. Kim Derek</Text>
                    <Text className="text-[#777777]">ENT Surgeon</Text>
                  </View>
                </Animated.View>
              )}
              {!showHeader && (
                <>
                  <View className="h-1 w-16 bg-[#000000] mx-auto my-2 rounded"></View>
                  <View className="flex-row items-center justify-between">
                    <Text className="text-3xl font-bold text-center">
                      DR. Kim Derek
                    </Text>
                    <TouchableOpacity className="ml-3">
                      <Feather name="bookmark" size={24} color="#000" />
                    </TouchableOpacity>
                  </View>
                  <Text className="text-lg text-[#777777] mb-3 mx-1">
                    ENT Surgeon
                  </Text>
                  <Text className="text-sm text-left mb-5 px-2">
                    Dr. Kim Derek, is a distinguished ENT surgeon renowned for
                    her expertise in diagnosing and treating conditions
                    affecting the ear, nose, and throat. With a passion for
                    improving patients' quality of life, Dr. Chen combines
                    compassion with cutting-edge medical knowledge to provide
                    comprehensive care.
                  </Text>
                  <View className="flex-row gap-1 items-center mb-2">
                    <FontAwesome name="star" size={20} color="#FFD700" />
                    <FontAwesome name="star" size={20} color="#FFD700" />
                    <FontAwesome name="star" size={20} color="#FFD700" />
                    <FontAwesome name="star" size={20} color="#FFD700" />
                    <FontAwesome name="star" size={20} color="#3F3E3C" />
                    <Text className="text-base ml-2">4.66</Text>
                  </View>
                  <View className="flex-row items-center">
                    <Feather name="clock" size={16} color="#7B7B7B" />
                    <Text className="text-[#7B7B7B] ml-2">
                      04:00 PM - 08:00 PM
                    </Text>
                  </View>
                </>
              )}
              <View>
                <DoctorAppointment />
              </View>
            </View>
          </>
        )}
        keyExtractor={(item) => item.key}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default Doctorprofile;
