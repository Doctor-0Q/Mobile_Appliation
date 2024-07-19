// src/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { handleLogout } from '../Logout';

const ProfileScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View
                className="items-center mb-4">
                <View className="relative">
                    <Image
                        style={styles.profileImage}
                        source={require("../../assets/ProfileSettings/profile-pic.jpg")}
                    />
                    <TouchableOpacity className="absolute bottom-3 right-0 bg-[#1B7CA3] rounded-md p-1"
                    >
                        <MaterialCommunityIcons name="pencil" size={16} color="#fff" />
                    </TouchableOpacity>
                </View>
                <Text className="text-xl font-bold text-[#004D6C]">Jhon Doe</Text>
                <Text className="text-[#004D6C80] text-lg">+123 856479683</Text>
            </View>
            <View
                className="w-full">
                <MenuItem imageSource={require("../../assets/ProfileSettings/user-edit.png")} text="Edit Profile" />
                <MenuItem imageSource={require("../../assets/ProfileSettings/heart.png")} text="Favorite" />
                <MenuItem imageSource={require("../../assets/ProfileSettings/notification.png")} text="Notifications" />
                <MenuItem imageSource={require("../../assets/ProfileSettings/setting-2.png")} text="Settings" />
                <MenuItem imageSource={require("../../assets/ProfileSettings/message-question.png")} text="Help and Support" />
                <MenuItem imageSource={require("../../assets/ProfileSettings/security-safe.png")} text="Terms and Conditions" />
                <MenuItem imageSource={require("../../assets/ProfileSettings/logout.png")} text="Log Out"/>
            </View>
        </ScrollView>
    );
};

const handleMenuPress = (text) => {
    if (text === 'Log Out') {
        handleLogout();
    }
}

const MenuItem = ({ imageSource, text }) => {
    return (
        <TouchableOpacity
            className="flex-row items-center justify-between py-3 border-b-2 border-[#ddd]" onPress={() => handleMenuPress(text)}>
            <Image source={imageSource} style={styles.menuIcon} />
            <Text
                className="ml-4 text-base text-[#004D6C] flex-1"
            >{text}</Text>
            <Icon name="chevron-forward-outline" size={20} color="#6B7280" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    menuIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },

});

export default ProfileScreen;


