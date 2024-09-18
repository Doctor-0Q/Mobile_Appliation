// import React from 'react'
// import { Text, View } from 'react-native'

// const DoctorDetails = () => {
//   return (
//     <View>
//         <Text>
//         DoctorDetails
//             </Text></View>
//   )
// }



// export default DoctorDetails

// import React, { useState } from 'react-native';

import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import API_URL from '../../config';
import { Toast } from 'toastify-react-native';
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker'; // Import Picker
import { clientAuth } from '../../utils/firebase';
import Logout, { handleLogout } from '../Logout';

const DoctorDetails = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: '',
    phoneNumber: '',
    gender: 'Male', // Default value for gender
    specializations: '',
    firm: '',
    city: 'Bangalore', // Default value for city
    age: '',
  });

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleDocSignup = async () => {
    try {
      console.log("hiii");
      const data = { ...values, token: await clientAuth.currentUser.getIdToken() }
      const res = await fetch(`${API_URL}/api/user/signup/doctor`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const datas = await res.json();
      if (!res.ok) {
        Toast.error(datas);
        return;
      }
      Toast.success(datas);
      await clientAuth.currentUser.getIdToken(true);
    } catch (error) {
      Toast.error("Network unavailable! Try again");
      return;
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.text}>Loading...</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.mainContainer}>
          <View style={styles.innerContainer}>
            <Button title="Logout" onPress={handleLogout} />
            <Text style={styles.header}>Welcome to Doc-Q</Text>
            <Text style={styles.subheader}>Tell us about yourself</Text>

            {/* Name Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Name</Text>
              <TextInput
                style={styles.input}
                value={values.name}
                placeholder="John Doe"
                onChangeText={(text) => handleChange('name', text)}
              />
            </View>

            {/* Phone Number Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Phone Number</Text>
              <TextInput
                style={styles.input}
                value={values.phoneNumber}
                placeholder="Number"
                onChangeText={(text) => handleChange('phoneNumber', text)}
              />
            </View>

            {/* Gender Dropdown */}
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Gender</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={values.gender}
                  onValueChange={(itemValue) => handleChange('gender', itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                  <Picker.Item label="Other" value="Other" />
                </Picker>
              </View>
            </View>

            {/* Specialization Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Specialization</Text>
              <TextInput
                style={styles.input}
                value={values.specializations}
                placeholder="Dentist"
                onChangeText={(text) => handleChange('specializations', text)}
              />
            </View>

            {/* Firm Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Firm Name</Text>
              <TextInput
                style={styles.input}
                value={values.firm}
                placeholder="Healthcare"
                onChangeText={(text) => handleChange('firm', text)}
              />
            </View>

            {/* City Dropdown */}
            <View style={styles.inputContainer}>
              <Text style={styles.text}>City</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={values.city}
                  onValueChange={(itemValue) => handleChange('city', itemValue)}
                  style={styles.picker}
                >
                 <Picker.Item label="Select City" value="" />
                  <Picker.Item label="Mumbai" value="Mumbai" />
                  <Picker.Item label="Delhi" value="Delhi" />
                  <Picker.Item label="Bangalore" value="Bangalore" />
                  <Picker.Item label="Hyderabad" value="Hyderabad" />
                  <Picker.Item label="Ahmedabad" value="Ahmedabad" />
                  <Picker.Item label="Chennai" value="Chennai" />
                  <Picker.Item label="Kolkata" value="Kolkata" />
                  <Picker.Item label="Surat" value="Surat" />
                  <Picker.Item label="Pune" value="Pune" />
                  <Picker.Item label="Jaipur" value="Jaipur" />
                  <Picker.Item label="Lucknow" value="Lucknow" />
                  <Picker.Item label="Kanpur" value="Kanpur" />
                  <Picker.Item label="Nagpur" value="Nagpur" />
                  <Picker.Item label="Indore" value="Indore" />
                  <Picker.Item label="Thane" value="Thane" />
                  <Picker.Item label="Bhopal" value="Bhopal" />
                  <Picker.Item label="Visakhapatnam" value="Visakhapatnam" />
                  <Picker.Item label="Patna" value="Patna" />
                  <Picker.Item label="Vadodara" value="Vadodara" />
                  <Picker.Item label="Ghaziabad" value="Ghaziabad" />
                  <Picker.Item label="Ludhiana" value="Ludhiana" />
                  <Picker.Item label="Agra" value="Agra" />
                  <Picker.Item label="Nashik" value="Nashik" />
                  <Picker.Item label="Faridabad" value="Faridabad" />
                  <Picker.Item label="Meerut" value="Meerut" />
                  <Picker.Item label="Rajkot" value="Rajkot" />
                  <Picker.Item label="Kalyan-Dombivli" value="Kalyan-Dombivli" />
                  <Picker.Item label="Vasai-Virar" value="Vasai-Virar" />
                  <Picker.Item label="Varanasi" value="Varanasi" />
                  <Picker.Item label="Srinagar" value="Srinagar" />
                </Picker>
              </View>
            </View>

            {/* Age Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Age</Text>
              <TextInput
                style={styles.input}
                value={values.age}
                placeholder="Age"
                keyboardType="numeric"
                onChangeText={(text) => handleChange('age', text)}
              />
            </View>

            {/* Finish Button */}
            <Button title="Finish" onPress={handleDocSignup} />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '80%',
    marginBottom: 10,
    textAlign: 'center',
  },
  pickerContainer: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default DoctorDetails;

