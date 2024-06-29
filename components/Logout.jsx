import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';

function Logout() {
    const [user, setUser] = useState(true);
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                await signOut(auth);
                setUser(false);
            }
            else{
                console.log("No user is logged in");
                setUser(true);
            }
        })
    }, []);
  return (
    <View>
        {user ? <Text>
            Logout
        </Text>
        :
        <Text>
            No user is logged in
        </Text>
        }

    </View>
  )
}

export default Logout