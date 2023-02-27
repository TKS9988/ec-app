import firebase from 'Firebase/compat/app';
import 'Firebase/compat/auth';
import "firebase/compat/storage";
import "firebase/compat/firestore";

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}
// if a Firebase instance doesn't exist, create one
if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseCredentials)
  }

export default firebase
const auth_obj = firebase.auth();
export const auth = auth_obj;
export const db = firebase.firestore();
export const storage = firebase.storage();
// export const FirebaseTimestamp = firebase.firestore.Timestamp; 