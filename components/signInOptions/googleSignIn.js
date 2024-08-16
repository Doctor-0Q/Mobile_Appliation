// import { clientAuth } from "../../utils/firebase";
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';


async function googleSignIn() {
    console.log("dfd");
    
    // GoogleSignin.configure({
    //     webClientId: '791700607387-0623aca7bphm2tdh6umfju26duqgqu9p.apps.googleusercontent.com'
    // })
    // try {
    //     // async function onGoogleButtonPress() {
    //     // Check if your device supports Google Play
    //     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    //     // Get the users ID token
    //     const { idToken } = await GoogleSignin.signIn();

    //     // Create a Google credential with the token
    //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    //     // Sign-in the user with the credential
    //     // return auth().signInWithCredential(googleCredential);
    //     try {
    //         const user_sign_in = await auth().signInWithCredential(googleCredential);
    //         console.log(user_sign_in.user);
    //     }
    //     catch (e) {
    //         console.log("1", e);
    //     }

    // }
    // catch (e) {
    //     console.log("2", e);
    // }
}

export default googleSignIn;