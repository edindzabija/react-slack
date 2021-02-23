import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyB43y4bqxRaibksCA30X7Sub-iB2kD0EPc',
  authDomain: 'react-slack-5ead0.firebaseapp.com',
  projectId: 'react-slack-5ead0',
  storageBucket: 'react-slack-5ead0.appspot.com',
  messagingSenderId: '371450743247',
  appId: '1:371450743247:web:49f985cb4cd2b0a00beaba',
  measurementId: 'G-ER5G8PQER4',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db }
