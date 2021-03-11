import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyAEKgvxxYJPt7ulV67jMEg9_u83alcGmBw",
        authDomain: "my-app2-db.firebaseapp.com",
        projectId: "my-app2-db",
        storageBucket: "my-app2-db.appspot.com",
        messagingSenderId: "744536728383",
        appId: "1:744536728383:web:449166ab5db6351de5698a",
        measurementId: "G-1RQ37WRW3F"
      };

    export const createUserProfileDocument = async(userAuth,additionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
            const { displayName , email} = userAuth;
            const createAt = new Date();
            try {
                await userRef.set({
                    displayName,
                    email,
                    createAt,
                    ...additionalData
                })
            }catch (error) {
                console.log('error craeting user!',error.message);
            }
        }
    return userRef;
    };

      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt : 'select_account'});
      
      export const signInWithGoogle = () => auth.signInWithPopup(provider);

      export default firebase;
