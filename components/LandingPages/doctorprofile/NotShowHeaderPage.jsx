import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Feather, FontAwesome } from "@expo/vector-icons";

function NotShowHeaderPage({ docData }) {
    return (
        <>
            <View
                style={{
                    height: 1,
                    width: 16,
                    backgroundColor: "#000000",
                    marginVertical: 10,
                    borderRadius: 3,
                }}
            ></View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    {/* {item.Name} */}
                    {docData?.name}
                    {'\n'}
                </Text>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        // textAlign: "flex-end", 
                    }}
                >
                    {/* {item.Name} */}
                    {docData?.city}

                </Text>
                <TouchableOpacity>
                    <Feather name="bookmark" size={24} color="#000" />
                </TouchableOpacity>
            </View>
            <Text
                style={{
                    fontSize: 16,
                    color: "#777777",
                    marginVertical: 10,
                }}
            >
                {docData?.specializations}
            </Text>
            <Text
                style={{
                    fontSize: 14,
                    textAlign: "left",
                    marginVertical: 10,
                }}
            >
                {docData?.name}, is a distinguished ENT surgeon renowned for
                her expertise in diagnosing and treating conditions
                affecting the ear, nose, and throat. With a passion for
                improving patients' quality of life, {docData?.name}{" "}
                combines compassion with cutting-edge medical knowledge to
                provide comprehensive care.
            </Text>
            {/* <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 5,
                }}
            >
                <FontAwesome name="star" size={20} color="#FFD700" />
                <FontAwesome name="star" size={20} color="#FFD700" />
                <FontAwesome name="star" size={20} color="#FFD700" />
                <FontAwesome name="star" size={20} color="#FFD700" />
                <FontAwesome name="star" size={20} color="#3F3E3C" />
                <Text style={{ fontSize: 18, marginLeft: 5 }}>4.66</Text>
            </View> */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 5,
                }}
            >
                <Feather name="clock" size={16} color="#7B7B7B" />
                <Text style={{ color: "#7B7B7B", marginLeft: 5 }}>
                    09:00 PM - 08:00 PM
                </Text>
            </View>
        </>
    )
}

export default NotShowHeaderPage;