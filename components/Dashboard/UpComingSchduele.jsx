import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  Feather,
  FontAwesome5,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";

const UpcomingSchedule = () => {
  return (
    <View className=" bg-[#FFFFFF] rounded w-full pb-7 px-6">
      <View className="flex flex-row h-10 items-center w-522   justify-between px-2">
        <Text className="font-extrabold text-sm sm:text-lg">
          Upcoming schedule
        </Text>
        <View className="flex flex-row items-center gap-1">
          <Text className="text-xs font-extrabold w-22  text-[#0000AC]">
            New appointment
          </Text>
          <View className="border border-[#E0E0E0] rounded p-1">
            <FontAwesome5 name="plus" size={10} color="#0000AC" />
          </View>
        </View>
      </View>
      <View className="my-1">
        <View className="flex-2  flex-row px-2 ">
          <Text className="border-r-2 border-[#E0E0E0] w-20 relative text-lg text-[#828282]">
            08: 00
          </Text>
          <Text className="h-3 absolute left-[81px]  bg-black rounded-3xl w-3"></Text>
          <View>
            <View className=" h-8 w-52  ml-4">
              <View className="flex-1 flex-row gap-2  items-center ">
                <Text className="h-2  bg-[#BDBDBD] rounded-3xl w-2"></Text>
                <Text className="font-bold text-[#828282] w-14 ">8 : 00 </Text>
                <Text className="text-[#828282] line-through">Rice Kotlin</Text>
              </View>
            </View>
            <View className="  h-8 w-52  ml-4">
              <View className="flex-1 flex-row gap-2  items-center ">
                <Text className="h-2  bg-[#BDBDBD] rounded-3xl w-2"></Text>
                <Text className="font-bold text-[#828282]  w-14">8 : 20 </Text>
                <Text className="text-[#828282] line-through">Maya Adamu</Text>
              </View>
            </View>
            <View className="w-64 ">
              <View className="border border-[#E0E0E0]  rounded relative flex-2 flex-row items-center justify-between px-1">
                <View className="w-2 h-2 bg-[#27AE60] rounded"></View>
                <Text className="text-xs font-bold  text-[#1D1D1D]">08:30</Text>
                <Text className="text-xs font-bold  text-[#1D1D1D]">
                  Bolaji Abdulraheem
                </Text>
                <Text className="text-xs font-normal text-[#828282]">
                  Upcoming
                </Text>
                <View className="border rounded px-1 border-[#E0E0E0]  my-1">
                  <FontAwesome5 name="angle-up" size={16} color="#2F80ED" />
                </View>
              </View>
              <View className="border border-[#E0E0E0] rounded p-1 my-2 mx-1">
                <View className="flex flex-row items-center my-1 gap-12">
                  <Text className="font-semibold text-xs w-12">Patient</Text>
                  <Text className="font-normal text-xs">
                    Bolaji Abdulraheem
                  </Text>
                </View>
                <View className="flex flex-row items-center my-1 gap-12">
                  <Text className="font-semibold text-xs w-12">Time</Text>
                  <Text className="font-normal text-xs">8:30 - 9:00</Text>
                </View>
                <View className="flex flex-row items-center my-1 gap-12">
                  <Text className="font-semibold text-xs w-12">Purpose</Text>
                  <Text className="font-normal text-xs">General Checkup</Text>
                </View>
                <View className="w-full h-1 rounded bg-[#E0E0E0]"></View>
                <View className="flex flex-row items-center my-1 justify-between">
                  <View className="flex flex-row items-center mx-1 gap-2">
                    <View className="border border-[#E0E0E0] p-[1px] rounded">
                      <Feather name="trash" size={16} color="#EB5757" />
                    </View>
                    <View className="border border-[#E0E0E0] p-[1px] rounded">
                      <AntDesign name="user" size={16} color="#2F80ED" />
                    </View>
                    <View className="border border-[#E0E0E0] p-[1px] rounded">
                      <FontAwesome
                        name="pencil-square-o"
                        size={16}
                        color="#2F80ED"
                      />
                    </View>
                  </View>
                  <TouchableOpacity>
                    <Text className="cursor-pointer bg-[#0000AC] text-white p-2 rounded">
                      Begin appointment
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="flex-2  flex-row px-2 ">
          <Text className="border-r-2 border-[#E0E0E0] w-20 relative text-lg text-[#828282]">
            09: 00
          </Text>
          <Text className="h-3 absolute left-[81px]  bg-black rounded-3xl w-3"></Text>
          <View>
            <View className=" h-8 w-52  ml-4">
              <View className="flex-1 flex-row gap-2  items-center ">
                <Text className="h-2  bg-[#2F80ED] rounded-3xl w-2"></Text>
                <Text className="font-bold text-[#1D1D1D] w-14 ">9 : 00 </Text>
                <Text className="text-[#1D1D1D] ">Abayomi Johnson</Text>
              </View>
            </View>
            <View className="  h-8 w-52  ml-4">
              <View className="flex-1 flex-row gap-2  items-center ">
                <Text className="h-2  bg-[#2F80ED] rounded-3xl w-2"></Text>
                <Text className=" font-extrabold text-[#1D1D1D]  w-14">
                  9 : 30{" "}
                </Text>
                <Text className="text-[#1D1D1D] ">Rebecca Gifts</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex-2  flex-row px-2 ">
          <Text className="border-r-2 border-[#E0E0E0] w-20 relative text-lg text-[#828282]">
            10: 00
          </Text>
          <Text className="h-3 absolute left-[81px]  bg-black rounded-3xl w-3"></Text>
          <View>
            <View className=" h-8 w-52  ml-4">
              <View className="flex-1 flex-row gap-2  items-center ">
                <Text className="h-2  bg-[#2F80ED] rounded-3xl w-2"></Text>
                <Text className="font-bold text-[#1D1D1D] w-14 ">10 : 00 </Text>
                <Text className="text-[#1D1D1D] ">ERC Report</Text>
              </View>
            </View>
            <View className="  h-8 w-52  ml-4">
              <View className="flex-1 flex-row gap-2  items-center ">
                <Text className="h-2  bg-[#2F80ED] rounded-3xl w-2"></Text>
                <Text className=" font-extrabold text-[#1D1D1D]  w-14">
                  10 : 30{" "}
                </Text>
                <Text className="text-[#1D1D1D] ">Consulation meeting</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex-2  flex-row px-2 ">
          <Text className="border-r-2 border-[#E0E0E0] w-20 relative text-lg text-[#828282]">
            11: 00
          </Text>
          <Text className="h-3 absolute left-[81px]  bg-black rounded-3xl w-3"></Text>
          <View>
            <View className=" h-8 w-52  ml-4">
              <View className="flex-1 flex-row gap-2  items-center ">
                <Text className="h-2  bg-[#2F80ED] rounded-3xl w-2"></Text>
                <Text className="font-bold text-[#1D1D1D] w-14 ">11 : 00 </Text>
                <Text className="text-[#1D1D1D] ">Victory Jones</Text>
              </View>
            </View>
            <View className="  h-8 w-52  ml-4">
              <View className="flex-1  flex-row gap-2  items-center">
                <Text className="h-2  bg-[#2F80ED] rounded-3xl w-2"></Text>
                <Text className=" font-extrabold text-[#1D1D1D]  w-14">
                  11 : 30{" "}
                </Text>
                <Text className="text-[#1D1D1D] ">Board meeting</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UpcomingSchedule;