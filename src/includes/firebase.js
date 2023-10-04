import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCYj9wpp_ojkPqp4EDOauTY-pIXewQFPY0',
  authDomain: 'musicgram-9883a.firebaseapp.com',
  projectId: 'musicgram-9883a',
  storageBucket: 'musicgram-9883a.appspot.com',
  appId: '1:95522373499:web:9841a20e79193644d5c7de'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, storage, songsCollection, commentsCollection }
