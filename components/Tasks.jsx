import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome, MaterialCommunityIcons, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';

const Tasks = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.tasksContainer}>
          <View style={styles.breadcrumb}>
            <Text style={styles.breadcrumbText}>Tasks {'>'} Task</Text>
          </View>
          <View style={styles.taskContainer}>
            <View style={styles.taskSection}>
              <View style={styles.header}>
                <Text style={styles.headerText}>To be completed</Text>
                <View style={styles.iconsContainer}>
                  <TouchableOpacity style={styles.icon}>
                    <View style={styles.iconBorder}>
                      <FontAwesome name="plus" size={15} color="#333" />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.icon}>
                    <MaterialCommunityIcons style={styles.iconBorder} name="filter-variant" size={15} color="#333" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.icon}>
                    <AntDesign style={styles.iconBorder} name="questioncircleo" size={15} color="#333" />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.secondheader}>
                <View style={styles.taskItem}>
                  <FontAwesome name="star" size={20} color="yellow" />
                  <Text style={styles.newText}>New</Text>
                </View>
                <View style={styles.divider}></View>
                <View style={styles.taskDetails}>
                  <View style={styles.checkboxContainer}>
                    <Ionicons name="checkbox-outline" size={20} color="#b1b1b1" />
                  </View>
                  <View style={styles.taskDescriptionContainer}>
                    <Text style={styles.taskDescription}>Set up afternoon meeting</Text>
                    <Text style={styles.dateText}>23-oct-2020</Text>
                  </View>
                  <TouchableOpacity style={styles.dotsIcon}>
                    <Ionicons name="ellipsis-horizontal" size={25} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.taskSection}>
            <View style={styles.thirdheader}>
              <Text style={styles.headerText}>Task #1</Text>
              <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.icon} >
                  <FontAwesome style={styles.iconBorder} name="check" size={20} color="green" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                  <MaterialIcons style={styles.iconBorder} name="autorenew" size={20} color="#B1B1B1" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                  <AntDesign style={styles.iconBorder} name="edit" size={18} color="#B1B1B1" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                  <MaterialIcons style={styles.iconBorder} name="delete" size={20} color="red" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.secondheader}>
              <View style={styles.taskItem}>
                <Text style={styles.taskItemText}>Set up afternoon meeting</Text>
              </View>
              <View style={styles.divider}></View>
              <Text style={styles.description}>
                Set up a virtual meeting for all consultants by afternoon. Link must be communicated to everyone before 1pm.
              </Text>
              <View style={styles.tagContainer}>
                <MaterialIcons name="timer" size={16} color="green" style={styles.othericon}/>
                <Text>Today</Text>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.tagContainer}>
                <FontAwesome name="tag" size={20} color="red" style={styles.othericon}/>
                <Text>Urgent</Text>
              </View>
              <Text style={styles.taskCreated}>John Doe created a task.</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    marginTop: '8%',
    backgroundColor: '#f9f8f8',
    padding: 10,
  },
  tasksContainer: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    fontFamily: 'mukta',
  },
  breadcrumb: {
    fontFamily: 'medium',
    paddingVertical: 10,
  },
  breadcrumbText: {
    fontSize: 16,
    fontFamily: 'medium',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  taskSection: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    marginHorizontal: 5,
    marginTop: 10,
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  secondheader: {
    backgroundColor: '#fff',
    marginTop: 10
  },

  thirdheader:{
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },

  headerText: {
    fontSize: 18,
    fontFamily: 'medium',
    fontWeight: '600'
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    padding: 5,
  },
  iconBorder: {
    borderWidth: 1,
    borderColor: '#b1b1b1',
    padding: 3,
  },

  othericon: {
    padding: 2,
    paddingRight: 5
  },

  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    paddingLeft: 5,
    paddingTop: 5
  },
  taskItemText: {
    fontSize: 16,
    fontFamily: 'medium',
    marginLeft: 5,
    fontWeight: '600',
    paddingTop: 10
  },
  newText: {
    fontSize: 18,
    fontFamily: 'medium',
    marginLeft: 10,
    fontWeight: '600',
  },
  divider: {
    borderBottomColor: '#e5e7eb',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  taskDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  checkboxContainer: {
    marginRight: 10,
  },
  taskDescriptionContainer: {
    flex: 1,
    marginRight: 10,
  },
  taskDescription: {
    fontSize: 16,
    fontFamily: 'medium',
    fontWeight: '600'
  },
  dateText: {
    color: '#b1b1b1',
    fontSize: 12,
    marginTop: 3,
  },
  dotsIcon: {
    padding: 5,
  },
  description: {
    paddingTop: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
  },

  taskCreated: {
    paddingLeft: 10,
    paddingBottom: 10
  }
});

export default Tasks;
