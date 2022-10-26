import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

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

const app = initializeApp(firebaseConfig)

const db = getDatabase()

export { db }
