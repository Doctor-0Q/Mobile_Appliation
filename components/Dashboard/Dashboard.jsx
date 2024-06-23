import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView, ScrollViewComponent } from "react-native";
import ThreeTabs from "./ThreeTabs";
import Tasks from "./Tasks";
import UpcomingSchedule from "./UpComingSchduele";
import { useEffect } from "react";
import axios from "axios";
import API_URL from "../../config";

export default function Dashboard() {
  const getPatients = async () => {
    // setPatients(paginate(data));
    try {
      const res = await axios.post(`${API_URL}/api/patientslist`, {
        docId: "2FZilBl6rlRI5IsPYMmyMtbFJrG2",
      });
      // const res = await axios.get(`http://localhost:8080/api/endpoint`);
      const datas = await res.data;
      // console.log(datas);
      // setData(datas);
    } catch (error) {
      console.error(error);
      return;
    }
  };

  useEffect(() => {
    getPatients();
  }, []);
  return (
    <ScrollView>
    <View>
      <ThreeTabs />
      <Tasks />
      <UpcomingSchedule />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
