import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from "date-fns";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const generateDays = (date) => {
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    const days = eachDayOfInterval({ start, end }).map((day) => ({
      day: format(day, "d"),
      dayOfWeek: format(day, "E"),
      booked: Math.random() > 0.7, // Randomly mark some days as booked
    }));
    return days;
  };

  const days = generateDays(currentDate);

  const renderItem = ({ item }) => (
    <View style={[styles.dayContainer, item.booked && styles.booked]}>
      <Text style={styles.dayText}>{item.day}</Text>
      <Text style={styles.dayOfWeek}>{item.dayOfWeek}</Text>
      {item.booked && <Text style={styles.bookedText}>Booked</Text>}
    </View>
  );

  const changeMonth = (months) => {
    setCurrentDate(addMonths(currentDate, months));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Appointment</Text>
      <Text style={styles.subHeader}>04:00 PM - 08:00 PM</Text>
      <View style={styles.monthContainer}>
        <TouchableOpacity onPress={() => changeMonth(-1)}>
          <Text style={styles.monthChange}>Previous</Text>
        </TouchableOpacity>
        <Text style={styles.month}>{format(currentDate, "MMMM yyyy")}</Text>
        <TouchableOpacity onPress={() => changeMonth(1)}>
          <Text style={styles.monthChange}>Next</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={days}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 16,
    marginVertical: 10,
  },
  monthContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  month: {
    fontSize: 20,
    fontWeight: "bold",
  },
  monthChange: {
    fontSize: 16,
    color: "#007BFF",
  },
  dayContainer: {
    width: 100,
    height: 100,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRadius: 10,
  },
  booked: {
    backgroundColor: "#004d40",
  },
  dayText: {
    fontSize: 24,
    color: "#fff",
  },
  dayOfWeek: {
    fontSize: 16,
    color: "#fff",
  },
  bookedText: {
    color: "#fff",
    marginTop: 5,
  },
});

export default Calendar;
