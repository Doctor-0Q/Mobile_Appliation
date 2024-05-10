import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
// import ThreeTabs from './components/ThreeTabs';
// import Tasks from './components/Tasks';
// import UpcomingSchedule from './components/UpComingSchduele';
import Dashboard from './components/Dashboard/Dashboard';


export default function App() {
  return (
    <ScrollView >
      <Dashboard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({

});
