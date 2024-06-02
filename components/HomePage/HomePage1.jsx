import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { tw } from "nativewind";
import docimg from "../../assets/Homepage/Pic.png";
import clinic from "../../assets/Homepage/clinic.png";
import doc from "../../assets/Homepage/doc.png";
import banner from "../../assets/Homepage/banner.png";
import Notification from "../../assets/Homepage/Notification.png";
import Stethoscope from "../../assets/Homepage/Stethoscope.png";
// import docimg from "../../assets/Homepage/Pic.png";
const HomePage = () => {
  return (
    <ScrollView style={tw`bg-white p-4`}>
      {/* Header */}
      <View style={tw`flex-row items-center justify-between`}>
        <View style={tw`flex-row items-center`}>
          <Image source={docimg} style={tw`w-12 h-12 rounded-full`} />
          <View style={tw`ml-3`}>
            <Text style={tw`text-lg font-semibold`}>Welcome Back</Text>
            <Text style={tw`text-lg`}>Andrew Smith</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            source={Notification} // Replace with your icon URL
            style={tw`w-6 h-6`}
          />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={tw`mt-4`}>
        <TextInput
          placeholder="Search doctor..."
          style={tw`border p-2 rounded-lg`}
        />
      </View>

      {/* Banner */}
      <View style={tw`mt-4 bg-gray-100 p-4 rounded-lg`}>
        <Text style={tw`text-lg font-semibold`}>
          Specialized Healthcare, Just a Tap Away
        </Text>
        <Text>Schedule an appointment with our top doctors.</Text>
        <Image
          source={banner} // Replace with your image URL
          style={tw`w-full h-40 mt-2 rounded-lg`}
        />
      </View>

      {/* Services */}
      <View style={tw`mt-4`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-lg font-semibold`}>Services</Text>
          <TouchableOpacity>
            <Text style={tw`text-blue-500`}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-around mt-4`}>
          {/* Repeat for other service icons */}
          <View style={tw`items-center`}>
            <Image
              source={Stethoscope} // Replace with your icon URL
              style={tw`w-10 h-10`}
            />
            <Text>Doctor</Text>
          </View>
          <View style={tw`items-center`}>
            <Image
              source={Stethoscope} // Replace with your icon URL
              style={tw`w-10 h-10`}
            />
            <Text>Drug</Text>
          </View>
          <View style={tw`items-center`}>
            <Image
              source={Stethoscope} // Replace with your icon URL
              style={tw`w-10 h-10`}
            />
            <Text>Check Up</Text>
          </View>
          <View style={tw`items-center`}>
            <Image
              source={Stethoscope} // Replace with your icon URL
              style={tw`w-10 h-10`}
            />
            <Text>Care</Text>
          </View>
        </View>
      </View>

      {/* Nearby Hospitals */}
      <View style={tw`mt-4`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-lg font-semibold`}>Nearby Hospitals</Text>
          <TouchableOpacity>
            <Text style={tw`text-blue-500`}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          style={tw`mt-4`}
          showsHorizontalScrollIndicator={false}
        >
          {/* Repeat for other hospitals */}
          <View style={tw`mr-4 bg-gray-100 p-4 rounded-lg`}>
            <Image
              source={clinic} // Replace with your image URL
              style={tw`w-40 h-24 rounded-lg`}
            />
            <Text style={tw`mt-2 font-semibold`}>Sunrise Hospital</Text>
            <Text>123 Oak Street, CA 98765</Text>
            <Text style={tw`mt-2 text-yellow-500`}>5.0 ⭐️ (58 Reviews)</Text>
            <View style={tw`flex-row mt-2 items-center`}>
              <Text style={tw`text-gray-500`}>2.5 km</Text>
              <Text style={tw`ml-2 text-gray-500`}>Hospital</Text>
            </View>
          </View>
          <View style={tw`mr-4 bg-gray-100 p-4 rounded-lg`}>
            <Image
              source={clinic} // Replace with your image URL
              style={tw`w-40 h-24 rounded-lg`}
            />
            <Text style={tw`mt-2 font-semibold`}>Golden Hospital</Text>
            <Text>95 Bridge Street, NY 10013</Text>
            <Text style={tw`mt-2 text-yellow-500`}>4.8 ⭐️ (45 Reviews)</Text>
            <View style={tw`flex-row mt-2 items-center`}>
              <Text style={tw`text-gray-500`}>2.5 km</Text>
              <Text style={tw`ml-2 text-gray-500`}>Hospital</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Top Specialist */}
      <View style={tw`mt-4`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-lg font-semibold`}>Top Specialist</Text>
          <TouchableOpacity>
            <Text style={tw`text-blue-500`}>See All</Text>
          </TouchableOpacity>
        </View>
        {/* Repeat for other specialists */}
        <View style={tw`bg-gray-100 p-4 mt-4 rounded-lg`}>
          <View style={tw`flex-row items-center`}>
            <Image
              source={doc} // Replace with your image URL
              style={tw`w-12 h-12 rounded-full`}
            />
            <View style={tw`ml-3`}>
              <Text style={tw`font-semibold`}>Robert Johnson</Text>
              <Text>Neurologist | ABC hospital</Text>
              <View style={tw`flex-row items-center mt-2`}>
                <Text style={tw`text-yellow-500`}>4.8 ⭐️</Text>
                <Text style={tw`ml-2 text-gray-500`}>10:30am - 5:30pm</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={tw`mt-4 bg-blue-500 py-2 rounded-lg`}>
            <Text style={tw`text-center text-white`}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;
