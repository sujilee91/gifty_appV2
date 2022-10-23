// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCqVJJopyitDi6m627xguWj9fvsMVwshs4',
  authDomain: 'gifty-v2-1.firebaseapp.com',
  databaseURL: 'https://gifty-v2-1-default-rtdb.firebaseio.com',
  projectId: 'gifty-v2-1',
  storageBucket: 'gifty-v2-1.appspot.com',
  messagingSenderId: '901113553802',
  appId: '1:901113553802:web:f993d244f907c5d75a9e73',
  measurementId: 'G-LH4E9EGHR0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// Get a list of cities from your database
async function getUsers(db) {
  const users = collection(db, 'users')
  const userSnap = await getDocs(users)
  const usersList = userSnap.docs.map((doc) => doc.data())

  return usersList
}
