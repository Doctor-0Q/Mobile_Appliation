import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

function Logout() {
    const navigation = useNavigation();
    const [user, setUser] = useState(true);
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                await signOut(auth);
                console.log("User Signed Out");
                setUser(false);
                navigation.navigate("LogOut");
            }
            else{
                console.log("No user is logged in");
                setUser(true);
                navigation.navigate("LogOut");
            }
        });
    }, []);
  return (
    <View>
        {user ? <Text>
            Logout
        </Text>
        :
        <Text>
            User Signed Out
        </Text>
        }
    </View>
  )
}

export default Logout