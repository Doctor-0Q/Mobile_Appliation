import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import API_URL from '../../config';
import { Toast } from 'toastify-react-native';
import { useNavigation } from "@react-navigation/native";
import { clientAuth } from '../../utils/firebase';
import Logout, { handleLogout } from '../Logout';

const PatientDetails = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: '',
    phoneNumber: '',
    gender: '',
    city: '',
    age: '',
  });

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleDocSignup = async () => {
    try {
      console.log("hiii");
      const data = { ...values, token: await clientAuth.currentUser.getIdToken() }
      // const data=values;
      const res = await fetch(`${API_URL}/api/user/signup/patient`, {
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
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Name</Text>
              <TextInput
                style={styles.input}
                value={values.name}
                placeholder="John Doe"
                onChangeText={(text) => handleChange('name', text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Phone Number</Text>
              <TextInput
                style={styles.input}
                value={values.phoneNumber}
                placeholder="Number"
                onChangeText={(text) => handleChange('phoneNumber', text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Gender</Text>
              <TextInput
                style={styles.input}
                value={values.gender}
                placeholder="Gender"
                onChangeText={(text) => handleChange('gender', text)}
              />
            </View>
      
            <View style={styles.inputContainer}>
              <Text style={styles.text}>City</Text>
              <TextInput
                style={styles.input}
                value={values.city}
                placeholder="Bangalore"
                onChangeText={(text) => handleChange('city', text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Age</Text>
              <TextInput
                style={styles.input}
                value={values.age}
                placeholder="age"
                keyboardType="numeric"
                onChangeText={(text) => handleChange('age', text)}
              />
            </View>
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
});

export default PatientDetails;