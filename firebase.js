import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyCNjwAZ9ru78goQ2-att0AUSjVj6ju7h7c',
  authDomain: 'react-whatsapp-clone-69e2d.firebaseapp.com',
  projectId: 'react-whatsapp-clone-69e2d',
  storageBucket: 'react-whatsapp-clone-69e2d.appspot.com',
  messagingSenderId: '396968496104',
  appId: '1:396968496104:web:d7c11c927fe45595c4725d',
  measurementId: 'G-CLJT60QK7L'
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
