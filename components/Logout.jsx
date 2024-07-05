import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { clientAuth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

function Logout() {
    const navigation = useNavigation();
    const [user, setUser] = useState(true);
    useEffect(() => {
        clientAuth.onAuthStateChanged(async (user) => {
            if (!user) {
                console.log("No user is logged in");
                setUser(true);
                navigation.navigate("Sign In");
            }
        });
    }, []);

    const handleLogout = async () => {
        await signOut(clientAuth);
        console.log("User Signed Out");
        setUser(false);
        navigation.navigate("Sign In");
    }
    return (
        <View className="p-8  bg-white rounded-t-3xl">
            <View classname="flex-row justify-center items-center mb-4">
                {user ? <Text onPress={handleLogout}>
                    Logout
                </Text>
                    :
                    <Text>
                        No user Signed In
                    </Text>
                }
            </View>
        </View>
    )
}

export default Logout